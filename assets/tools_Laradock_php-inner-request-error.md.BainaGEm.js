import{_ as s,c as n,a2 as e,o as l}from"./chunks/framework.trnLO_3_.js";const m=JSON.parse('{"title":"laradock 问题","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Laradock/php-inner-request-error.md","filePath":"tools/Laradock/php-inner-request-error.md","lastUpdated":1735793351000}'),o={name:"tools/Laradock/php-inner-request-error.md"};function r(p,a,c,t,i,d){return l(),n("div",null,a[0]||(a[0]=[e(`<h1 id="laradock-问题" tabindex="-1">laradock 问题 <a class="header-anchor" href="#laradock-问题" aria-label="Permalink to &quot;laradock 问题&quot;">​</a></h1><h2 id="解决-laradock-中-guzzle-curl-出现-error-curl-7" tabindex="-1">解决 laradock 中 Guzzle/Curl 出现 error [curl] 7 <a class="header-anchor" href="#解决-laradock-中-guzzle-curl-出现-error-curl-7" aria-label="Permalink to &quot;解决 laradock 中 Guzzle/Curl 出现 error [curl] 7&quot;">​</a></h2><p>在使用 Guzzle 的时候，出现了 <code>[curl] 7: Failed to connect to xxx port 80: Connection refused</code> 这个问题，需要修改 <code>docker-compose.yml</code> 中关于 nginx 的配置。但是需要搞懂一下yaml语法</p><ul><li>原来的配置文件是这样的：</li></ul><img src="https://gitlab.com/loveagri/pic/-/raw/main/2023-07-25/10/image-20230725103209596_20230725103209.png" alt="image-20230725103209596" style="zoom:50%;"><ul><li>修改后的配置文件是这样的：</li></ul><img src="https://gitlab.com/loveagri/pic/-/raw/main/2023-07-25/10/image-20230725103127239_20230725103127.png" alt="image-20230725103127239" style="zoom:50%;"><p>最后重启laradock，或者nginx</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">//重启全部</span></span>
<span class="line"><span style="color:#61AFEF;">docker-compose</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> nginx</span><span style="color:#98C379;"> mysql</span><span style="color:#98C379;"> phpmyadmin</span><span style="color:#98C379;"> redis</span><span style="color:#98C379;"> workspace</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">重启NGINX</span></span>
<span class="line"><span style="color:#61AFEF;">docker-compose</span><span style="color:#98C379;"> stop</span><span style="color:#98C379;"> nginx</span></span>
<span class="line"><span style="color:#61AFEF;">docker-compose</span><span style="color:#98C379;"> build</span><span style="color:#D19A66;"> --no-cache</span><span style="color:#98C379;"> nginx</span></span>
<span class="line"><span style="color:#61AFEF;">docker-compose</span><span style="color:#98C379;"> up</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> nginx</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,9)]))}const b=s(o,[["render",r]]);export{m as __pageData,b as default};