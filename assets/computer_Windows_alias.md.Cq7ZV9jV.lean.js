import{_ as n,c as a,a2 as l,o as p}from"./chunks/framework.trnLO_3_.js";const y=JSON.parse('{"title":"别名 alias","description":"","frontmatter":{},"headers":[],"relativePath":"computer/Windows/alias.md","filePath":"computer/Windows/alias.md","lastUpdated":1735793351000}'),e={name:"computer/Windows/alias.md"};function o(r,s,c,t,i,b){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="别名-alias" tabindex="-1">别名 alias <a class="header-anchor" href="#别名-alias" aria-label="Permalink to &quot;别名 alias&quot;">​</a></h1><ol><li>打开 PowerShell 输入如下，得到 PowerShell 配置文件的路径。</li></ol><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">PS C:\\Users\\fuhon&gt; echo $profile</span></span>
<span class="line"><span style="color:#ABB2BF;">C:\\Users\\fuhon\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>然后打开这个文件，没有目录和文件的话则创建，然后如果你只是想取代某些很长的路径的话使用 <code>set-alias</code> 去设置别名，比如我需要用到不同版本的 JDK，就可以设置一个 <code>java8</code> 的 alias：</p><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">set-alias</span><span style="color:#ABB2BF;"> java8 C:\\Users\\fuhon\\.jdks\\corretto</span><span style="color:#56B6C2;">-</span><span style="color:#D19A66;">1.8</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">0_382</span><span style="color:#ABB2BF;">\\bin\\</span><span style="color:#56B6C2;">java.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果包含命令，里面有空格的话，需要定义函数，这里我定义一个 <code>np</code> 函数：</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> np</span><span style="color:#ABB2BF;"> { </span><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> E:</span><span style="color:#56B6C2;">\\N</span><span style="color:#98C379;">ote</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">ote</span><span style="color:#98C379;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">//单条命令</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> gitci</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#61AFEF;">     git</span><span style="color:#98C379;"> rev-parse</span><span style="color:#98C379;"> HEAD</span><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">//多条命令</span></span>
<span class="line"><span style="color:#61AFEF;">//依次编写多条命令</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> fe</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#56B6C2;">   cd</span><span style="color:#98C379;"> C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\x</span><span style="color:#98C379;">ingag</span><span style="color:#56B6C2;">\\D</span><span style="color:#98C379;">esktop</span><span style="color:#56B6C2;">\\f</span><span style="color:#98C379;">e</span></span>
<span class="line"><span style="color:#61AFEF;">   dir</span></span>
<span class="line"><span style="color:#61AFEF;">   explorer</span><span style="color:#98C379;"> .</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> open</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#61AFEF;">    explorer</span><span style="color:#98C379;"> .</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 参数：字符串，打开的文件夹目录</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 使用：feo C:\\Users\\xingag\\Desktop</span></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#61AFEF;"> feo</span><span style="color:#ABB2BF;">([string]</span><span style="color:#E06C75;">$path</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#56B6C2;">    cd</span><span style="color:#98C379;"> C:</span><span style="color:#56B6C2;">\\U</span><span style="color:#98C379;">sers</span><span style="color:#56B6C2;">\\x</span><span style="color:#98C379;">ingag</span><span style="color:#56B6C2;">\\D</span><span style="color:#98C379;">esktop</span><span style="color:#56B6C2;">\\f</span><span style="color:#98C379;">e</span></span>
<span class="line"><span style="color:#61AFEF;">    explorer</span><span style="color:#98C379;"> &quot;</span><span style="color:#E06C75;">$path</span><span style="color:#98C379;">&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">    dir</span><span style="color:#ABB2BF;">    </span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>设置完成之后保存重启 powerShell，这里大概率会报个错<code> cannot be loaded because running scripts is disabled on this system.</code>，因为 Windows 为了安全考虑，不允许自动运行脚本，如果可以接受这个，以管理员身份打开 PowerShell 运行如下：</p><div class="language-powershell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#56B6C2;">Set-ExecutionPolicy</span><span style="color:#ABB2BF;"> RemoteSigned</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再次重启 PowerShell，尝试运行设置的两个别名（其实 function 严格来说不算别名了）</p>`,10)]))}const u=n(e,[["render",o]]);export{y as __pageData,u as default};