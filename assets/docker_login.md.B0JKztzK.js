import{_ as s,c as a,o as e,ah as l}from"./chunks/framework.BrJYEL96.js";const g=JSON.parse('{"title":"login","description":"","frontmatter":{},"headers":[],"relativePath":"docker/login.md","filePath":"docker/login.md","lastUpdated":1744556347000}'),o={name:"docker/login.md"};function p(r,n,t,c,i,d){return e(),a("div",null,n[0]||(n[0]=[l(`<h1 id="login" tabindex="-1">login <a class="header-anchor" href="#login" aria-label="Permalink to &quot;login&quot;">​</a></h1><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 登录 docker hub</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> login</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 重新给镜像打标签</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> tag</span><span style="color:#98C379;"> mynginx:v1.0</span><span style="color:#98C379;"> leifengyang/mynginx:v1.0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 推送镜像</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> push</span><span style="color:#98C379;"> leifengyang/mynginx:v1.0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2)]))}const y=s(o,[["render",p]]);export{g as __pageData,y as default};
