# AI Image Paste (AI 视觉图片粘贴)

![Version](https://vsmarketplacebadges.dev/version/Zwing.ai-image-paste.svg)
![Installs](https://vsmarketplacebadges.dev/installs-short/Zwing.ai-image-paste.svg)
![Ratings](https://vsmarketplacebadges.dev/rating-star/Zwing.ai-image-paste.svg)

这是一个为程序员和撰稿人量身定制的 VS Code 效率插件。它能够拦截你剪贴板中的截图，调用**多模态视觉大模型 (Vision LLM)** 进行高精度的 OCR 识别，并将结果以提示词自定义格式（如 Markdown）直接插入到你的光标位置。

## ✨ 核心特性

* 🧠 **大模型驱动**：默认支持阿里云通义千问（Qwen-VL）、智谱（GLM-4V）等顶级视觉大模型，全面兼容 OpenAI 接口规范。
* ⚙️ **100% 自由定义**：内置自定义提示词（Prompt）功能。你可以随时在设置中修改指令，比如让 AI “将图片内容转为 mermaid 格式”，玩法无限！
* 💻 **快捷键调用**：方便快捷，无需打开浏览器或第三方工具，直接在 VS Code 中完成。

## 🚀 如何使用

1. 使用你常用的截图工具（如微信截图、`Win + Shift + S`）截取一段带有文字、代码或表格的画面。
2. 在 VS Code 中打开任意文本文件，将光标移动到你需要插入的位置。
3. 按下快捷键：**`Ctrl + Shift + Z`**。
4. 稍等一两秒，见证奇迹的发生。

## 📋 环境要求

1. **操作系统**：目前剪贴板图片提取模块基于 PowerShell 脚本实现，**仅支持 Windows 操作系统**。
2. **API 密钥**：本插件不内置免费的 API Key。你需要前往相应的平台申请（个人使用场景下额度绝对充足），如：
   * [阿里云百炼控制台 (推荐通义千问)](https://bailian.console.aliyun.com/)
   * [智谱 AI 开放平台](https://open.bigmodel.cn/)

## ⚙️ 插件设置

本插件在 VS Code 设置面板中提供了以下配置项（进入设置搜索 `aiImagePaste` 即可找到）：

* `aiImagePaste.apiKey`: **[必填]** 你的大模型 API Key。
* `aiImagePaste.apiUrl`: 大模型 API 接口完整地址。默认配置为通义千问兼容接口。
* `aiImagePaste.model`: 选择你要使用的视觉大模型。默认为 `qwen-vl-plus`。
* `aiImagePaste.prompt`: 自定义发送给大模型的系统提示词。你可以通过修改这里的多行文本，来改变 AI 的识别偏好和输出行为。

> * 另外的，如果该插件的快捷键与其他软件冲突，你可以极其方便地修改它：
>   * 在 VS Code 中按下 `Ctrl + K` 然后按 `Ctrl + S` 打开“键盘快捷方式”设置。
>   * 在顶部搜索框输入：`aiImagePaste.paste`
>   * 双击搜索结果，在键盘上按下你想设置的新快捷键并回车即可生效！

## ⚠️ 已知问题

* 目前提取剪贴板底层使用了原生 PowerShell 命令，尚未适配 macOS 和 Linux 系统下的剪贴板图片读取。
* 必须确保剪贴板中是“图片数据”（截图），而不是“图片文件”。

## 📝 发行说明

查看本插件的完整版本历史和更新记录，请参阅 [CHANGELOG.md](CHANGELOG.md)。
