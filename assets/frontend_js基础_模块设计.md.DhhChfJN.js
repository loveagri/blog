import{_ as n,c as l,o as p,ah as o,j as s}from"./chunks/framework.BrJYEL96.js";const y=JSON.parse('{"title":"模块设计","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/js基础/模块设计.md","filePath":"frontend/js基础/模块设计.md","lastUpdated":1734536287000}'),e={name:"frontend/js基础/模块设计.md"};function t(r,a,c,i,B,u){return p(),l("div",null,a[0]||(a[0]=[o(`<h1 id="模块设计" tabindex="-1">模块设计 <a class="header-anchor" href="#模块设计" aria-label="Permalink to &quot;模块设计&quot;">​</a></h1><h3 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h3><p>在过去 JS 不支持模块时我们使用<code>AMD/CMD（浏览器端使用）</code>、<code>CommonJS（Node.js使用）</code>、<code>UMD(两者都支持)</code>等形式定义模块。</p><p>AMD 代表性的是 <code>require.js</code>，CMD 代表是淘宝的 <code>seaJS</code> 框架。</p><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><h3 id="标签使用" tabindex="-1">标签使用 <a class="header-anchor" href="#标签使用" aria-label="Permalink to &quot;标签使用&quot;">​</a></h3><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;module&quot;</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="延迟解析" tabindex="-1">延迟解析 <a class="header-anchor" href="#延迟解析" aria-label="Permalink to &quot;延迟解析&quot;">​</a></h3><p>模块总是会在所有 html 解析后才执行，下面的模块代码可以看到后加载的 <code>button</code> 按钮元素。</p><ul><li>建议为用户提供加载动画提示，当模块运行时再去掉动画</li></ul><h3 id="严格模式" tabindex="-1">严格模式 <a class="header-anchor" href="#严格模式" aria-label="Permalink to &quot;严格模式&quot;">​</a></h3><p>模块默认运行在严格模式，以下代码没有使用声明语句将报错</p><h3 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h3><p>模块都有独立的顶级作用域，下面的模块不能互相访问</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;module&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  let hd = &quot;dotohi.com&quot;;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#D19A66;font-style:italic;"> type</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;module&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  alert(hd); // Error</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="预解析" tabindex="-1">预解析 <a class="header-anchor" href="#预解析" aria-label="Permalink to &quot;预解析&quot;">​</a></h3><p>模块在导入时只执行一次解析，之后的导入不会再执行模块代码，而使用第一次解析结果，并共享数据。</p><h2 id="默认导出" tabindex="-1">默认导出 <a class="header-anchor" href="#默认导出" aria-label="Permalink to &quot;默认导出&quot;">​</a></h2><p>使用<code>default</code> 定义默认导出的接口，导入时不需要使用 <code>{}</code>，默认导出的功能可以使用任意变量接收。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">//导出</span></span>
<span class="line"><span style="color:#C678DD;">class</span><span style="color:#E5C07B;"> User</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  static</span><span style="color:#61AFEF;"> show</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;">    console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;User.method&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">User</span><span style="color:#C678DD;"> as</span><span style="color:#C678DD;"> default</span><span style="color:#ABB2BF;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#C678DD;"> class</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#C678DD;">  static</span><span style="color:#61AFEF;"> show</span><span style="color:#ABB2BF;">() {</span></span>
<span class="line"><span style="color:#E5C07B;">    console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;user.show&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 导入</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> { </span><span style="color:#E06C75;">site</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">default</span><span style="color:#C678DD;"> as</span><span style="color:#E06C75;"> hd</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &quot;./love.js&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#E06C75;"> show</span><span style="color:#ABB2BF;">, { </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;"> } </span><span style="color:#C678DD;">from</span><span style="color:#98C379;"> &quot;/modules/lvoe.js&quot;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="动态使用" tabindex="-1">动态使用 <a class="header-anchor" href="#动态使用" aria-label="Permalink to &quot;动态使用&quot;">​</a></h3><p>使用 <code>import</code> 顶层静态导入，使用 <code>import()</code> 函数可以动态导入，实现按需加载，即按需加载后执行回调方法。</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;love&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  document.querySelector(&quot;button&quot;).addEventListener(&quot;click&quot;, () =&gt; </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E06C75;">    let</span><span style="color:#E06C75;"> hd</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> import</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;./hd.js&quot;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">module</span><span style="color:#C678DD;"> =&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">      console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">site</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#C678DD;">  }</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>因为是返回的对象可以使用解构语法</p><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;love&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  document.querySelector(&quot;button&quot;).addEventListener(&quot;click&quot;, () =&gt; </span><span style="color:#C678DD;">{</span></span>
<span class="line"><span style="color:#E06C75;">    let</span><span style="color:#E06C75;"> hd</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> import</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;./hd.js&quot;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">then</span><span style="color:#ABB2BF;">(({ </span><span style="color:#E06C75;font-style:italic;">site</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">func</span><span style="color:#ABB2BF;"> }) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E5C07B;">      console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">site</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">    });</span></span>
<span class="line"><span style="color:#C678DD;">  }</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="指令总结" tabindex="-1">指令总结 <a class="header-anchor" href="#指令总结" aria-label="Permalink to &quot;指令总结&quot;">​</a></h2>`,26),s("table",{tabindex:"0"},[s("thead",null,[s("tr",null,[s("th",null,"表达式"),s("th",null,"说明")])]),s("tbody",null,[s("tr",null,[s("td",null,"export function show(){}"),s("td",null,"导出函数")]),s("tr",null,[s("td",null,"export const name='love'"),s("td",null,"导出变量")]),s("tr",null,[s("td",null,"export class User{}"),s("td",null,"导出类")]),s("tr",null,[s("td",null,"export default show"),s("td",null,"默认导出")]),s("tr",null,[s("td",{name:""},"const name = 'love' export"),s("td",null,"导出已经存在变量")]),s("tr",null,[s("td",{name:"",as:"",hd_name:""},"export"),s("td",null,"别名导出")]),s("tr",null,[s("td",null,"import defaultVar from 'love'"),s("td",null,"导入默认导出")]),s("tr",null,[s("td",null,"import {name,show} from 'a.j'"),s("td",null,"导入命名导出")]),s("tr",null,[s("td",null,"Import {name as hdName,show} from 'love'"),s("td",null,"别名导入")]),s("tr",null,[s("td",null,"Import * as api from 'houdunren.js'"),s("td",null,"导入全部接口")])])],-1)]))}const b=n(e,[["render",t]]);export{y as __pageData,b as default};
