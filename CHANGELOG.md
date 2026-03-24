# Change Log

All notable changes to the "ai-image-paste" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.3] - 2026-03-24

### Changed

- 解除了设置面板中 `API URL` 和 `Model` 的下拉列表限制，全面支持用户手动输入自定义的大模型地址与模型名称。
- 优化了设置面板的 UI，增加了主流大模型配置（如通义千问、智谱 GLM）的 Markdown 格式参考说明。

## [0.0.2] - 2026-03-24

### Added

- 🚀 核心架构大升级：全面接入多模态视觉大语言模型 (Vision LLM)。
- 极其精准的 Markdown 表格格式化能力。
- 智能识别图片中的代码片段、函数名、变量名，并自动添加 Markdown 行内代码高亮（使用单反引号包裹）。
- 支持用户在设置中完全自定义系统 Prompt（提示词），解锁更多 AI 识别玩法（如自动翻译等）。

## [0.0.1] - 2026-03-23

### Added

- 初始版本发布 (Initial release)。
- 实现基础的剪贴板图片提取与读取功能（仅限 Windows 平台）。
