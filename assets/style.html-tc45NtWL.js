import{_ as s,o as n,c as a,b as l}from"./app-lZ8g2une.js";const e={},p=l(`<h1 id="样式相关问题" tabindex="-1"><a class="header-anchor" href="#样式相关问题"><span>样式相关问题</span></a></h1><ol><li><h3 id="css-vue-js-使样式被子组件继承" tabindex="-1"><a class="header-anchor" href="#css-vue-js-使样式被子组件继承"><span>css - Vue js - 使样式被子组件继承</span></a></h3></li></ol><p>当我想为当前组件设置一个私有(private)样式时，我将它定义在一个标签中。 为了使样式对子组件可见，我使用了深度选择器让它通过，如下所示:</p><div class="language-vue line-numbers-mode" data-ext="vue" data-title="vue"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> scoped</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    ::</span><span style="color:#569CD6;">v-deep</span><span style="color:#D7BA7D;"> .b</span><span style="color:#D4D4D4;"> {</span></span>
<span class="line"><span style="color:#D4D4D4;">        ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#808080;">&lt;</span><span style="color:#569CD6;">style</span><span style="color:#9CDCFE;"> scoped</span><span style="color:#808080;">&gt;</span></span>
<span class="line"><span style="color:#D4D4D4;">    :deep(</span><span style="color:#D7BA7D;">.b</span><span style="color:#D4D4D4;">) {</span></span>
<span class="line"><span style="color:#D4D4D4;">        ...</span></span>
<span class="line"><span style="color:#D4D4D4;">    }</span></span>
<span class="line"><span style="color:#808080;">&lt;/</span><span style="color:#569CD6;">style</span><span style="color:#808080;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">//或者去掉scoped</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[p];function o(i,t){return n(),a("div",null,c)}const d=s(e,[["render",o],["__file","style.html.vue"]]);export{d as default};
