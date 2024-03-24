import{_ as s,o as n,c as a,b as l}from"./app-lZ8g2une.js";const e={},i=l(`<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h1><h2 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数"><span>定义函数</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#DCDCAA;">name</span><span style="color:#D4D4D4;">()</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#DCDCAA;">	command1</span></span>
<span class="line"><span style="color:#DCDCAA;">	command2</span></span>
<span class="line"><span style="color:#DCDCAA;">	...</span></span>
<span class="line"><span style="color:#DCDCAA;">	commandn</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> name</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#DCDCAA;">	command1</span></span>
<span class="line"><span style="color:#DCDCAA;">	command2</span></span>
<span class="line"><span style="color:#DCDCAA;">	...</span></span>
<span class="line"><span style="color:#DCDCAA;">	commandn</span></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p><code>$$</code>获取当前执行脚本的pid, 可用于过滤当前脚本进程，grep -v $$</p></div><h2 id="函数返回值" tabindex="-1"><a class="header-anchor" href="#函数返回值"><span>函数返回值</span></a></h2><p>函数return返回值范围只能是0-255，echo可以返回任何字符串。</p><h2 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量"><span>局部变量</span></a></h2><p>如果一个变量不特别声明，那么它是全局变量，如果想定义为局部变量需要使用<code>local</code>。</p><h2 id="函数库" tabindex="-1"><a class="header-anchor" href="#函数库"><span>函数库</span></a></h2><p>通过<code>.</code>引用外部文件。需要通过绝对路径引入，一般库文件后缀是.lib, 库文件通常没有可执行权限，第一行用如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">#!/bin/echo </span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">function</span><span style="color:#DCDCAA;"> name</span></span>
<span class="line"><span style="color:#D4D4D4;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><div class="highlight-line"> </div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[i];function p(d,o){return n(),a("div",null,c)}const t=s(e,[["render",p],["__file","function.html.vue"]]);export{t as default};
