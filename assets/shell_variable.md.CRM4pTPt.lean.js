import{_ as e,c as a,a2 as d,o as r}from"./chunks/framework.trnLO_3_.js";const b=JSON.parse('{"title":"变量","description":"","frontmatter":{},"headers":[],"relativePath":"shell/variable.md","filePath":"shell/variable.md","lastUpdated":1735793351000}'),o={name:"shell/variable.md"};function l(n,t,s,c,i,h){return r(),a("div",null,t[0]||(t[0]=[d('<h1 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h1><h2 id="命令替换" tabindex="-1">命令替换 <a class="header-anchor" href="#命令替换" aria-label="Permalink to &quot;命令替换&quot;">​</a></h2><table tabindex="0"><thead><tr><th></th><th>语法</th><th>示例</th><th>输出</th></tr></thead><tbody><tr><td>1</td><td><code> `command`</code></td><td><code>echo `date`</code></td><td>Tue Jul 16 15:23:28 CST 2024</td></tr><tr><td>2</td><td><code>$(command)</code></td><td><code>echo $(date)</code></td><td>Tue Jul 16 15:23:28 CST 2024</td></tr></tbody></table><h2 id="变量类型声明" tabindex="-1">变量类型声明 <a class="header-anchor" href="#变量类型声明" aria-label="Permalink to &quot;变量类型声明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>命令</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>declare</td><td>-r：只读<br>-i：整数<br>-a：数组<br>-f：显示系统函数及其实现<br>-F：仅显示系统函数名<br>-x：环境变量<br><br>取消变量申明直接将<code>-</code>改为<code>+</code>，如<code>declare -r var</code></td><td>var=&quot;hello world&quot;<br>declare -r var</td></tr><tr><td>typeset</td><td></td><td></td></tr></tbody></table><h2 id="数学运算" tabindex="-1">数学运算 <a class="header-anchor" href="#数学运算" aria-label="Permalink to &quot;数学运算&quot;">​</a></h2><table tabindex="0"><thead><tr><th>序号</th><th>语法</th></tr></thead><tbody><tr><td>1</td><td>expr num1 operate $num2</td></tr><tr><td>2</td><td>$(($num1 operate $num2))</td></tr></tbody></table><p><img src="https://gitlab.com/loveagri/pic/-/raw/main/2023-01-17/21/image-20230117214812513_compress_20230117214813.png" alt="image-20230117214812513" loading="lazy"></p><table tabindex="0"><thead><tr><th>操作符</th><th>语法</th></tr></thead><tbody><tr><td><code>expr num1 | num2</code></td><td>num1不为空且非0，返回num1，否则返回num2</td></tr><tr><td><code>expr num1 \\&amp; num2</code></td><td>num1不为空且非0，返回num1，否则返回0</td></tr><tr><td><code>expr num1 = num2</code></td><td>num1等于num2，返回1，否则返回0</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">提示</p><ol><li><code>$(( ))</code>中可以进行逻辑运算，<code>$()</code>用于变量替换，注意区分。</li><li>运算符，逻辑符号，某些逻辑符号需要转意，前边加反斜线, 如，|、&amp;、&lt;&gt;,*, &gt; 为管道符所以需要转义，<span style="color:red;">数学运算时建议使用expr</span>。</li></ol></div><h2 id="bc运算" tabindex="-1">BC运算 <a class="header-anchor" href="#bc运算" aria-label="Permalink to &quot;BC运算&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">echo</span><span style="color:#98C379;"> &quot;scale=4; </span><span style="color:#E06C75;">$num1</span><span style="color:#98C379;"> + </span><span style="color:#E06C75;">$num2</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">bc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',12)]))}const u=e(o,[["render",l]]);export{b as __pageData,u as default};