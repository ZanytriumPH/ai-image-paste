# AI Image Paste

![Version](https://vsmarketplacebadges.dev/version/Zwing.ai-image-paste.svg)
![Installs](https://vsmarketplacebadges.dev/installs-short/Zwing.ai-image-paste.svg)
![Ratings](https://vsmarketplacebadges.dev/rating-star/Zwing.ai-image-paste.svg)

这是一个为程序员和撰稿人量身定制的 VS Code 效率插件。它能够拦截你**剪贴板中的截图**，调用**多模态视觉大模型 (Vision LLM)** 进行高精度的 OCR 识别，并将结果以提示词自定义格式（如 Markdown）直接插入到你的光标位置。

This is a productivity VS Code extension tailored for programmers and writers. It intercepts **screenshots from your clipboard**, calls upon **multimodal Vision Large Language Models (Vision LLM)** for high-precision OCR recognition, and directly inserts the result at your cursor in a customizable format (such as Markdown) based on your prompt.

## ✨ 核心特性 (Core Features)

* 🧠 **大模型驱动**：默认支持阿里云通义千问（Qwen-VL）、智谱（GLM-4V）等顶级视觉大模型，全面兼容 OpenAI 接口规范。

* ⚙️ **100% 自由定义**：内置自定义提示词（Prompt）功能。你可以随时在设置中修改指令，比如让 AI “将图片内容转为 mermaid 格式”，玩法无限！

* 💻 **快捷键调用**：方便快捷，无需打开浏览器或第三方工具，直接在 VS Code 中完成。

` `

* 🧠 **LLM-Driven**: Supports top-tier vision models like Alibaba Cloud's Qwen-VL and Zhipu AI's GLM-4V by default, and is fully compatible with OpenAI API specifications.

* ⚙️ **100% Customizable**: Built-in custom prompt functionality. You can modify instructions in the settings at any time, for example, asking the AI to "convert the image content into mermaid format" – the possibilities are endless!

* 💻 **Shortcut Activation**: Convenient and fast. Complete the task directly within VS Code without opening a browser or third-party tools.

## 🚀 如何使用 (How to Use)

1. 使用你常用的截图工具（如微信截图、`Win + Shift + S`）截取一段带有文字、代码或表格的画面。

2. 在 VS Code 中打开任意文本文件，将光标移动到你需要插入的位置。

3. 按下快捷键：**`Ctrl + Shift + Z`**。

` `

1. Use your preferred screenshot tool (e.g., WeChat screenshot, `Win + Shift + S`) to capture an area containing text, code, or tables.

2. Open any text file in VS Code and move your cursor to the desired insertion point.

3. Press the shortcut: `Ctrl + Shift + Z`.

## 📋 环境要求 (Requirements)

**操作系统**：目前剪贴板图片提取模块基于 PowerShell 脚本实现，**仅支持 Windows 操作系统**。

**API 密钥**：本插件不内置免费的 API Key。你需要前往相应的平台申请（个人使用场景下额度绝对充足），如：

* [阿里云百炼控制台](https://bailian.console.aliyun.com/)
* [智谱 AI 开放平台](https://open.bigmodel.cn/)

**Operating System**: The clipboard image extraction module is currently implemented using PowerShell scripts, so it **only supports Windows OS**.

**API Key**: This extension does not include a free built-in API Key. You need to apply for one on the respective platforms (the free quota is absolutely sufficient for personal use), such as:

* [Alibaba Cloud Bailian Console](https://bailian.console.aliyun.com/)
* [Zhipu AI Open Platform](https://open.bigmodel.cn/)

## ⚙️ 插件设置 (Extension Settings)

本插件在 VS Code 设置面板中提供了以下配置项（进入设置搜索 `aiImagePaste` 即可找到）：

* `aiImagePaste.apiKey`: **[必填]** 你的大模型 API Key。
* `aiImagePaste.apiUrl`: 大模型 API 接口完整地址。
  * 默认配置为通义千问兼容接口。
* `aiImagePaste.model`: 选择你要使用的视觉大模型。
  * 默认为 `qwen-vl-plus`。
* `aiImagePaste.prompt`: 自定义发送给大模型的系统提示词。
  * 你可以通过修改这里的多行文本，来改变 AI 的识别偏好和输出行为。

> 另外的，如果该插件的快捷键与其他软件冲突，你可以极其方便地修改它：
>
> * 在 VS Code 中按下 `Ctrl + K` 然后按 `Ctrl + S` 打开“键盘快捷方式”设置。
> * 在顶部搜索框输入：`aiImagePaste.paste`
> * 双击搜索结果，在键盘上按下你想设置的新快捷键并回车即可生效！

This extension provides the following configurations in the VS Code settings panel (search for `aiImagePaste` in settings to find them):

* `aiImagePaste.apiKey`: **[Required]** Your LLM API Key.
* `aiImagePaste.apiUrl`: The complete API endpoint URL.
  * The default is the Qwen-compatible API.
* `aiImagePaste.model`: Select the Vision LLM you want to use.
  * Defaults to `qwen-vl-plus`.
* `aiImagePaste.prompt`: The custom system prompt sent to the LLM.
  * You can modify this multi-line text to change the AI's recognition preferences and output behavior.

> Additionally, if the extension's shortcut conflicts with other software, you can easily modify it:
>
>* In VS Code, press `Ctrl + K` followed by `Ctrl + S` to open the "Keyboard Shortcuts" settings.
>* Enter `aiImagePaste.paste` in the top search bar.
>* Double-click the search result, press your desired new shortcut on the keyboard, and hit Enter to apply!

## ⚠️ 已知问题 (Known Issues)

目前提取剪贴板底层使用了原生 PowerShell 命令，尚未适配 macOS 和 Linux 系统下的剪贴板图片读取。

必须确保剪贴板中是“图片数据”（截图），而不是“图片文件”。

The underlying clipboard extraction uses native PowerShell commands and is not yet adapted for macOS and Linux.

You must ensure that the clipboard contains "image data" (a screenshot) rather than an "image file".
