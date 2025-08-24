# CLI工具

## 概述

邮件模板分析系统提供了命令行工具，方便您进行批量操作和自动化处理。

## 安装

```bash
npm install -g email-analyzer-cli
```

## 基本用法

### 发送邮件

```bash
email-cli send --template welcome --to user@example.com
```

### 批量发送

```bash
email-cli batch --template newsletter --list users.csv
```

### 分析报告

```bash
email-cli analyze --report --output report.json
```

## 命令选项

| 选项 | 描述 | 默认值 |
|------|------|--------|
| `--template` | 模板名称 | - |
| `--to` | 收件人邮箱 | - |
| `--subject` | 邮件主题 | - |
| `--data` | 数据文件 | - |
| `--output` | 输出文件 | stdout |

## 配置文件

CLI工具支持配置文件：

```json
{
  "smtp": {
    "host": "smtp.example.com",
    "port": 587,
    "secure": false
  },
  "templates": {
    "path": "./templates"
  },
  "defaults": {
    "from": "noreply@example.com"
  }
}
```

## 示例

### 发送欢迎邮件

```bash
email-cli send \
  --template welcome \
  --to newuser@example.com \
  --data '{"name": "张三", "company": "示例公司"}'
```

### 生成分析报告

```bash
email-cli analyze \
  --template newsletter \
  --period "2024-01-01 to 2024-01-31" \
  --output monthly-report.json
```