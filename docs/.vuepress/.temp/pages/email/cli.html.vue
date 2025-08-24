<template><div><h1 id="cli工具" tabindex="-1"><a class="header-anchor" href="#cli工具"><span>CLI工具</span></a></h1>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>邮件模板分析系统提供了命令行工具，方便您进行批量操作和自动化处理。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> email-analyzer-cli</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2>
<h3 id="发送邮件" tabindex="-1"><a class="header-anchor" href="#发送邮件"><span>发送邮件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">email-cli send <span class="token parameter variable">--template</span> welcome <span class="token parameter variable">--to</span> user@example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="批量发送" tabindex="-1"><a class="header-anchor" href="#批量发送"><span>批量发送</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">email-cli batch <span class="token parameter variable">--template</span> newsletter <span class="token parameter variable">--list</span> users.csv</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="分析报告" tabindex="-1"><a class="header-anchor" href="#分析报告"><span>分析报告</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">email-cli analyze <span class="token parameter variable">--report</span> <span class="token parameter variable">--output</span> report.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="命令选项" tabindex="-1"><a class="header-anchor" href="#命令选项"><span>命令选项</span></a></h2>
<table>
<thead>
<tr>
<th>选项</th>
<th>描述</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>--template</code></td>
<td>模板名称</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>--to</code></td>
<td>收件人邮箱</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>--subject</code></td>
<td>邮件主题</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>--data</code></td>
<td>数据文件</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>--output</code></td>
<td>输出文件</td>
<td>stdout</td>
</tr>
</tbody>
</table>
<h2 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件"><span>配置文件</span></a></h2>
<p>CLI工具支持配置文件：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"smtp"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"smtp.example.com"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">587</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"secure"</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"templates"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"./templates"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"defaults"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"noreply@example.com"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="发送欢迎邮件" tabindex="-1"><a class="header-anchor" href="#发送欢迎邮件"><span>发送欢迎邮件</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">email-cli send <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--template</span> welcome <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--to</span> newuser@example.com <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--data</span> <span class="token string">'{"name": "张三", "company": "示例公司"}'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="生成分析报告" tabindex="-1"><a class="header-anchor" href="#生成分析报告"><span>生成分析报告</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code><span class="line">email-cli analyze <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--template</span> newsletter <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--period</span> <span class="token string">"2024-01-01 to 2024-01-31"</span> <span class="token punctuation">\</span></span>
<span class="line">  <span class="token parameter variable">--output</span> monthly-report.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


