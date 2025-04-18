import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const b=JSON.parse('{"title":"变长参数","description":"","frontmatter":{},"headers":[],"relativePath":"backend/C/变长参数.md","filePath":"backend/C/变长参数.md","lastUpdated":1737792726000}'),e={name:"backend/C/变长参数.md"};function o(r,s,c,t,B,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="变长参数" tabindex="-1">变长参数 <a class="header-anchor" href="#变长参数" aria-label="Permalink to &quot;变长参数&quot;">​</a></h1><div class="language-c line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#include</span><span style="color:#98C379;"> &lt;stdio.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#98C379;"> &lt;stdarg.h&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#61AFEF;"> HandleVarargs</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#E06C75;font-style:italic;"> arg_count</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;"> ...</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">    va_list args;</span></span>
<span class="line"><span style="color:#C678DD;">    int</span><span style="color:#ABB2BF;"> i;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">    va_start</span><span style="color:#ABB2BF;">(args, arg_count);</span></span>
<span class="line"><span style="color:#C678DD;">    for</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">=</span><span style="color:#D19A66;"> 0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> arg_count; i</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    {</span></span>
<span class="line"><span style="color:#C678DD;">        int</span><span style="color:#ABB2BF;"> arg </span><span style="color:#C678DD;">=</span><span style="color:#61AFEF;"> va_arg</span><span style="color:#ABB2BF;">(args, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#61AFEF;">        printf</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;</span><span style="color:#D19A66;">%d</span><span style="color:#98C379;"> : </span><span style="color:#D19A66;">%d</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">, i, arg);</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">    va_end</span><span style="color:#ABB2BF;">(args);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#61AFEF;"> main</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#61AFEF;">    HandleVarargs</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">3</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">4</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,2)]))}const A=n(e,[["render",o]]);export{b as __pageData,A as default};
