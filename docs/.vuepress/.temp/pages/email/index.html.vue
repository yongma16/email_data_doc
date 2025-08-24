<template><div><h1 id="邮件系统介绍" tabindex="-1"><a class="header-anchor" href="#邮件系统介绍"><span>邮件系统介绍</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>邮件模板分析系统是一个专业的邮件管理和分析平台，提供完整的邮件模板创建、发送、跟踪和分析功能。</p>
<h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h2>
<h3 id="📧-模板管理" tabindex="-1"><a class="header-anchor" href="#📧-模板管理"><span>📧 模板管理</span></a></h3>
<ul>
<li>创建和编辑邮件模板</li>
<li>支持HTML和Markdown格式</li>
<li>模板版本控制</li>
<li>模板分类管理</li>
</ul>
<h3 id="📊-数据分析" tabindex="-1"><a class="header-anchor" href="#📊-数据分析"><span>📊 数据分析</span></a></h3>
<ul>
<li>发送统计报告</li>
<li>打开率分析</li>
<li>点击率跟踪</li>
<li>用户行为分析</li>
</ul>
<h3 id="🎨-可视化编辑" tabindex="-1"><a class="header-anchor" href="#🎨-可视化编辑"><span>🎨 可视化编辑</span></a></h3>
<ul>
<li>拖拽式模板编辑器</li>
<li>实时预览功能</li>
<li>响应式设计支持</li>
<li>多主题模板</li>
</ul>
<h3 id="🔒-安全可靠" tabindex="-1"><a class="header-anchor" href="#🔒-安全可靠"><span>🔒 安全可靠</span></a></h3>
<ul>
<li>多重身份验证</li>
<li>数据加密传输</li>
<li>发送频率限制</li>
<li>垃圾邮件防护</li>
</ul>
<h2 id="系统架构" tabindex="-1"><a class="header-anchor" href="#系统架构"><span>系统架构</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐</span>
<span class="line">│   前端界面      │    │   后端服务      │    │   邮件服务      │</span>
<span class="line">│                │    │                │    │                │</span>
<span class="line">│ - 模板编辑器   │◄──►│ - API接口      │◄──►│ - SMTP服务     │</span>
<span class="line">│ - 数据分析     │    │ - 数据库       │    │ - API服务      │</span>
<span class="line">│ - 用户管理     │    │ - 缓存系统     │    │ - 队列系统     │</span>
<span class="line">└─────────────────┘    └─────────────────┘    └─────────────────┘</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2>
<h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端"><span>前端</span></a></h3>
<ul>
<li>Vue.js 3</li>
<li>VuePress 2</li>
<li>SCSS</li>
<li>Vite</li>
</ul>
<h3 id="后端" tabindex="-1"><a class="header-anchor" href="#后端"><span>后端</span></a></h3>
<ul>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<li>Redis</li>
</ul>
<h3 id="邮件服务" tabindex="-1"><a class="header-anchor" href="#邮件服务"><span>邮件服务</span></a></h3>
<ul>
<li>Nodemailer</li>
<li>SendGrid API</li>
<li>AWS SES</li>
</ul>
<h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h2>
<ol>
<li>
<p><strong>安装依赖</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>配置环境</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">cp</span> .env.example .env</span>
<span class="line"><span class="token comment"># 编辑 .env 文件配置数据库和邮件服务</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>启动服务</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> run dev</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>访问系统</strong>
打开浏览器访问 <code v-pre>http://localhost:3000</code></p>
</li>
</ol>
<h2 id="配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明"><span>配置说明</span></a></h2>
<p>详细的配置说明请参考：</p>
<ul>
<li><RouteLink to="/email/config.html">邮箱配置</RouteLink> - 邮件服务配置</li>
<li><RouteLink to="/email/cli.html">CLI工具</RouteLink> - 命令行工具使用</li>
</ul>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="q-如何添加新的邮件模板" tabindex="-1"><a class="header-anchor" href="#q-如何添加新的邮件模板"><span>Q: 如何添加新的邮件模板？</span></a></h3>
<p>A: 在模板管理页面点击&quot;新建模板&quot;，使用可视化编辑器或直接编辑HTML代码。</p>
<h3 id="q-如何查看发送统计" tabindex="-1"><a class="header-anchor" href="#q-如何查看发送统计"><span>Q: 如何查看发送统计？</span></a></h3>
<p>A: 在数据分析页面可以查看详细的发送统计、打开率、点击率等数据。</p>
<h3 id="q-支持哪些邮件服务商" tabindex="-1"><a class="header-anchor" href="#q-支持哪些邮件服务商"><span>Q: 支持哪些邮件服务商？</span></a></h3>
<p>A: 支持SMTP、SendGrid、AWS SES等多种邮件服务商。</p>
<h2 id="联系我们" tabindex="-1"><a class="header-anchor" href="#联系我们"><span>联系我们</span></a></h2>
<p>如果您有任何问题或建议，请通过以下方式联系我们：</p>
<ul>
<li>📧 邮箱：support@email-analyzer.com</li>
<li>💬 在线客服：工作日 9:00-18:00</li>
<li>📖 文档：https://docs.email-analyzer.com</li>
</ul>
</div></template>


