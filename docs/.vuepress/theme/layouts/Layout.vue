<template>
  <div id="app">
    <!-- 自定义头部 -->
    <header class="custom-header">
      <div class="header-content">
        <h1 class="site-title">📧 邮件模板分析文档</h1>
        <p class="site-description">专业的邮件模板分析与管理系统</p>
      </div>
    </header>
    
    <!-- 默认主题布局 -->
    <Layout />
    
    <!-- 自定义底部 -->
    <footer class="custom-footer">
      <div class="footer-content">
        <p>&copy; 2025 邮件模板分析系统. 保留所有权利.</p>
        <div class="footer-links">
          <a href="/get-started.html">快速开始</a>
          <a href="/email/config.html">配置指南</a>
          <a href="https://github.com/your-repo" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Layout } from '@vuepress/theme-default/lib/client'

export default {
  name: 'CustomLayout',
  components: {
    Layout,
  },
}
</script>

<style scoped>
.custom-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.site-title {
  font-size: 2.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
}

.site-description {
  font-size: 1.2rem;
  margin: 0;
  opacity: 0.9;
}

.custom-footer {
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 2rem 0;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-links {
  display: flex;
  gap: 1rem;
}

.footer-links a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #495057;
}

@media (max-width: 768px) {
  .site-title {
    font-size: 2rem;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
