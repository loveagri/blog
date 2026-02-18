import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const B=JSON.parse('{"title":"xpath","description":"","frontmatter":{},"headers":[],"relativePath":"Scrapy/xpath.md","filePath":"Scrapy/xpath.md","lastUpdated":1753850340000}'),t={name:"Scrapy/xpath.md"};function e(o,s,r,c,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="xpath" tabindex="-1">xpath <a class="header-anchor" href="#xpath" aria-label="Permalink to &quot;xpath&quot;">​</a></h1><table tabindex="0"><thead><tr><th>网站</th><th>备注</th></tr></thead><tbody><tr><td><a href="https://pypi.org/project/lxml/" target="_blank" rel="noreferrer">lxml</a></td><td><a href="https://lxml.de/tutorial.html" target="_blank" rel="noreferrer">etree</a> 解析网页，html = etree.HTML(text)，result = html.xpath(&#39;//div&#39;)</td></tr><tr><td><a href="https://gitcode.com/gh_mirrors/xpath/xpath?utm_source=highlight_word_gitcode&amp;word=xpath&amp;isLogin=1" target="_blank" rel="noreferrer">xpath语法</a></td><td></td></tr><tr><td><a href="https://blog.csdn.net/weixin_46676835/article/details/132273747" target="_blank" rel="noreferrer">python 应用语法</a></td><td></td></tr><tr><td></td><td></td></tr></tbody></table><h1 id="选择" tabindex="-1">选择 <a class="header-anchor" href="#选择" aria-label="Permalink to &quot;选择&quot;">​</a></h1><h3 id="寻找节点" tabindex="-1">寻找节点 <a class="header-anchor" href="#寻找节点" aria-label="Permalink to &quot;寻找节点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>语法</th><th>含义</th></tr></thead><tbody><tr><td>nodename(节点名字)</td><td>直接根据写的节点名字查找节点,如：div</td></tr><tr><td>//</td><td>在当前节点下的子孙节点中寻找,如：//div</td></tr><tr><td>/</td><td>在当前节点下的子节点中寻找,如：/div</td></tr><tr><td>.</td><td>代表当前节点（可省略不写，就像我们有时候写的相对路径），如：./div</td></tr><tr><td>…</td><td>当前节点的父节点，如：…/div</td></tr></tbody></table><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;这时测试的div&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">            这是嵌套的div标签</span></span>
<span class="line"><span style="color:#98C379;">            &lt;p&gt;</span></span>
<span class="line"><span style="color:#98C379;">                这时嵌套的p标签</span></span>
<span class="line"><span style="color:#98C379;">            &lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;p&gt;这时测试的p&lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text)</span></span>
<span class="line"><span style="color:#ABB2BF;">result </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div&#39;</span><span style="color:#ABB2BF;">)	</span><span style="color:#7F848E;font-style:italic;">#使用xpath语法,一是在子孙节点中寻找，二是寻找div的标签</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(result)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#结果：</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#[&lt;Element div at 0x1e4cadbf608&gt;, &lt;Element div at 0x1e4cae512c8&gt;, &lt;Element div at 0x1e4cae51348&gt;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="筛选节点" tabindex="-1">筛选节点 <a class="header-anchor" href="#筛选节点" aria-label="Permalink to &quot;筛选节点&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法名\\符号</th><th>作用</th></tr></thead><tbody><tr><td>@</td><td>获取属性或者筛选属性,如：@class，hello_tag = html.xpath(&#39;//div[@class=&quot;hello&quot;]&#39;)，html.xpath(&#39;//input[@name=&quot;btn&quot;]&#39;)</td></tr><tr><td>contains</td><td>判断属性中是否含有某个值（用于多值判断），如：contains(@class,‘hello’)</td></tr></tbody></table><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;p&gt;Hello,this is used to tested&lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello test hi&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div&gt;你好，这是用于测试的html代码&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;button&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div class=&quot;menu&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;input name=&quot;btn&quot; type=&quot;button&quot; value=&quot;按钮&quot; /&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#根据单一属性筛选</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#筛选出class=&quot;hello&quot;的div标签</span></span>
<span class="line"><span style="color:#ABB2BF;">hello_tag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div[@class=&quot;hello&quot;]&#39;</span><span style="color:#ABB2BF;">)		</span><span style="color:#7F848E;font-style:italic;">#注意筛选的方法都是在中括号里面的</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(hello_tag)	</span><span style="color:#7F848E;font-style:italic;">#结果为： [&lt;Element div at 0x2ba41e6d088&gt;]，即找到了一个标签，符合条件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#找出具有name=&quot;btn&quot;的input标签</span></span>
<span class="line"><span style="color:#ABB2BF;">input_tag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//input[@name=&quot;btn&quot;]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(input_tag)	</span><span style="color:#7F848E;font-style:italic;">#结果为：[&lt;Element input at 0x1751d29df08&gt;]，找到一个input标签，符合条件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#筛选出具有class=&quot;hello&quot;的div标签</span></span>
<span class="line"><span style="color:#ABB2BF;">hello_tags </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div[contains(@class,&quot;hello&quot;)]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(hello_tags)	</span><span style="color:#7F848E;font-style:italic;">#结果为：[&lt;Element div at 0x1348272d248&gt;, &lt;Element div at 0x1348272d6c8&gt;]，即找到了两个div标签，符合条件</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h3 id="按序选择" tabindex="-1">按序选择 <a class="header-anchor" href="#按序选择" aria-label="Permalink to &quot;按序选择&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>作用</th><th>示例</th></tr></thead><tbody><tr><td>last()</td><td>获取最后一个标签</td><td><code>html.xpath(&#39;//li[1]&#39;)</code></td></tr><tr><td>1</td><td>获取第一个标签</td><td><code>html.xpath(&#39;//li[last()]&#39;)</code></td></tr><tr><td>position() &lt; = &gt; num</td><td>筛选多个标签（具体见实例）</td><td><code> html.xpath(&#39;//li[position() &lt; 6]&#39;)</code></td></tr></tbody></table><p>注意：<strong>这里需要注意这里的序是从1开始而不是从0开始</strong>。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;7&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;8&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/ul&gt;     </span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取第一个li标签</span></span>
<span class="line"><span style="color:#ABB2BF;">first_tag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[1]&#39;</span><span style="color:#ABB2BF;">)	</span><span style="color:#7F848E;font-style:italic;">#令人吃惊，lxml并没有first()方法</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(first_tag)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取最后一个li标签</span></span>
<span class="line"><span style="color:#ABB2BF;">last_tag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[last()]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(last_tag)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取前五个标签</span></span>
<span class="line"><span style="color:#ABB2BF;">li_tags </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[position() &lt; 6]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(li_tags)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="逻辑和计算" tabindex="-1">逻辑和计算 <a class="header-anchor" href="#逻辑和计算" aria-label="Permalink to &quot;逻辑和计算&quot;">​</a></h3><p>and、or、&gt;、&gt;=等。当然也是可以写入一些计算方法的，如：+、-等。</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;1&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;2&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;3&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;4&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;5&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;6&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;7&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;li&gt;8&lt;/li&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/ul&gt;     </span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取第二个li标签，使用=判断</span></span>
<span class="line"><span style="color:#ABB2BF;">second_tag </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[position() = 2]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(second_tag)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取第一个和第二个标签，使用or</span></span>
<span class="line"><span style="color:#ABB2BF;">tags </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[position() = 1 or position() = 2]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(tags)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取前三个标签，使用&lt;</span></span>
<span class="line"><span style="color:#ABB2BF;">three_tags </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//li[position()&lt;4]&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(three_tags)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h3 id="获取属性值或文本内容" tabindex="-1">获取属性值或文本内容 <a class="header-anchor" href="#获取属性值或文本内容" aria-label="Permalink to &quot;获取属性值或文本内容&quot;">​</a></h3><p>我们寻找标签、筛选标签的最终目的就是获取它的属性或者文本内容。下面讲解获取文本和属性的方法。</p><table tabindex="0"><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>@</td><td>获取属性或者筛选属性</td></tr><tr><td>text()</td><td>获取文本</td></tr></tbody></table><h3 id="获取属性值或文本内容-1" tabindex="-1">获取属性值或文本内容 <a class="header-anchor" href="#获取属性值或文本内容-1" aria-label="Permalink to &quot;获取属性值或文本内容&quot;">​</a></h3><table tabindex="0"><thead><tr><th>方法</th><th>作用</th></tr></thead><tbody><tr><td>@</td><td>获取属性或者筛选属性</td></tr><tr><td>text()</td><td>获取文本</td></tr></tbody></table><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;p&gt;Hello,this is used to tested&lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello test hi&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div&gt;你好，这是用于测试的html代码&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;button&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div class=&quot;menu&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;input name=&quot;btn&quot; type=&quot;button&quot; value=&quot;按钮&quot; /&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取第一个div中的p标签中的文本</span></span>
<span class="line"><span style="color:#ABB2BF;">content </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div/p/text()&#39;</span><span style="color:#ABB2BF;">)    </span><span style="color:#7F848E;font-style:italic;">#注意使用text()的时机和位置</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(content)  </span><span style="color:#7F848E;font-style:italic;">#结果为：[&#39;Hello,this is used to tested&#39;]，仍然是以列表形式返回结果</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取拥有第二个div中的文本,注意观察下面的不同之处</span></span>
<span class="line"><span style="color:#ABB2BF;">content_two </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div[position() = 2]/text()&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(content_two)  </span><span style="color:#7F848E;font-style:italic;">#结果为： [&#39;\\n    &#39;, &#39;\\n&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">content_three </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div[position() = 2]//text()&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(content_three)  </span><span style="color:#7F848E;font-style:italic;">#结果为： [&#39;\\n    &#39;, &#39;\\n        &#39;, &#39;你好，这是用于测试的html代码&#39;, &#39;\\n    &#39;, &#39;\\n&#39;]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#两者不同之处在于：一个为//，一个为/。我们知道//获取其子孙节点中的内容，而/只获取其子节点的内容。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>获取属性示例：</p><div class="language-python line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> lxml </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> etree</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">text </span><span style="color:#56B6C2;">=</span><span style="color:#98C379;"> &#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello&quot; name=&quot;test&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;p&gt;Hello,this is used to tested&lt;/p&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;hello test hi&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div&gt;你好，这是用于测试的html代码&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">&lt;div class=&quot;button&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div class=&quot;menu&quot;&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;input name=&quot;btn&quot; type=&quot;button&quot; value=&quot;按钮&quot; /&gt;</span></span>
<span class="line"><span style="color:#98C379;">    &lt;div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">&#39;&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#初始化</span></span>
<span class="line"><span style="color:#ABB2BF;">html </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> etree.</span><span style="color:#61AFEF;">HTML</span><span style="color:#ABB2BF;">(text) </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取第一个div的name属性</span></span>
<span class="line"><span style="color:#ABB2BF;">first_div_class </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//div[@class=&quot;hello&quot;]/@name&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(first_div_class)  </span><span style="color:#7F848E;font-style:italic;">#结果为：[&#39;test&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#获取input标签的name值</span></span>
<span class="line"><span style="color:#ABB2BF;">input_tag_class </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> html.</span><span style="color:#61AFEF;">xpath</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;//input/@name&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(input_tag_class) </span><span style="color:#7F848E;font-style:italic;">#结果为：[&#39;btn&#39;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,24)]))}const u=n(t,[["render",e]]);export{B as __pageData,u as default};
