<template><div><h1 id="api-文档" tabindex="-1"><a class="header-anchor" href="#api-文档"><span>API 文档</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>邮件模板分析系统提供完整的RESTful API接口，支持邮件发送、模板管理、数据分析等功能。</p>
<h2 id="认证" tabindex="-1"><a class="header-anchor" href="#认证"><span>认证</span></a></h2>
<h3 id="api密钥认证" tabindex="-1"><a class="header-anchor" href="#api密钥认证"><span>API密钥认证</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">Authorization: Bearer YOUR_API_KEY</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="请求头" tabindex="-1"><a class="header-anchor" href="#请求头"><span>请求头</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'Authorization'</span><span class="token operator">:</span> <span class="token string">'Bearer YOUR_API_KEY'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'X-Request-ID'</span><span class="token operator">:</span> <span class="token string">'unique-request-id'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基础url" tabindex="-1"><a class="header-anchor" href="#基础url"><span>基础URL</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code><span class="line">https://api.email-analyzer.com/v1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="邮件发送api" tabindex="-1"><a class="header-anchor" href="#邮件发送api"><span>邮件发送API</span></a></h2>
<h3 id="发送单封邮件" tabindex="-1"><a class="header-anchor" href="#发送单封邮件"><span>发送单封邮件</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">POST /emails/send</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>请求体：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"recipient@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"邮件主题"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"template_id"</span><span class="token operator">:</span> <span class="token string">"template_123"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"张三"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"示例公司"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"track_opens"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"track_clicks"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"priority"</span><span class="token operator">:</span> <span class="token string">"high"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>响应：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"success"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message_id"</span><span class="token operator">:</span> <span class="token string">"msg_123456"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"status"</span><span class="token operator">:</span> <span class="token string">"queued"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"estimated_delivery"</span><span class="token operator">:</span> <span class="token string">"2024-01-15T10:30:00Z"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="批量发送邮件" tabindex="-1"><a class="header-anchor" href="#批量发送邮件"><span>批量发送邮件</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">POST /emails/batch</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>请求体：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"template_id"</span><span class="token operator">:</span> <span class="token string">"template_123"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"recipients"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"user1@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户1"</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"user2@example.com"</span><span class="token punctuation">,</span> </span>
<span class="line">      <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"用户2"</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"batch_size"</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"delay_between_batches"</span><span class="token operator">:</span> <span class="token number">60</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模板管理api" tabindex="-1"><a class="header-anchor" href="#模板管理api"><span>模板管理API</span></a></h2>
<h3 id="获取模板列表" tabindex="-1"><a class="header-anchor" href="#获取模板列表"><span>获取模板列表</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">GET /templates?page=1&amp;limit=20&amp;category=marketing</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>响应：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"templates"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">"template_123"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"欢迎邮件模板"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"welcome"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"created_at"</span><span class="token operator">:</span> <span class="token string">"2024-01-01T00:00:00Z"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"updated_at"</span><span class="token operator">:</span> <span class="token string">"2024-01-15T00:00:00Z"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pagination"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"page"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"limit"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"total"</span><span class="token operator">:</span> <span class="token number">150</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"pages"</span><span class="token operator">:</span> <span class="token number">8</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建模板" tabindex="-1"><a class="header-anchor" href="#创建模板"><span>创建模板</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">POST /templates</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>请求体：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"新模板"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"category"</span><span class="token operator">:</span> <span class="token string">"marketing"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"subject"</span><span class="token operator">:</span> <span class="token string">"{{subject}}"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"html_content"</span><span class="token operator">:</span> <span class="token string">"&lt;html>...&lt;/html>"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"text_content"</span><span class="token operator">:</span> <span class="token string">"纯文本内容"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"variables"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"company"</span><span class="token punctuation">,</span> <span class="token string">"product"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新模板" tabindex="-1"><a class="header-anchor" href="#更新模板"><span>更新模板</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">PUT /templates/{template_id}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="删除模板" tabindex="-1"><a class="header-anchor" href="#删除模板"><span>删除模板</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">DELETE /templates/{template_id}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="数据分析api" tabindex="-1"><a class="header-anchor" href="#数据分析api"><span>数据分析API</span></a></h2>
<h3 id="获取发送统计" tabindex="-1"><a class="header-anchor" href="#获取发送统计"><span>获取发送统计</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">GET /analytics/send-stats?start_date=2024-01-01&amp;end_date=2024-01-31</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>响应：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"period"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"start_date"</span><span class="token operator">:</span> <span class="token string">"2024-01-01"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"end_date"</span><span class="token operator">:</span> <span class="token string">"2024-01-31"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"stats"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"total_sent"</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"delivered"</span><span class="token operator">:</span> <span class="token number">9800</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"bounced"</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"opened"</span><span class="token operator">:</span> <span class="token number">4900</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"clicked"</span><span class="token operator">:</span> <span class="token number">2450</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"unsubscribed"</span><span class="token operator">:</span> <span class="token number">50</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"rates"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"delivery_rate"</span><span class="token operator">:</span> <span class="token number">98.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"open_rate"</span><span class="token operator">:</span> <span class="token number">50.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"click_rate"</span><span class="token operator">:</span> <span class="token number">25.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"bounce_rate"</span><span class="token operator">:</span> <span class="token number">2.0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"unsubscribe_rate"</span><span class="token operator">:</span> <span class="token number">0.5</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取打开率趋势" tabindex="-1"><a class="header-anchor" href="#获取打开率趋势"><span>获取打开率趋势</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">GET /analytics/open-rate?template_id=template_123&amp;days=30</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="获取点击率数据" tabindex="-1"><a class="header-anchor" href="#获取点击率数据"><span>获取点击率数据</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">GET /analytics/click-rate?campaign_id=campaign_123</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="用户管理api" tabindex="-1"><a class="header-anchor" href="#用户管理api"><span>用户管理API</span></a></h2>
<h3 id="获取用户列表" tabindex="-1"><a class="header-anchor" href="#获取用户列表"><span>获取用户列表</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">GET /users?page=1&amp;limit=20&amp;status=active</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="添加用户" tabindex="-1"><a class="header-anchor" href="#添加用户"><span>添加用户</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">POST /users</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>请求体：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"first_name"</span><span class="token operator">:</span> <span class="token string">"张"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"last_name"</span><span class="token operator">:</span> <span class="token string">"三"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"示例公司"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tags"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vip"</span><span class="token punctuation">,</span> <span class="token string">"newsletter"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更新用户" tabindex="-1"><a class="header-anchor" href="#更新用户"><span>更新用户</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">PUT /users/{user_id}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="删除用户" tabindex="-1"><a class="header-anchor" href="#删除用户"><span>删除用户</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">DELETE /users/{user_id}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理"><span>错误处理</span></a></h2>
<h3 id="错误响应格式" tabindex="-1"><a class="header-anchor" href="#错误响应格式"><span>错误响应格式</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"INVALID_EMAIL"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"邮箱地址格式不正确"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"details"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"email"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"invalid-email"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"request_id"</span><span class="token operator">:</span> <span class="token string">"req_123456"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见错误码" tabindex="-1"><a class="header-anchor" href="#常见错误码"><span>常见错误码</span></a></h3>
<table>
<thead>
<tr>
<th>错误码</th>
<th>描述</th>
<th>HTTP状态码</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>INVALID_API_KEY</code></td>
<td>API密钥无效</td>
<td>401</td>
</tr>
<tr>
<td><code v-pre>RATE_LIMIT_EXCEEDED</code></td>
<td>请求频率超限</td>
<td>429</td>
</tr>
<tr>
<td><code v-pre>INVALID_EMAIL</code></td>
<td>邮箱地址格式错误</td>
<td>400</td>
</tr>
<tr>
<td><code v-pre>TEMPLATE_NOT_FOUND</code></td>
<td>模板不存在</td>
<td>404</td>
</tr>
<tr>
<td><code v-pre>INSUFFICIENT_QUOTA</code></td>
<td>配额不足</td>
<td>402</td>
</tr>
</tbody>
</table>
<h2 id="速率限制" tabindex="-1"><a class="header-anchor" href="#速率限制"><span>速率限制</span></a></h2>
<h3 id="限制规则" tabindex="-1"><a class="header-anchor" href="#限制规则"><span>限制规则</span></a></h3>
<ul>
<li><strong>免费用户</strong>: 1000次/小时</li>
<li><strong>基础用户</strong>: 10000次/小时</li>
<li><strong>专业用户</strong>: 100000次/小时</li>
<li><strong>企业用户</strong>: 无限制</li>
</ul>
<h3 id="响应头" tabindex="-1"><a class="header-anchor" href="#响应头"><span>响应头</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line"><span class="token header"><span class="token header-name keyword">X-RateLimit-Limit</span><span class="token punctuation">:</span> <span class="token header-value">1000</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">X-RateLimit-Remaining</span><span class="token punctuation">:</span> <span class="token header-value">999</span></span></span>
<span class="line"><span class="token header"><span class="token header-name keyword">X-RateLimit-Reset</span><span class="token punctuation">:</span> <span class="token header-value">1642233600</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="webhook" tabindex="-1"><a class="header-anchor" href="#webhook"><span>Webhook</span></a></h2>
<h3 id="配置webhook" tabindex="-1"><a class="header-anchor" href="#配置webhook"><span>配置Webhook</span></a></h3>
<div class="language-http line-numbers-mode" data-highlighter="prismjs" data-ext="http"><pre v-pre><code><span class="line">POST /webhooks</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>请求体：</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"url"</span><span class="token operator">:</span> <span class="token string">"https://your-domain.com/webhook"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"events"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"email.delivered"</span><span class="token punctuation">,</span> <span class="token string">"email.opened"</span><span class="token punctuation">,</span> <span class="token string">"email.clicked"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"secret"</span><span class="token operator">:</span> <span class="token string">"your-webhook-secret"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="webhook事件" tabindex="-1"><a class="header-anchor" href="#webhook事件"><span>Webhook事件</span></a></h3>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"event"</span><span class="token operator">:</span> <span class="token string">"email.opened"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"timestamp"</span><span class="token operator">:</span> <span class="token string">"2024-01-15T10:30:00Z"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"message_id"</span><span class="token operator">:</span> <span class="token string">"msg_123456"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"email"</span><span class="token operator">:</span> <span class="token string">"user@example.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"template_id"</span><span class="token operator">:</span> <span class="token string">"template_123"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"user_agent"</span><span class="token operator">:</span> <span class="token string">"Mozilla/5.0..."</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"ip_address"</span><span class="token operator">:</span> <span class="token string">"192.168.1.1"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sdk示例" tabindex="-1"><a class="header-anchor" href="#sdk示例"><span>SDK示例</span></a></h2>
<h3 id="javascript-sdk" tabindex="-1"><a class="header-anchor" href="#javascript-sdk"><span>JavaScript SDK</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EmailAPI <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@email-analyzer/sdk'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> api <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EmailAPI</span><span class="token punctuation">(</span><span class="token string">'YOUR_API_KEY'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 发送邮件</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">sendEmail</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">to</span><span class="token operator">:</span> <span class="token string">'user@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">template_id</span><span class="token operator">:</span> <span class="token string">'template_123'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">variables</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'张三'</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取统计数据</span></span>
<span class="line"><span class="token keyword">const</span> stats <span class="token operator">=</span> <span class="token keyword">await</span> api<span class="token punctuation">.</span><span class="token function">getSendStats</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">start_date</span><span class="token operator">:</span> <span class="token string">'2024-01-01'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">end_date</span><span class="token operator">:</span> <span class="token string">'2024-01-31'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python-sdk" tabindex="-1"><a class="header-anchor" href="#python-sdk"><span>Python SDK</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py"><pre v-pre><code><span class="line"><span class="token keyword">from</span> email_analyzer <span class="token keyword">import</span> EmailAPI</span>
<span class="line"></span>
<span class="line">api <span class="token operator">=</span> EmailAPI<span class="token punctuation">(</span><span class="token string">'YOUR_API_KEY'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发送邮件</span></span>
<span class="line">result <span class="token operator">=</span> api<span class="token punctuation">.</span>send_email<span class="token punctuation">(</span></span>
<span class="line">    to<span class="token operator">=</span><span class="token string">'user@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">    template_id<span class="token operator">=</span><span class="token string">'template_123'</span><span class="token punctuation">,</span></span>
<span class="line">    variables<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">'name'</span><span class="token punctuation">:</span> <span class="token string">'张三'</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取统计数据</span></span>
<span class="line">stats <span class="token operator">=</span> api<span class="token punctuation">.</span>get_send_stats<span class="token punctuation">(</span></span>
<span class="line">    start_date<span class="token operator">=</span><span class="token string">'2024-01-01'</span><span class="token punctuation">,</span></span>
<span class="line">    end_date<span class="token operator">=</span><span class="token string">'2024-01-31'</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2>
<h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h3>
<ol>
<li><strong>批量操作</strong> - 使用批量API减少请求次数</li>
<li><strong>异步处理</strong> - 对于大量邮件使用异步发送</li>
<li><strong>缓存模板</strong> - 缓存常用模板减少API调用</li>
<li><strong>错误重试</strong> - 实现指数退避重试机制</li>
</ol>
<h3 id="安全建议" tabindex="-1"><a class="header-anchor" href="#安全建议"><span>安全建议</span></a></h3>
<ol>
<li><strong>保护API密钥</strong> - 不要在客户端代码中暴露API密钥</li>
<li><strong>验证输入</strong> - 验证所有用户输入数据</li>
<li><strong>HTTPS传输</strong> - 始终使用HTTPS进行API调用</li>
<li><strong>监控异常</strong> - 监控异常的API调用模式</li>
</ol>
<h3 id="开发建议" tabindex="-1"><a class="header-anchor" href="#开发建议"><span>开发建议</span></a></h3>
<ol>
<li><strong>使用SDK</strong> - 优先使用官方SDK</li>
<li><strong>处理错误</strong> - 正确处理所有可能的错误情况</li>
<li><strong>日志记录</strong> - 记录重要的API调用和错误</li>
<li><strong>测试环境</strong> - 在测试环境中充分测试API功能</li>
</ol>
</div></template>


