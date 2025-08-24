# API 文档

## 概述

邮件模板分析系统提供完整的RESTful API接口，支持邮件发送、模板管理、数据分析等功能。

## 认证

### API密钥认证
```bash
Authorization: Bearer YOUR_API_KEY
```

### 请求头
```javascript
{
  'Content-Type': 'application/json',
  'Authorization': 'Bearer YOUR_API_KEY',
  'X-Request-ID': 'unique-request-id'
}
```

## 基础URL
```
https://api.email-analyzer.com/v1
```

## 邮件发送API

### 发送单封邮件
```http
POST /emails/send
```

**请求体：**
```json
{
  "to": "recipient@example.com",
  "subject": "邮件主题",
  "template_id": "template_123",
  "variables": {
    "name": "张三",
    "company": "示例公司"
  },
  "options": {
    "track_opens": true,
    "track_clicks": true,
    "priority": "high"
  }
}
```

**响应：**
```json
{
  "success": true,
  "message_id": "msg_123456",
  "status": "queued",
  "estimated_delivery": "2024-01-15T10:30:00Z"
}
```

### 批量发送邮件
```http
POST /emails/batch
```

**请求体：**
```json
{
  "template_id": "template_123",
  "recipients": [
    {
      "email": "user1@example.com",
      "variables": {"name": "用户1"}
    },
    {
      "email": "user2@example.com", 
      "variables": {"name": "用户2"}
    }
  ],
  "options": {
    "batch_size": 100,
    "delay_between_batches": 60
  }
}
```

## 模板管理API

### 获取模板列表
```http
GET /templates?page=1&limit=20&category=marketing
```

**响应：**
```json
{
  "templates": [
    {
      "id": "template_123",
      "name": "欢迎邮件模板",
      "category": "welcome",
      "created_at": "2024-01-01T00:00:00Z",
      "updated_at": "2024-01-15T00:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "pages": 8
  }
}
```

### 创建模板
```http
POST /templates
```

**请求体：**
```json
{
  "name": "新模板",
  "category": "marketing",
  "subject": "{{subject}}",
  "html_content": "<html>...</html>",
  "text_content": "纯文本内容",
  "variables": ["name", "company", "product"]
}
```

### 更新模板
```http
PUT /templates/{template_id}
```

### 删除模板
```http
DELETE /templates/{template_id}
```

## 数据分析API

### 获取发送统计
```http
GET /analytics/send-stats?start_date=2024-01-01&end_date=2024-01-31
```

**响应：**
```json
{
  "period": {
    "start_date": "2024-01-01",
    "end_date": "2024-01-31"
  },
  "stats": {
    "total_sent": 10000,
    "delivered": 9800,
    "bounced": 200,
    "opened": 4900,
    "clicked": 2450,
    "unsubscribed": 50
  },
  "rates": {
    "delivery_rate": 98.0,
    "open_rate": 50.0,
    "click_rate": 25.0,
    "bounce_rate": 2.0,
    "unsubscribe_rate": 0.5
  }
}
```

### 获取打开率趋势
```http
GET /analytics/open-rate?template_id=template_123&days=30
```

### 获取点击率数据
```http
GET /analytics/click-rate?campaign_id=campaign_123
```

## 用户管理API

### 获取用户列表
```http
GET /users?page=1&limit=20&status=active
```

### 添加用户
```http
POST /users
```

**请求体：**
```json
{
  "email": "user@example.com",
  "first_name": "张",
  "last_name": "三",
  "company": "示例公司",
  "tags": ["vip", "newsletter"]
}
```

### 更新用户
```http
PUT /users/{user_id}
```

### 删除用户
```http
DELETE /users/{user_id}
```

## 错误处理

### 错误响应格式
```json
{
  "error": {
    "code": "INVALID_EMAIL",
    "message": "邮箱地址格式不正确",
    "details": {
      "field": "email",
      "value": "invalid-email"
    }
  },
  "request_id": "req_123456"
}
```

### 常见错误码
| 错误码 | 描述 | HTTP状态码 |
|--------|------|------------|
| `INVALID_API_KEY` | API密钥无效 | 401 |
| `RATE_LIMIT_EXCEEDED` | 请求频率超限 | 429 |
| `INVALID_EMAIL` | 邮箱地址格式错误 | 400 |
| `TEMPLATE_NOT_FOUND` | 模板不存在 | 404 |
| `INSUFFICIENT_QUOTA` | 配额不足 | 402 |

## 速率限制

### 限制规则
- **免费用户**: 1000次/小时
- **基础用户**: 10000次/小时  
- **专业用户**: 100000次/小时
- **企业用户**: 无限制

### 响应头
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642233600
```

## Webhook

### 配置Webhook
```http
POST /webhooks
```

**请求体：**
```json
{
  "url": "https://your-domain.com/webhook",
  "events": ["email.delivered", "email.opened", "email.clicked"],
  "secret": "your-webhook-secret"
}
```

### Webhook事件
```json
{
  "event": "email.opened",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "message_id": "msg_123456",
    "email": "user@example.com",
    "template_id": "template_123",
    "user_agent": "Mozilla/5.0...",
    "ip_address": "192.168.1.1"
  }
}
```

## SDK示例

### JavaScript SDK
```javascript
import { EmailAPI } from '@email-analyzer/sdk'

const api = new EmailAPI('YOUR_API_KEY')

// 发送邮件
const result = await api.sendEmail({
  to: 'user@example.com',
  template_id: 'template_123',
  variables: { name: '张三' }
})

// 获取统计数据
const stats = await api.getSendStats({
  start_date: '2024-01-01',
  end_date: '2024-01-31'
})
```

### Python SDK
```python
from email_analyzer import EmailAPI

api = EmailAPI('YOUR_API_KEY')

# 发送邮件
result = api.send_email(
    to='user@example.com',
    template_id='template_123',
    variables={'name': '张三'}
)

# 获取统计数据
stats = api.get_send_stats(
    start_date='2024-01-01',
    end_date='2024-01-31'
)
```

## 最佳实践

### 性能优化
1. **批量操作** - 使用批量API减少请求次数
2. **异步处理** - 对于大量邮件使用异步发送
3. **缓存模板** - 缓存常用模板减少API调用
4. **错误重试** - 实现指数退避重试机制

### 安全建议
1. **保护API密钥** - 不要在客户端代码中暴露API密钥
2. **验证输入** - 验证所有用户输入数据
3. **HTTPS传输** - 始终使用HTTPS进行API调用
4. **监控异常** - 监控异常的API调用模式

### 开发建议
1. **使用SDK** - 优先使用官方SDK
2. **处理错误** - 正确处理所有可能的错误情况
3. **日志记录** - 记录重要的API调用和错误
4. **测试环境** - 在测试环境中充分测试API功能
