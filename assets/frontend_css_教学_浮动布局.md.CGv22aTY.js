import{_ as n,c as a,o as p,ah as l}from"./chunks/framework.BrJYEL96.js";const u=JSON.parse('{"title":"浮动布局","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/教学/浮动布局.md","filePath":"frontend/css/教学/浮动布局.md","lastUpdated":1792062939000}'),e={name:"frontend/css/教学/浮动布局.md"};function r(i,s,c,t,b,o){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="浮动布局" tabindex="-1">浮动布局 <a class="header-anchor" href="#浮动布局" aria-label="Permalink to &quot;浮动布局&quot;">​</a></h1><h2 id="浮动布局-1" tabindex="-1">浮动布局 <a class="header-anchor" href="#浮动布局-1" aria-label="Permalink to &quot;浮动布局&quot;">​</a></h2><p>float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820202101608.png" alt="image-20190820202101608" loading="lazy"></p><p>在网站开发中需要一行排列多个元素，使用浮动可以方便实现。下面是使用浮动排列多个元素</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820202250078.png" alt="image-20190820202250078" loading="lazy"></p><h3 id="float" tabindex="-1">FLOAT <a class="header-anchor" href="#float" aria-label="Permalink to &quot;FLOAT&quot;">​</a></h3><p>使用浮动可以控制相邻元素间的排列关系。</p><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>向左浮动</td></tr><tr><td>right</td><td>向右浮动</td></tr><tr><td>none</td><td>不浮动</td></tr></tbody></table><h3 id="文档流" tabindex="-1">文档流 <a class="header-anchor" href="#文档流" aria-label="Permalink to &quot;文档流&quot;">​</a></h3><p>没有设置浮动的块元素是独占一行的。</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820202706957.png" alt="image-20190820202706957" loading="lazy"></p><p>浮动是对后面元素的影响，下图中第二个元素设置浮动对第一个元素没有影响</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820202706957.png" alt="image-20190820202706957" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>div:first-of-type {</span></span>
<span class="line"><span>    border: solid 2px red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:last-of-type {</span></span>
<span class="line"><span> 		float: left;</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="丢失空间" tabindex="-1">丢失空间 <a class="header-anchor" href="#丢失空间" aria-label="Permalink to &quot;丢失空间&quot;">​</a></h3><p>如果只给第一个元素设置浮动，第二个元素不设置，后面的元素会占用第一个元素空间。</p><p><img src="https://raw.gitcode.com/loveagri/pic/raw/main/2026-10-15/12/51349_image-20190820202823601.png" alt="image-20190820202823601" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>div:first-of-type {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    border: solid 2px red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:last-of-type {</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="使用浮动" tabindex="-1">使用浮动 <a class="header-anchor" href="#使用浮动" aria-label="Permalink to &quot;使用浮动&quot;">​</a></h3><p>两个元素都设置浮动后，会并排显示</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820202913929.png" alt="image-20190820202913929" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>div:first-of-type {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    border: solid 2px red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:last-of-type {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>为第二个元素设置右浮动时将移动到右边</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820203052185.png" alt="image-20190820203052185" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>div:first-of-type {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    border: solid 2px red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:last-of-type {</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="浮动边界" tabindex="-1">浮动边界 <a class="header-anchor" href="#浮动边界" aria-label="Permalink to &quot;浮动边界&quot;">​</a></h3><p>浮动元素边界不能超过父元素的 padding</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820203619915.png" alt="image-20190820203619915" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>main {</span></span>
<span class="line"><span>    width: 400px;</span></span>
<span class="line"><span>    border: solid 2px black;</span></span>
<span class="line"><span>    overflow: auto;</span></span>
<span class="line"><span>    padding: 50px;</span></span>
<span class="line"><span>    background-color: antiquewhite;</span></span>
<span class="line"><span>    background-clip: content-box;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div {</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    box-sizing: border-box;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:first-of-type {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    border: solid 2px red;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>div:last-of-type {</span></span>
<span class="line"><span>    float: right;</span></span>
<span class="line"><span>    background: green;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h3 id="浮动转块" tabindex="-1">浮动转块 <a class="header-anchor" href="#浮动转块" aria-label="Permalink to &quot;浮动转块&quot;">​</a></h3><p>元素浮动后会变为块元素包括行元素如 <code>span</code>，所以浮动后的元素可以设置宽高</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>a {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 300px;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="清除浮动" tabindex="-1">清除浮动 <a class="header-anchor" href="#清除浮动" aria-label="Permalink to &quot;清除浮动&quot;">​</a></h2><p>不希望元素受浮动元素影响时，可以清除浮动。</p><h3 id="clear" tabindex="-1">CLEAR <a class="header-anchor" href="#clear" aria-label="Permalink to &quot;CLEAR&quot;">​</a></h3><p>CSS 提供了 <code>clear</code> 规则用于清除元素浮动影响。</p><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>left</td><td>左边远离浮动元素</td></tr><tr><td>right</td><td>右连远离浮动元素</td></tr><tr><td>both</td><td>左右都远离浮动元素</td></tr></tbody></table><p>使用清除浮动</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820210600975.png" alt="image-20190820210600975" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>	div {</span></span>
<span class="line"><span>    width: 200px;</span></span>
<span class="line"><span>    height: 200px;</span></span>
<span class="line"><span>    margin-bottom: 10px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.green {</span></span>
<span class="line"><span>      border: solid 2px green;</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.red {</span></span>
<span class="line"><span>      border: solid 2px red;</span></span>
<span class="line"><span>      float: right;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.blue {</span></span>
<span class="line"><span>      background: blue;</span></span>
<span class="line"><span>      clear: both;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;div class=&quot;green&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;red&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>&lt;div class=&quot;blue&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>在父元素内部最后面添加一个没有高度的了元素，并使用<code>clear:both</code> 。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>	.clearfix {</span></span>
<span class="line"><span>      clear: both;</span></span>
<span class="line"><span>      height: 0;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div {</span></span>
<span class="line"><span>      width: 200px;</span></span>
<span class="line"><span>      height: 200px;</span></span>
<span class="line"><span>      margin-bottom: 10px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.green {</span></span>
<span class="line"><span>      border: solid 2px green;</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.red {</span></span>
<span class="line"><span>      border: solid 2px red;</span></span>
<span class="line"><span>      height: 200px;</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  div.blue {</span></span>
<span class="line"><span>      background: blue;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;article&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;green&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;red&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;div class=&quot;clear&quot;&gt;&lt;/div&gt;</span></span>
<span class="line"><span>    &lt;/article&gt;</span></span>
<span class="line"><span>    &lt;div class=&quot;blue&quot;&gt;&lt;/div&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="after" tabindex="-1">AFTER <a class="header-anchor" href="#after" aria-label="Permalink to &quot;AFTER&quot;">​</a></h3><p>使用 <code>::after</code> 伪类为父元素添加后标签，实现清除浮动影响。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>.clearfix::after {</span></span>
<span class="line"><span>    content: &quot;&quot;;</span></span>
<span class="line"><span>    display: block;</span></span>
<span class="line"><span>    clear: both;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="overflow" tabindex="-1">OVERFLOW <a class="header-anchor" href="#overflow" aria-label="Permalink to &quot;OVERFLOW&quot;">​</a></h3><p>子元素使用浮动后将不占用空间，这时父元素高度为将为零。通过添加父元素并设置 <code>overflow</code> 属性可以清除浮动。</p><p>将会使用父元素产生 <code>BFC</code> 机制，即父元素的高度计算会包括浮动元素的高度。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  article {</span></span>
<span class="line"><span>      overflow: hidden;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="页面布局" tabindex="-1">页面布局 <a class="header-anchor" href="#页面布局" aria-label="Permalink to &quot;页面布局&quot;">​</a></h2><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820213928554.png" alt="image-20190820213928554" loading="lazy"></p><p>完成页面布局注意以下几点</p><ol><li>首先根据设计稿确定页面大小（主要指宽度，移动端不需要考虑），如 1200px 宽度</li><li>水平分割页面主要区域</li><li>每个区域中按以上两步继续细分</li></ol><h3 id="父容器" tabindex="-1">父容器 <a class="header-anchor" href="#父容器" aria-label="Permalink to &quot;父容器&quot;">​</a></h3><p>一组浮动元素要放在一个父容器中，如下图绿线指父容器，里面的红线为浮动子元素。</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190820204502017.png" alt="image-20190820204502017" loading="lazy"></p><p>下面是上图的布局结构代码</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>	article {</span></span>
<span class="line"><span>      background: #f3f3f3;</span></span>
<span class="line"><span>      width: 1020px;</span></span>
<span class="line"><span>      height: auto;</span></span>
<span class="line"><span>      overflow: auto;</span></span>
<span class="line"><span>      padding: 20px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.hot section {</span></span>
<span class="line"><span>      background: #fff;</span></span>
<span class="line"><span>      box-shadow: 0 0 5px #777;</span></span>
<span class="line"><span>      height: 300px;</span></span>
<span class="line"><span>      width: 500px;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.hot section:first-of-type {</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.hot section:last-of-type {</span></span>
<span class="line"><span>      float: right;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.swiper section {</span></span>
<span class="line"><span>      height: 200px;</span></span>
<span class="line"><span>      background: #fff;</span></span>
<span class="line"><span>      box-shadow: 0 0 5px #777;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.swiper section:first-of-type {</span></span>
<span class="line"><span>      width: 200px;</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  article.swiper section:last-of-type {</span></span>
<span class="line"><span>      width: 820px;</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span> &lt;article class=&quot;hot&quot;&gt;</span></span>
<span class="line"><span>        &lt;section&gt;&lt;/section&gt;</span></span>
<span class="line"><span>        &lt;section&gt;&lt;/section&gt;</span></span>
<span class="line"><span>&lt;/article&gt;</span></span>
<span class="line"><span>&lt;article class=&quot;swiper&quot;&gt;</span></span>
<span class="line"><span>        &lt;section&gt;&lt;/section&gt;</span></span>
<span class="line"><span>        &lt;section&gt;&lt;/section&gt;</span></span>
<span class="line"><span>&lt;/article&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><h2 id="形状浮动" tabindex="-1">形状浮动 <a class="header-anchor" href="#形状浮动" aria-label="Permalink to &quot;形状浮动&quot;">​</a></h2><p>通过形状浮动可以让内容围绕图片，类似于我们在 word 中的环绕排版。要求图片是有透明度的 PNG 格式。</p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822131434976.png" alt="image-20190822131434976" loading="lazy"></p><h3 id="距离控制" tabindex="-1">距离控制 <a class="header-anchor" href="#距离控制" aria-label="Permalink to &quot;距离控制&quot;">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>margin-box</td><td>外边距环绕</td></tr><tr><td>padding-box</td><td>内边距环绕</td></tr><tr><td>border-box</td><td>边线环绕</td></tr><tr><td>content-box</td><td>内容环绕</td></tr></tbody></table><p><strong>外边距环绕</strong></p><p><img src="https://raw.gitcode.com/loveagri/pic/raw/main/2026-10-15/12/26835_image-20190822133517672.png" alt="image-20190822133517672" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>&lt;style&gt;</span></span>
<span class="line"><span>  span.shape {</span></span>
<span class="line"><span>      float: left;</span></span>
<span class="line"><span>      width: 100px;</span></span>
<span class="line"><span>      height: 100px;</span></span>
<span class="line"><span>      padding: 30px;</span></span>
<span class="line"><span>      margin: 30px;</span></span>
<span class="line"><span>      border: solid 30px green;</span></span>
<span class="line"><span>      shape-outside: margin-box;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/style&gt;</span></span>
<span class="line"><span>...</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;p&gt;</span></span>
<span class="line"><span>  &lt;span class=&quot;shape&quot;&gt;&lt;/span&gt;</span></span>
<span class="line"><span>  后盾人自2010年创立至今，免费发布了大量高质量视频教程，视频在优酷、土豆、酷六等视频网站均有收录，很多技术爱好者受益其中。</span></span>
<span class="line"><span>  除了免费视频外，后盾人还为大家提供了面授班、远程班、公益公开课、VIP系列课程等众多形式的学习途径。后盾人有一群认真执着的老师，他们一心为同学着想，将真正的知识传授给大家是后盾人永远不变的追求。</span></span>
<span class="line"><span>&lt;/p&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>边框环绕</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822133612903.png" alt="image-20190822133612903" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    padding: 30px;</span></span>
<span class="line"><span>    margin: 30px;</span></span>
<span class="line"><span>    border: solid 30px green;</span></span>
<span class="line"><span>    shape-outside: border-box;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="显示区域" tabindex="-1">显示区域 <a class="header-anchor" href="#显示区域" aria-label="Permalink to &quot;显示区域&quot;">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>circle</td><td>圆形</td></tr><tr><td>ellipse</td><td>椭圆</td></tr><tr><td>polygon</td><td>多边形</td></tr></tbody></table><p><strong>圆形</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822134841106.png" alt="image-20190822134841106" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    padding: 30px;</span></span>
<span class="line"><span>    margin: 30px;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    clip-path: circle(50% at center);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>椭圆</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822135121997.png" alt="image-20190822135121997" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    padding: 30px;</span></span>
<span class="line"><span>    margin: 30px;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    clip-path: ellipse(50% 80% at 100% 0);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>多边形</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822135238497.png" alt="image-20190822135238497" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    padding: 30px;</span></span>
<span class="line"><span>    margin: 30px;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    clip-path: polygon(50% 0, 100% 100%, 0 100%)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="内移距离" tabindex="-1">内移距离 <a class="header-anchor" href="#内移距离" aria-label="Permalink to &quot;内移距离&quot;">​</a></h3><p>使用 <code>inset</code> 属性控制环绕向内移动的距离。</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    padding: 30px;</span></span>
<span class="line"><span>    margin: 30px;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    shape-outside: inset(50px 30px 80px 50px) padding-box;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="环绕模式" tabindex="-1">环绕模式 <a class="header-anchor" href="#环绕模式" aria-label="Permalink to &quot;环绕模式&quot;">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>circle</td><td>圆形环绕</td></tr><tr><td>ellipse</td><td>椭圆环绕</td></tr><tr><td>url</td><td>图片环绕</td></tr><tr><td>polygan</td><td>多边环绕</td></tr></tbody></table><p><strong>圆形环绕</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822131434976.png" alt="image-20190822131434976" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>img {</span></span>
<span class="line"><span>    padding: 20px;</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    shape-outside: circle(50%) padding-box;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>椭圆环绕</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822131415117.png" alt="image-20190822131415117" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>img {</span></span>
<span class="line"><span>    padding: 20px;</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    shape-outside: ellipse(80px 70px) padding-box;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>图片环绕</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822131725161.png" alt="image-20190822131725161" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>img {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    shape-outside: url(xj.png);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>多边环绕</strong></p><p><img src="https://www.houdunren.com/docs/images/1%20%E8%BD%AF%E4%BB%B6%E5%BC%80%E5%8F%91/css/assets/image-20190822132344769.png" alt="image-20190822132344769" loading="lazy"></p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>span.shape {</span></span>
<span class="line"><span>    float: left;</span></span>
<span class="line"><span>    width: 100px;</span></span>
<span class="line"><span>    height: 100px;</span></span>
<span class="line"><span>    background: red;</span></span>
<span class="line"><span>    clip-path: polygon(50px 0px, 0 100px, 100px 100px);</span></span>
<span class="line"><span>    shape-outside: polygon(50px 0px, 0 100px, 100px 100px);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,98)]))}const m=n(e,[["render",r]]);export{u as __pageData,m as default};
