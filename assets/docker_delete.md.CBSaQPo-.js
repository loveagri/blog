import{_ as a,c as e,o as n,ah as o}from"./chunks/framework.BrJYEL96.js";const u=JSON.parse('{"title":"Mac电脑删除docker","description":"","frontmatter":{},"headers":[],"relativePath":"docker/delete.md","filePath":"docker/delete.md","lastUpdated":1739370797000}'),r={name:"docker/delete.md"};function l(p,s,c,t,d,i){return n(),e("div",null,s[0]||(s[0]=[o(`<h1 id="mac电脑删除docker" tabindex="-1">Mac电脑删除docker <a class="header-anchor" href="#mac电脑删除docker" aria-label="Permalink to &quot;Mac电脑删除docker&quot;">​</a></h1><table tabindex="0"><thead><tr><th>web</th><th>des</th></tr></thead><tbody><tr><td><a href="https://blog.51cto.com/u_16213368/13145398" target="_blank" rel="noreferrer">origin</a></td><td></td></tr></tbody></table><h3 id="停止-docker-desktop" tabindex="-1">停止 Docker Desktop <a class="header-anchor" href="#停止-docker-desktop" aria-label="Permalink to &quot;停止 Docker Desktop&quot;">​</a></h3><p>在开始删除之前，首先需要确保 Docker Desktop 已经完全停止。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">osascript</span><span style="color:#D19A66;"> -e</span><span style="color:#98C379;"> &#39;quit app &quot;Docker&quot;&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="卸载-docker-应用程序" tabindex="-1">卸载 Docker 应用程序 <a class="header-anchor" href="#卸载-docker-应用程序" aria-label="Permalink to &quot;卸载 Docker 应用程序&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> /Applications/Docker.app</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="删除-docker-的所有文件" tabindex="-1">删除 Docker 的所有文件 <a class="header-anchor" href="#删除-docker-的所有文件" aria-label="Permalink to &quot;删除 Docker 的所有文件&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> ~/.docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> /var/run/docker.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> /Library/Containers/com.docker.docker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> /Library/Application</span><span style="color:#56B6C2;">\\ </span><span style="color:#98C379;">Support/Docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="清理系统中的-docker-配置" tabindex="-1">清理系统中的 Docker 配置 <a class="header-anchor" href="#清理系统中的-docker-配置" aria-label="Permalink to &quot;清理系统中的 Docker 配置&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> /Library/PreferencePanes/Docker.prefPane</span></span>
<span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> rm</span><span style="color:#D19A66;"> -rf</span><span style="color:#98C379;"> ~/Library/Group</span><span style="color:#56B6C2;">\\ </span><span style="color:#98C379;">Containers/group.com.docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,11)]))}const k=a(r,[["render",l]]);export{u as __pageData,k as default};
