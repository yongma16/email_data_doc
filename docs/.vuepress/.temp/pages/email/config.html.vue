<template><div><h1 id="邮箱配置" tabindex="-1"><a class="header-anchor" href="#邮箱配置"><span>邮箱配置</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>本文档介绍如何配置邮件模板分析系统的邮箱设置。</p>
<h2 id="配置选项" tabindex="-1"><a class="header-anchor" href="#配置选项"><span>配置选项</span></a></h2>
<h3 id="smtp配置" tabindex="-1"><a class="header-anchor" href="#smtp配置"><span>SMTP配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">'smtp.example.com'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">587</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">secure</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'your-email@example.com'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pass</span><span class="token operator">:</span> <span class="token string">'your-password'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api配置" tabindex="-1"><a class="header-anchor" href="#api配置"><span>API配置</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">'your-api-key'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">endpoint</span><span class="token operator">:</span> <span class="token string">'https://api.example.com/send'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置步骤" tabindex="-1"><a class="header-anchor" href="#配置步骤"><span>配置步骤</span></a></h2>
<ol>
<li>选择邮件服务商</li>
<li>获取配置信息</li>
<li>在系统中配置</li>
<li>测试发送功能</li>
</ol>
<h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2>
<h3 id="连接超时" tabindex="-1"><a class="header-anchor" href="#连接超时"><span>连接超时</span></a></h3>
<p>检查网络连接和防火墙设置。</p>
<h3 id="认证失败" tabindex="-1"><a class="header-anchor" href="#认证失败"><span>认证失败</span></a></h3>
<p>确认用户名和密码正确。</p>
</div></template>


