import{_ as e,c as r,a2 as o,o as s}from"./chunks/framework.trnLO_3_.js";const E=JSON.parse('{"title":"Windows 问题","description":"","frontmatter":{},"headers":[],"relativePath":"computer/Windows/error.md","filePath":"computer/Windows/error.md","lastUpdated":1735793351000}'),t={name:"computer/Windows/error.md"};function n(l,a,i,c,d,p){return s(),r("div",null,a[0]||(a[0]=[o('<h1 id="windows-问题" tabindex="-1">Windows 问题 <a class="header-anchor" href="#windows-问题" aria-label="Permalink to &quot;Windows 问题&quot;">​</a></h1><h3 id="_0x80070643-for-win-10-22h2" tabindex="-1">0X80070643 for win 10 22H2 <a class="header-anchor" href="#_0x80070643-for-win-10-22h2" aria-label="Permalink to &quot;0X80070643 for win 10 22H2&quot;">​</a></h3><p><a href="https://blog.csdn.net/huahualaly/article/details/135518242" target="_blank" rel="noreferrer">解决方法</a> <a href="https://support.microsoft.com/zh-cn/topic/kb5034441-%E9%80%82%E7%94%A8%E4%BA%8E-windows-10-%E7%89%88%E6%9C%AC-21h2-%E5%92%8C-22h2-%E7%9A%84-windows-%E6%81%A2%E5%A4%8D%E7%8E%AF%E5%A2%83%E6%9B%B4%E6%96%B0-2024-%E5%B9%B4-1-%E6%9C%88-9-%E6%97%A5-62c04204-aaa5-4fee-a02a-2fdea17075a8" target="_blank" rel="noreferrer">官方原因</a> <a href="https://support.microsoft.com/zh-cn/topic/kb5034441-%E9%80%82%E7%94%A8%E4%BA%8E-windows-10-%E7%89%88%E6%9C%AC-21h2-%E5%92%8C-22h2-%E7%9A%84-windows-%E6%81%A2%E5%A4%8D%E7%8E%AF%E5%A2%83%E6%9B%B4%E6%96%B0-2024-%E5%B9%B4-1-%E6%9C%88-9-%E6%97%A5-62c04204-aaa5-4fee-a02a-2fdea17075a8" target="_blank" rel="noreferrer">官方解决方法</a></p><h3 id="关闭hyper-v" tabindex="-1">关闭hyper-v <a class="header-anchor" href="#关闭hyper-v" aria-label="Permalink to &quot;关闭hyper-v&quot;">​</a></h3><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">bcdedit</span><span style="color:#98C379;"> /set</span><span style="color:#98C379;"> hypervisorlaunchtype</span><span style="color:#98C379;"> off</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5)]))}const f=e(t,[["render",n]]);export{E as __pageData,f as default};