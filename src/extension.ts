import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { exec } from 'child_process';
import axios from 'axios';

/**
 * 利用 Windows PowerShell 原生提取剪贴板图片
 */
function saveClipboardImage(imagePath: string): Promise<boolean> {
    return new Promise((resolve) => {
        if (process.platform === 'win32') {
            const script = `
                Add-Type -AssemblyName System.Windows.Forms;
                if ($([System.Windows.Forms.Clipboard]::ContainsImage())) {
                    $image = [System.Windows.Forms.Clipboard]::GetImage();
                    $image.Save('${imagePath}', [System.Drawing.Imaging.ImageFormat]::Png);
                    Write-Output 'success';
                } else {
                    Write-Output 'no_image';
                }
            `.replace(/\n/g, ' ');

            exec(`powershell -command "${script}"`, (err, stdout) => {
                if (stdout.trim() === 'success') {
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        } else {
            vscode.window.showErrorMessage('目前仅支持 Windows 系统提取剪贴板图片！');
            resolve(false);
        }
    });
}

/**
 * 提取剪贴板图片并存入系统临时目录
 */
async function extractImageToTemp(): Promise<string | null> {
    const tempPath: string = path.join(os.tmpdir(), `ocr_temp_${Date.now()}.png`);
    const success = await saveClipboardImage(tempPath);
    if (!success) {
        vscode.window.showWarningMessage('剪贴板中没有图片');
        return null;
    }
    return tempPath;
}

/**
 * 调用视觉大模型 (Vision LLM) 进行智能识别
 */
async function processOcrWithLLM(imagePath: string): Promise<string | null> {
    // 🌟 1. 读取所有的配置（新增读取 prompt）
    const config = vscode.workspace.getConfiguration('aiImagePaste');
    const apiKey = config.get<string>('apiKey');
    const apiUrl = config.get<string>('apiUrl');
    const model = config.get<string>('model');
    // 获取用户填写的 prompt，如果没有则使用默认的一套安全提示词兜底
    const customPrompt = config.get<string>('prompt') || "请提取图片中的文本，包含表格时请输出Markdown格式。";

    if (!apiKey) {
        vscode.window.showErrorMessage('您还未配置大模型 API Key，无法进行识别！', '去配置').then(selection => {
            if (selection === '去配置') {
                vscode.commands.executeCommand('workbench.action.openSettings', 'aiImagePaste.apiKey');
            }
        });
        return null;
    }

    try {
        const imageBase64 = fs.readFileSync(imagePath).toString("base64");
        const imageUrl = `data:image/png;base64,${imageBase64}`;

        const response = await axios.post(
            apiUrl!, 
            {
                model: model, 
                messages: [
                    {
                        role: 'user',
                        content: [
                            { 
                                type: 'text', 
                                // 🌟 2. 这里直接传入用户自定义的 prompt
                                text: customPrompt 
                            },
                            { 
                                type: 'image_url', 
                                image_url: { url: imageUrl } 
                            }
                        ]
                    }
                ]
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        let resultText = response.data.choices[0].message.content;
        resultText = resultText.replace(/^```markdown\n/, '').replace(/\n```$/, '');
        
        return resultText.trim();

    } catch (err: any) {
        const errorMsg = err.response?.data?.error?.message || err.message;
        vscode.window.showErrorMessage(`大模型识别失败：${errorMsg}`);
        return null;
    } finally {
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
        }
    }
}

/**
 * 插件激活入口
 */
export function activate(context: vscode.ExtensionContext): void {
    // 🌟 修改点 3：注册命令的 ID 改为 aiImagePaste.paste
    let disposable = vscode.commands.registerCommand('aiImagePaste.paste', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('请先打开一个文件再进行粘贴！');
            return;
        }

        vscode.window.withProgress({
            location: vscode.ProgressLocation.Notification,
            title: "正在呼叫 AI 识别图片内容...",
            cancellable: false
        }, async (progress) => {
            
            const imagePath = await extractImageToTemp();
            if (!imagePath) return;

            const ocrResult = await processOcrWithLLM(imagePath);
            if (!ocrResult) return;

            await editor.edit(editBuilder => {
                const selection = editor.selection;
                if (!selection.isEmpty) {
                    editBuilder.replace(selection, ocrResult);
                } else {
                    editBuilder.insert(selection.active, ocrResult);
                }
            });
            
            vscode.window.setStatusBarMessage('✨ 图片内容已被 AI 精准插入！', 4000);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate(): void {}