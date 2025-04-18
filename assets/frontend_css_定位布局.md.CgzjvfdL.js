import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const b=JSON.parse('{"title":"定位布局","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/css/定位布局.md","filePath":"frontend/css/定位布局.md","lastUpdated":1732981343000}'),e={name:"frontend/css/定位布局.md"};function o(r,s,c,t,B,i){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="定位布局" tabindex="-1">定位布局 <a class="header-anchor" href="#定位布局" aria-label="Permalink to &quot;定位布局&quot;">​</a></h1><h3 id="定位类型" tabindex="-1">定位类型 <a class="header-anchor" href="#定位类型" aria-label="Permalink to &quot;定位类型&quot;">​</a></h3><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>static</td><td>默认形为，参考文档流</td></tr><tr><td>relative</td><td>相对定位</td></tr><tr><td>absolute</td><td>绝对定位</td></tr><tr><td>fixed</td><td>固定定位</td></tr><tr><td>sticky</td><td>粘性定位</td></tr></tbody></table><h3 id="位置偏移" tabindex="-1">位置偏移 <a class="header-anchor" href="#位置偏移" aria-label="Permalink to &quot;位置偏移&quot;">​</a></h3><p>可以为部分类型的定位元素设置<code>上、下、左、右</code> 的位置偏移。</p><table tabindex="0"><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>top</td><td>距离顶边</td></tr><tr><td>bottom</td><td>距离下边</td></tr><tr><td>left</td><td>距离左部</td></tr><tr><td>right</td><td>距离右边</td></tr></tbody></table><h2 id="相对定位" tabindex="-1">相对定位 <a class="header-anchor" href="#相对定位" aria-label="Permalink to &quot;相对定位&quot;">​</a></h2><p>相对定位是相对于元素原来的位置控制，当元素发生位置偏移时，原位置留白。</p><h2 id="绝对定位" tabindex="-1">绝对定位 <a class="header-anchor" href="#绝对定位" aria-label="Permalink to &quot;绝对定位&quot;">​</a></h2><p>绝对定义不受文档流影响，就像漂浮在页面中的精灵，绝对定位元素拥有行内块特性。</p><h3 id="参照元素" tabindex="-1">参照元素 <a class="header-anchor" href="#参照元素" aria-label="Permalink to &quot;参照元素&quot;">​</a></h3><p>如果父级元素设置了 <code>relative | fixed | sticky</code> ，绝对定位子元素将参数此父元素进行定位。且相对于边框内侧为起始<code>0，0</code>，忽略padding， margin。</p><h3 id="居中定位" tabindex="-1">居中定位 <a class="header-anchor" href="#居中定位" aria-label="Permalink to &quot;居中定位&quot;">​</a></h3><p>通过将 <code>left</code> 设置为 50% ,并向左偏移子元素宽度一半可以实现水平居中，垂直居中使用方式类似。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E06C75;">    article</span><span style="color:#D19A66;">.love-position-center</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        border: </span><span style="color:#D19A66;">solid</span><span style="color:#D19A66;"> 6</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">        position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        div {</span></span>
<span class="line"><span style="color:#ABB2BF;">            width: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            background: </span><span style="color:#D19A66;">#f2a67d</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            left: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            top: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            margin-left: </span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            margin-top: </span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">article</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;love-position-center&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><article class="love-position-center"><div></div></article><h3 id="滚动行为" tabindex="-1">滚动行为 <a class="header-anchor" href="#滚动行为" aria-label="Permalink to &quot;滚动行为&quot;">​</a></h3><p>固定定位元素会随滚动条发生滚动。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E06C75;">    main</span><span style="color:#D19A66;">.love-position-scroll</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        height: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        border: </span><span style="color:#D19A66;">solid</span><span style="color:#D19A66;"> 10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">        position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        overflow: </span><span style="color:#D19A66;">scroll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        article {</span></span>
<span class="line"><span style="color:#ABB2BF;">            height: </span><span style="color:#D19A66;">600</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            div {</span></span>
<span class="line"><span style="color:#ABB2BF;">                width: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                background: </span><span style="color:#D19A66;">red</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                left: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                bottom: </span><span style="color:#D19A66;">0</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">main</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;love-position-scroll&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><main class="love-position-scroll"><article><div></div></article></main><h2 id="纵向重叠" tabindex="-1">纵向重叠 <a class="header-anchor" href="#纵向重叠" aria-label="Permalink to &quot;纵向重叠&quot;">​</a></h2><p>如果元素重叠在一起，可以使用 <code>z-index</code> 控制元素的上下层级，数值越大越在上面。</p><p>父级子元素设置 <code>z-index</code> 没有意义，子元素永远在父元素上面的。</p><h2 id="固定定位" tabindex="-1">固定定位 <a class="header-anchor" href="#固定定位" aria-label="Permalink to &quot;固定定位&quot;">​</a></h2><p>元素相对于页面固定定位在某个位置，固定定位元素不会在滚动时改变位置 ，使用<code>position: fixed</code> 产生固定定位。</p><h2 id="粘性定位" tabindex="-1">粘性定位 <a class="header-anchor" href="#粘性定位" aria-label="Permalink to &quot;粘性定位&quot;">​</a></h2><h3 id="同级定位" tabindex="-1">同级定位 <a class="header-anchor" href="#同级定位" aria-label="Permalink to &quot;同级定位&quot;">​</a></h3><p>属于同一个父元素设置粘性定位时，后面的元素会与前边的元素重叠。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E06C75;">    main</span><span style="color:#D19A66;">.love-position-sticky-demo-no</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        padding: </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        font-size: </span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        article {</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            width: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            border: </span><span style="color:#D19A66;">solid</span><span style="color:#D19A66;"> 5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">            height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            overflow: </span><span style="color:#D19A66;">scroll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            h2:nth-of-type(odd) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                background: blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">            h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                background: </span><span style="color:#D19A66;">#db1f77</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                text-indent: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                position: </span><span style="color:#D19A66;">sticky</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">            p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">main</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;love-position-sticky-demo-no&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;中国人民志愿军&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            中国人民志愿军是中国人民解放军的军队，成立于1950年10月1日，是中华人民共和国的军队。志愿军在朝鲜半岛上与联合国军作战，最终于1953年7月27日签订《朝鲜停战协定》后撤回中国。志愿军在朝鲜半岛上的战斗中，表现出了英勇无畏的战斗精神，赢得了国际社会的广泛赞誉。</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;朝鲜停战协定&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            中国人民志愿军的第一任司令员兼政治委员是彭德怀，邓华为副司令员兼副政治委员，洪学智、韩先楚、宋时轮、陈赓为副司令员，解方任参谋长。至1953年7月27日，战争双方在《朝鲜停战协定》上签字，抗美援朝战争结束，中国人民志愿军即分批从朝鲜撤离。1959年1月，志愿军司令部、政治部、后勤部建制均被撤销。</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;美军飞机&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            美军飞机入侵中国领空并轰炸中国东北边境城镇。时任中央人民政府政务院总理兼外交部长周恩来宣布：“中国人民绝不能容忍外国的侵略，也不能听任帝国主义者对自己的邻人肆行侵略而置之不理。”美国对中国政府的警告仍然置若罔闻，“联合国军”越过三八线，占领朝鲜民主主义人民共和国首都平壤，并向鸭绿江进犯，严重威胁中国的安全。1950年10月8日，中国政府应朝鲜民主主义人民共和国政府的请求决定出兵朝鲜，并将东北边防军改名为中国人民志愿军。</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><main class="love-position-sticky-demo-no"><article><h2>中国人民志愿军</h2><p> 中国人民志愿军是中国人民解放军的军队，成立于1950年10月1日，是中华人民共和国的军队。志愿军在朝鲜半岛上与联合国军作战，最终于1953年7月27日签订《朝鲜停战协定》后撤回中国。志愿军在朝鲜半岛上的战斗中，表现出了英勇无畏的战斗精神，赢得了国际社会的广泛赞誉。 </p><h2>朝鲜停战协定</h2><p> 中国人民志愿军的第一任司令员兼政治委员是彭德怀，邓华为副司令员兼副政治委员，洪学智、韩先楚、宋时轮、陈赓为副司令员，解方任参谋长。至1953年7月27日，战争双方在《朝鲜停战协定》上签字，抗美援朝战争结束，中国人民志愿军即分批从朝鲜撤离。1959年1月，志愿军司令部、政治部、后勤部建制均被撤销。 </p><h2>美军飞机</h2><p> 美军飞机入侵中国领空并轰炸中国东北边境城镇。时任中央人民政府政务院总理兼外交部长周恩来宣布：“中国人民绝不能容忍外国的侵略，也不能听任帝国主义者对自己的邻人肆行侵略而置之不理。”美国对中国政府的警告仍然置若罔闻，“联合国军”越过三八线，占领朝鲜民主主义人民共和国首都平壤，并向鸭绿江进犯，严重威胁中国的安全。1950年10月8日，中国政府应朝鲜民主主义人民共和国政府的请求决定出兵朝鲜，并将东北边防军改名为中国人民志愿军。 </p></article></main><h3 id="非同级定位" tabindex="-1">非同级定位 <a class="header-anchor" href="#非同级定位" aria-label="Permalink to &quot;非同级定位&quot;">​</a></h3><p>不属于同一个父元素设置粘性定位时，后面的元素挤掉原来位置的元素如下例。</p><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#E06C75;">    main</span><span style="color:#D19A66;">.love-position-sticky-demo</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        padding: </span><span style="color:#D19A66;">30</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        font-size: </span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        article {</span></span>
<span class="line"><span style="color:#ABB2BF;">            width: </span><span style="color:#D19A66;">400</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            border: </span><span style="color:#D19A66;">solid</span><span style="color:#D19A66;"> 5</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">            height: </span><span style="color:#D19A66;">200</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            overflow: </span><span style="color:#D19A66;">scroll</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            section:nth-of-type(odd) h2 {</span></span>
<span class="line"><span style="color:#ABB2BF;">                background: blueviolet;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">            section</span><span style="color:#E06C75;"> h2</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                    background: </span><span style="color:#D19A66;">#db1f77</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    color: </span><span style="color:#D19A66;">white</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    text-indent: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    position: </span><span style="color:#D19A66;">sticky</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    top: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    margin: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                    padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">                }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">            section</span><span style="color:#E06C75;"> p</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">                padding: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">main</span><span style="color:#D19A66;"> class</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;love-position-sticky-demo&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;中国人民志愿军&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                中国人民志愿军是中国人民解放军的军队，成立于1950年10月1日，是中华人民共和国的军队。志愿军在朝鲜半岛上与联合国军作战，最终于1953年7月27日签订《朝鲜停战协定》后撤回中国。志愿军在朝鲜半岛上的战斗中，表现出了英勇无畏的战斗精神，赢得了国际社会的广泛赞誉。</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;朝鲜停战协定&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                中国人民志愿军的第一任司令员兼政治委员是彭德怀，邓华为副司令员兼副政治委员，洪学智、韩先楚、宋时轮、陈赓为副司令员，解方任参谋长。至1953年7月27日，战争双方在《朝鲜停战协定》上签字，抗美援朝战争结束，中国人民志愿军即分批从朝鲜撤离。1959年1月，志愿军司令部、政治部、后勤部建制均被撤销。</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;美军飞机&lt;/</span><span style="color:#E06C75;">h2</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">                美军飞机入侵中国领空并轰炸中国东北边境城镇。时任中央人民政府政务院总理兼外交部长周恩来宣布：“中国人民绝不能容忍外国的侵略，也不能听任帝国主义者对自己的邻人肆行侵略而置之不理。”美国对中国政府的警告仍然置若罔闻，“联合国军”越过三八线，占领朝鲜民主主义人民共和国首都平壤，并向鸭绿江进犯，严重威胁中国的安全。1950年10月8日，中国政府应朝鲜民主主义人民共和国政府的请求决定出兵朝鲜，并将东北边防军改名为中国人民志愿军。</span></span>
<span class="line"><span style="color:#ABB2BF;">            &lt;/</span><span style="color:#E06C75;">p</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;/</span><span style="color:#E06C75;">section</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">article</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">main</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div><main class="love-position-sticky-demo"><article><section><h2>中国人民志愿军</h2><p> 中国人民志愿军是中国人民解放军的军队，成立于1950年10月1日，是中华人民共和国的军队。志愿军在朝鲜半岛上与联合国军作战，最终于1953年7月27日签订《朝鲜停战协定》后撤回中国。志愿军在朝鲜半岛上的战斗中，表现出了英勇无畏的战斗精神，赢得了国际社会的广泛赞誉。 </p></section><section><h2>朝鲜停战协定</h2><p> 中国人民志愿军的第一任司令员兼政治委员是彭德怀，邓华为副司令员兼副政治委员，洪学智、韩先楚、宋时轮、陈赓为副司令员，解方任参谋长。至1953年7月27日，战争双方在《朝鲜停战协定》上签字，抗美援朝战争结束，中国人民志愿军即分批从朝鲜撤离。1959年1月，志愿军司令部、政治部、后勤部建制均被撤销。 </p></section><section><h2>美军飞机</h2><p> 美军飞机入侵中国领空并轰炸中国东北边境城镇。时任中央人民政府政务院总理兼外交部长周恩来宣布：“中国人民绝不能容忍外国的侵略，也不能听任帝国主义者对自己的邻人肆行侵略而置之不理。”美国对中国政府的警告仍然置若罔闻，“联合国军”越过三八线，占领朝鲜民主主义人民共和国首都平壤，并向鸭绿江进犯，严重威胁中国的安全。1950年10月8日，中国政府应朝鲜民主主义人民共和国政府的请求决定出兵朝鲜，并将东北边防军改名为中国人民志愿军。 </p></section></article></main>`,34)]))}const A=n(e,[["render",o]]);export{b as __pageData,A as default};
