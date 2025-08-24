# VuePress 自定义配置说明

## 文件结构

```
docs/.vuepress/
├── config.js          # 主配置文件
├── client.js          # 客户端配置文件
├── theme/             # 自定义主题
│   ├── index.js       # 主题入口文件
│   └── layouts/       # 自定义布局
│       └── Layout.vue # 主布局组件
├── styles/            # 样式文件
│   └── index.scss     # 全局样式
├── public/            # 静态资源
│   └── images/        # 图片资源
└── README.md          # 本说明文件
```

## 自定义功能

### 1. 首页自定义 (`docs/README.md`)
- 修改了首页标题、描述和功能特性
- 添加了邮件模板相关的功能介绍
- 自定义了按钮链接和页脚信息

### 2. 客户端配置 (`client.js`)
- 添加了应用启动日志
- 配置了路由钩子函数
- 为后续功能扩展预留了接口

### 3. 自定义主题 (`theme/index.js`)
- 继承默认主题并自定义配置
- 修改了导航栏和侧边栏结构
- 添加了主题相关配置

### 4. 自定义布局 (`theme/layouts/Layout.vue`)
- 添加了自定义头部和底部
- 集成了默认主题布局
- 添加了响应式设计

### 5. 全局样式 (`styles/index.scss`)
- 定义了CSS变量
- 自定义了首页、导航栏、侧边栏样式
- 添加了响应式设计

## 使用方法

1. **启动开发服务器**：
   ```bash
   npm run docs:dev
   ```

2. **构建生产版本**：
   ```bash
   npm run docs:build
   ```

3. **清理缓存**：
   ```bash
   npm run docs:clean-dev
   ```

## 自定义说明

### 修改主题颜色
在 `styles/index.scss` 中修改CSS变量：
```scss
:root {
  --primary-color: #667eea;    // 主色调
  --secondary-color: #764ba2;  // 辅助色
  --text-color: #2c3e50;       // 文字颜色
}
```

### 添加新页面
1. 在 `docs/` 目录下创建新的 `.md` 文件
2. 在 `config.js` 或主题配置中添加导航链接
3. 配置侧边栏结构

### 自定义组件
1. 在 `theme/` 目录下创建组件
2. 在 `client.js` 中注册全局组件
3. 在页面中使用组件

## 注意事项

1. 确保所有路径配置正确
2. 图片资源需要放在 `public/` 目录下
3. 样式文件使用SCSS语法
4. 主题配置需要正确继承默认主题

## 扩展功能

可以根据需要添加以下功能：
- 搜索功能
- 评论系统
- 多语言支持
- 主题切换
- 代码高亮
- 数学公式支持
