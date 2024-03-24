import{_ as s,o as n,c as l,b as a}from"./app-lZ8g2une.js";const e={},o=a(`<h1 id="vue3中监听滚动条事件" tabindex="-1"><a class="header-anchor" href="#vue3中监听滚动条事件"><span>vue3中监听滚动条事件</span></a></h1><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">import { onMounted, onUnmounted, reactive } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#D4D4D4;">const data=reactive({</span></span>
<span class="line"><span style="color:#D4D4D4;">    oldScrollTop:0,</span></span>
<span class="line"><span style="color:#D4D4D4;">});</span></span>
<span class="line"><span style="color:#D4D4D4;">const scrolling=()=&gt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">    // 滚动条距文档顶部的距离</span></span>
<span class="line"><span style="color:#D4D4D4;">    let scrollTop =window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop;</span></span>
<span class="line"><span style="color:#D4D4D4;">    // 滚动条滚动的距离</span></span>
<span class="line"><span style="color:#D4D4D4;">    let scrollStep = scrollTop - data.oldScrollTop;</span></span>
<span class="line"><span style="color:#D4D4D4;">    console.log(&quot;header 滚动距离 &quot;, scrollTop);</span></span>
<span class="line"><span style="color:#D4D4D4;">    // 更新——滚动前，滚动条距文档顶部的距离</span></span>
<span class="line"><span style="color:#D4D4D4;">    data.oldScrollTop = scrollTop;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">    //变量windowHeight是可视区的高度</span></span>
<span class="line"><span style="color:#D4D4D4;">    let windowHeight =</span></span>
<span class="line"><span style="color:#D4D4D4;">    document.documentElement.clientHeight || document.body.clientHeight;</span></span>
<span class="line"><span style="color:#D4D4D4;">    //变量scrollHeight是滚动条的总高度</span></span>
<span class="line"><span style="color:#D4D4D4;">    let scrollHeight =</span></span>
<span class="line"><span style="color:#D4D4D4;">    document.documentElement.scrollHeight || document.body.scrollHeight;</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#D4D4D4;">    //滚动条到底部的条件</span></span>
<span class="line"><span style="color:#D4D4D4;">    if (scrollTop + windowHeight == scrollHeight) {</span></span>
<span class="line"><span style="color:#D4D4D4;">    //你想做的事情</span></span>
<span class="line"><span style="color:#D4D4D4;">        console.log(&quot;header  你已经到底部了&quot;);</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#D4D4D4;">    if (scrollStep </span><span style="color:#808080;">&lt;</span><span style="color:#569CD6;"> 0</span><span style="color:#9CDCFE;">)</span><span style="color:#9CDCFE;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        console.log(</span><span style="color:#F44747;">&quot;header</span><span style="color:#9CDCFE;"> 滚动条向上滚动了！</span><span style="color:#F44747;">&quot;);</span></span>
<span class="line"><span style="color:#9CDCFE;">    }</span><span style="color:#9CDCFE;"> else</span><span style="color:#9CDCFE;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        console.log(</span><span style="color:#F44747;">&quot;header</span><span style="color:#9CDCFE;">  滚动条向下滚动了！</span><span style="color:#F44747;">&quot;);</span></span>
<span class="line"><span style="color:#9CDCFE;">    }</span></span>
<span class="line"><span style="color:#F44747;">    //</span><span style="color:#9CDCFE;"> 判断是否到了最顶部</span></span>
<span class="line"><span style="color:#9CDCFE;">    if</span><span style="color:#9CDCFE;"> (scrollTop</span><span style="color:#F44747;"> &lt;=</span><span style="color:#9CDCFE;"> 0)</span><span style="color:#9CDCFE;"> {</span></span>
<span class="line"><span style="color:#9CDCFE;">        console.log(</span><span style="color:#F44747;">&quot;header</span><span style="color:#9CDCFE;"> 到了最顶部</span><span style="color:#F44747;">&quot;)</span></span>
<span class="line"><span style="color:#9CDCFE;">    };</span><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#9CDCFE;">};</span></span>
<span class="line"><span style="color:#D4D4D4;"> </span></span>
<span class="line"><span style="color:#9CDCFE;">onMounted(()</span><span style="color:#D4D4D4;">=</span><span style="color:#808080;">&gt;</span><span style="color:#D4D4D4;">{</span></span>
<span class="line"><span style="color:#D4D4D4;">    window.addEventListener(&quot;scroll&quot;, scrolling);</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"><span style="color:#D4D4D4;">onUnmounted(()=&gt;{</span></span>
<span class="line"><span style="color:#D4D4D4;">    window.removeEventListener(&quot;scroll&quot;, scrolling);</span></span>
<span class="line"><span style="color:#D4D4D4;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[o];function c(i,r){return n(),l("div",null,p)}const d=s(e,[["render",c],["__file","scroll.html.vue"]]);export{d as default};
