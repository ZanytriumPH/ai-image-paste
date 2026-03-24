# AI Image Paste (AI 视觉图片粘贴)

![Version](https://vsmarketplacebadges.dev/version/Zwing.ai-image-paste.svg)
![Installs](https://vsmarketplacebadges.dev/installs-short/Zwing.ai-image-paste.svg)
![Ratings](https://vsmarketplacebadges.dev/rating-star/Zwing.ai-image-paste.svg)

这是一个为程序员和撰稿人量身定制的 VS Code 终极效率插件。它能够拦截你剪贴板中的截图，调用当前最先进的**多模态视觉大模型 (Vision LLM)** 进行超高精度的 OCR 识别，并将结果以极其完美的 Markdown 格式直接插入到你的光标位置。

告别错字连篇、丢失排版的传统老旧 OCR！

## ✨ 核心特性

* 🧮 **极其强悍的表格识别**：再复杂的表格截图，都能瞬间转化为工整、标准的 Markdown 表格。
* 💻 **原生代码与符号保留**：精准识别图片中的代码片段、变量名和函数名，并自动使用行内代码的反引号进行包裹。
* 🧠 **顶级大模型驱动**：默认支持阿里云通义千问（Qwen-VL）、智谱（GLM-4V）等顶级视觉大模型，全面兼容 OpenAI 接口规范。
* ⚙️ **100% 自由定义**：内置自定义提示词（Prompt）功能。你可以随时在设置中修改指令，比如让 AI “提取图片文字并自动翻译为英文”，玩法无限！

## 🚀 如何使用

1. 使用你常用的截图工具（如微信截图、`Win + Shift + S`）截取一段带有文字、代码或表格的画面。
2. 在 VS Code 中打开任意文本文件，将光标移动到你需要插入的位置。
3. 按下快捷键：**`Ctrl + Shift + Z`** (Windows/Linux) 或 **`Cmd + Shift + Z`** (macOS)。
4. 稍等一两秒，见证奇迹的发生。

## 📋 环境要求

1. **操作系统**：目前剪贴板图片提取模块基于 PowerShell 脚本实现，**仅支持 Windows 操作系统**。
2. **API 密钥**：本插件不内置免费的 API Key。你需要前往对应的平台申请（平台通常会赠送海量的免费额度，个人日常开发完全用不完）：
   * [阿里云百炼控制台 (推荐通义千问)](https://bailian.console.aliyun.com/)
   * [智谱 AI 开放平台](https://open.bigmodel.cn/)

## ⚙️ 插件设置

本插件在 VS Code 设置面板中提供了以下配置项（进入设置搜索 `aiImagePaste` 即可找到）：

* `aiImagePaste.apiKey`: **[必填]** 你的大模型 API Key（例如 `sk-xxxxxxxxxxx`）。
* `aiImagePaste.apiUrl`: 大模型 API 接口完整地址。默认配置为通义千问兼容接口：`https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`。
* `aiImagePaste.model`: 选择你要使用的视觉大模型。提供下拉菜单供快速选择（如 `qwen-vl-plus`，`GLM-4.6V-Flash` 等）。
* `aiImagePaste.prompt`: 自定义发送给大模型的系统提示词。你可以通过修改这里的多行文本，来改变 AI 的识别偏好和输出行为。

## ⚠️ 已知问题

* 目前提取剪贴板底层使用了原生 PowerShell 命令，尚未适配 macOS 和 Linux 系统下的剪贴板图片读取。
* 必须确保剪贴板中是“图片数据”（截图），而不是“图片文件”。

## 📝 发行说明

### 0.0.4

* ✨ 新增：默认提示词中添加识别数学公式则转为 Latex 格式的功能。
* 📝 优化：插件说明文档添加动态徽章。

### 0.0.3

* 🛠️ 优化：解除 API URL 和 Model 的下拉列表限制，全面支持输入自定义大模型地址与模型名称。
* 📝 优化：在设置面板中增加了主流大模型配置的参考说明。

### 0.0.2

* 🚀 核心架构升级：抛弃传统基础 OCR API，全面接入多模态视觉大语言模型 (Vision LLM)。
* ✨ 新增：极其精准的 Markdown 表格格式化能力。
* ✨ 新增：智能识别代码片段并添加 Markdown 行内代码高亮。
* 🛠️ 优化：支持自定义系统 Prompt 提示词，扩展玩法。

### 0.0.1

* 初始测试版本。
