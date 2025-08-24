# 邮箱配置

## 概述

本文档介绍如何配置邮件模板分析系统的邮箱设置。

## 配置选项

### SMTP配置

```javascript
{
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: 'your-email@example.com',
    pass: 'your-password'
  }
}
```

### API配置

```javascript
{
  apiKey: 'your-api-key',
  endpoint: 'https://api.example.com/send',
  timeout: 30000
}
```

## 配置步骤

1. 选择邮件服务商
2. 获取配置信息
3. 在系统中配置
4. 测试发送功能

## 常见问题

### 连接超时
检查网络连接和防火墙设置。

### 认证失败
确认用户名和密码正确。