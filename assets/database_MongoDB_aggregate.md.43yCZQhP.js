import{_ as a,c as n,o as l,ah as o}from"./chunks/framework.BrJYEL96.js";const d=JSON.parse('{"title":"聚合","description":"","frontmatter":{},"headers":[],"relativePath":"database/MongoDB/aggregate.md","filePath":"database/MongoDB/aggregate.md","lastUpdated":1738978758000}'),p={name:"database/MongoDB/aggregate.md"};function e(t,s,r,c,y,C){return l(),n("div",null,s[0]||(s[0]=[o(`<h1 id="聚合" tabindex="-1">聚合 <a class="header-anchor" href="#聚合" aria-label="Permalink to &quot;聚合&quot;">​</a></h1><p>类似linux中的grep</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">db.articles.aggregate(</span><span style="color:#ABB2BF;"> [</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">$match</span><span style="color:#98C379;">:</span><span style="color:#98C379;"> {</span><span style="color:#E06C75;"> $or</span><span style="color:#98C379;">:</span><span style="color:#ABB2BF;"> [ </span><span style="color:#98C379;">{</span><span style="color:#98C379;"> score:</span><span style="color:#98C379;"> {</span><span style="color:#E06C75;"> $gt</span><span style="color:#98C379;">:</span><span style="color:#98C379;"> 70,</span><span style="color:#E06C75;"> $lt</span><span style="color:#98C379;">:</span><span style="color:#D19A66;"> 90</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> },</span><span style="color:#98C379;"> {</span><span style="color:#98C379;"> views:</span><span style="color:#98C379;"> {</span><span style="color:#E06C75;"> $gte</span><span style="color:#98C379;">:</span><span style="color:#D19A66;"> 1000</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> ]</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> },</span></span>
<span class="line"><span style="color:#ABB2BF;">  { </span><span style="color:#E06C75;">$group</span><span style="color:#98C379;">:</span><span style="color:#98C379;"> {</span><span style="color:#98C379;"> _id:</span><span style="color:#98C379;"> null,</span><span style="color:#98C379;"> count:</span><span style="color:#98C379;"> {</span><span style="color:#E06C75;"> $sum</span><span style="color:#98C379;">:</span><span style="color:#D19A66;"> 1</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> }</span><span style="color:#98C379;"> }</span></span>
<span class="line"><span style="color:#ABB2BF;">] );</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,3)]))}const g=a(p,[["render",e]]);export{d as __pageData,g as default};
