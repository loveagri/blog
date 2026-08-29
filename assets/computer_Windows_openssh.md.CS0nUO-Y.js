import{_ as n,c as a,o as e,ah as l}from"./chunks/framework.BrJYEL96.js";const d=JSON.parse('{"title":"开启openssh","description":"","frontmatter":{},"headers":[],"relativePath":"computer/Windows/openssh.md","filePath":"computer/Windows/openssh.md","lastUpdated":1734365774000}'),p={name:"computer/Windows/openssh.md"};function t(o,s,i,r,c,b){return e(),a("div",null,s[0]||(s[0]=[l(`<h1 id="开启openssh" tabindex="-1">开启openssh <a class="header-anchor" href="#开启openssh" aria-label="Permalink to &quot;开启openssh&quot;">​</a></h1><table tabindex="0"><thead><tr><th>网站</th><th>备注</th></tr></thead><tbody><tr><td><a href="https://learn.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui&amp;pivots=windows-server-2025" target="_blank" rel="noreferrer">官网</a></td><td></td></tr><tr><td><a href="https://learn.microsoft.com/zh-cn/windows-server/administration/openssh/openssh_install_firstuse?tabs=gui&amp;pivots=windows-server-2022#install-openssh-for-windows-server" target="_blank" rel="noreferrer">安装</a></td><td></td></tr><tr><td><a href="https://blog.csdn.net/xuchaoxin1375/article/details/142217418" target="_blank" rel="noreferrer">免密登录</a></td><td></td></tr></tbody></table><h2 id="启动openssh服务" tabindex="-1">启动OpenSSH服务 <a class="header-anchor" href="#启动openssh服务" aria-label="Permalink to &quot;启动OpenSSH服务&quot;">​</a></h2><p>打开服务管理器：</p><p>按 <code>Win + R</code>，输入 <code>services.msc</code>，然后按 Enter。 找到<code>OpenSSH SSH Server</code>服务：</p><p>在服务列表中找到<code>OpenSSH SSH Server</code>。 启动服务：</p><p>右键点击<code>OpenSSH SSH Server</code>，选择“启动”。 设置开机自启动：</p><p>右键点击<code>OpenSSH SSH Server</code>，选择“属性”。 在“启动类型”下拉菜单中选择“自动”，然后点击“应用”和“确定”。</p><h2 id="配置防火墙" tabindex="-1">配置防火墙 <a class="header-anchor" href="#配置防火墙" aria-label="Permalink to &quot;配置防火墙&quot;">​</a></h2><p>打开防火墙设置：</p><p>按 <code>Win + R</code>，输入 <code>firewall.cpl</code>，然后按 <code>Enter</code>。 允许应用通过防火墙：</p><p>点击“允许应用通过防火墙”。 点击“更改设置”，然后找到<code>OpenSSH Server</code>并确保它被允许通过防火墙。</p><p>配置SSH 默认情况下，OpenSSH服务器的配置文件位于 <code>C:\\ProgramData\\SSH\\sshd_config</code>。你可以根据需要修改这个文件来调整SSH服务的配置。</p><p>编辑配置文件：</p><p>使用文本编辑器（如记事本）以管理员身份打开 <code>C:\\ProgramData\\SSH\\sshd_config </code>文件。 修改所需的设置，如端口号（默认为22）和认证方法等。 重新启动SSH服务：</p><p>在服务管理器中，右键点击<code>OpenSSH SSH Server</code>，选择“重新启动”。</p><h2 id="传输文件" tabindex="-1">传输文件 <a class="header-anchor" href="#传输文件" aria-label="Permalink to &quot;传输文件&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">scp</span><span style="color:#98C379;"> local.txt</span><span style="color:#98C379;"> Administrator@49.232.53.251:C:/Users/Administrator/Downloads/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="免密登录" tabindex="-1">免密登录 <a class="header-anchor" href="#免密登录" aria-label="Permalink to &quot;免密登录&quot;">​</a></h2><p>免密登录ssh的配置文件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># This is the sshd server system-wide configuration file.  See</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># sshd_config(5) for more information.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The strategy used for options in the default sshd_config shipped with</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># OpenSSH is to specify options with their default value where</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># possible, but leave them commented.  Uncommented options override the</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># default value.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#Port 22</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#AddressFamily any</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#ListenAddress 0.0.0.0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#ListenAddress ::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#HostKey __PROGRAMDATA__/ssh/ssh_host_rsa_key</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#HostKey __PROGRAMDATA__/ssh/ssh_host_dsa_key</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#HostKey __PROGRAMDATA__/ssh/ssh_host_ecdsa_key</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#HostKey __PROGRAMDATA__/ssh/ssh_host_ed25519_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Ciphers and keying</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#RekeyLimit default none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Logging</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#SyslogFacility AUTH</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#LogLevel INFO</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Authentication:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#LoginGraceTime 2m</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PermitRootLogin prohibit-password</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#StrictModes yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#MaxAuthTries 6</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#MaxSessions 10</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">PubkeyAuthentication</span><span style="color:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># but this is overridden so installations will only check .ssh/authorized_keys</span></span>
<span class="line"><span style="color:#61AFEF;">AuthorizedKeysFile</span><span style="color:#98C379;">	.ssh/authorized_keys</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#AuthorizedPrincipalsFile none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># For this to work you will also need host keys in %programData%/ssh/ssh_known_hosts</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#HostbasedAuthentication no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Change to yes if you don&#39;t trust ~/.ssh/known_hosts for</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># HostbasedAuthentication</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#IgnoreUserKnownHosts no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Don&#39;t read the user&#39;s ~/.rhosts and ~/.shosts files</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#IgnoreRhosts yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># To disable tunneled clear text passwords, change to no here!</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PasswordAuthentication yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PermitEmptyPasswords no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># GSSAPI options</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#GSSAPIAuthentication no</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#AllowAgentForwarding yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#AllowTcpForwarding yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#GatewayPorts no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PermitTTY yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PrintMotd yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PrintLastLog yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#TCPKeepAlive yes</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#UseLogin no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PermitUserEnvironment no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#ClientAliveInterval 0</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#ClientAliveCountMax 3</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#UseDNS no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PidFile /var/run/sshd.pid</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#MaxStartups 10:30:100</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#PermitTunnel no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#ChrootDirectory none</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#VersionAddendum none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># no default banner path</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#Banner none</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># override default of no subsystems</span></span>
<span class="line"><span style="color:#61AFEF;">Subsystem</span><span style="color:#98C379;">	sftp</span><span style="color:#98C379;">	sftp-server.exe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Example of overriding settings on a per-user basis</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#Match User anoncvs</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#	AllowTcpForwarding no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#	PermitTTY no</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#	ForceCommand cvs server</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Match Group administrators</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#        AuthorizedKeysFile __PROGRAMDATA__/ssh/administrators_authorized_keys</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><p>其实总共就保留了三条配置,其余都是注释掉:(不同版本的openssh server可能有所不同)</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">PubkeyAuthentication</span><span style="color:#98C379;"> yes</span></span>
<span class="line"><span style="color:#61AFEF;">AuthorizedKeysFile</span><span style="color:#98C379;">	.ssh/authorized_keys</span></span>
<span class="line"><span style="color:#61AFEF;">Subsystem</span><span style="color:#98C379;">	sftp</span><span style="color:#98C379;">	sftp-server.exe</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,23)]))}const u=n(p,[["render",t]]);export{d as __pageData,u as default};
