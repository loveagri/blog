import{_ as a,c as n,a2 as l,o as p}from"./chunks/framework.trnLO_3_.js";const d=JSON.parse('{"title":"squid","description":"","frontmatter":{},"headers":[],"relativePath":"Scrupy/squid.md","filePath":"Scrupy/squid.md","lastUpdated":1735793351000}'),e={name:"Scrupy/squid.md"};function o(r,s,c,t,i,y){return p(),n("div",null,s[0]||(s[0]=[l(`<h1 id="squid" tabindex="-1">squid <a class="header-anchor" href="#squid" aria-label="Permalink to &quot;squid&quot;">​</a></h1><p>高性能代理服务器，支持FTP、http、https等协议。</p><h2 id="配置squid" tabindex="-1">配置squid <a class="header-anchor" href="#配置squid" aria-label="Permalink to &quot;配置squid&quot;">​</a></h2><h3 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> docker</span><span style="color:#98C379;"> pull</span><span style="color:#98C379;"> sameersbn/squid</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><p>squid.conf</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> all</span><span style="color:#98C379;"> src</span><span style="color:#98C379;"> 0.0.0.0/0</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> SSL_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 443</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 80</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 443</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> CONNECT</span><span style="color:#98C379;"> method</span><span style="color:#98C379;"> CONNECT</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> allow</span><span style="color:#98C379;"> all</span></span>
<span class="line"><span style="color:#61AFEF;">http_port</span><span style="color:#D19A66;"> 3128</span></span>
<span class="line"><span style="color:#61AFEF;">visible_hostname</span><span style="color:#98C379;"> proxy</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="远程代理服务器开启docker服务" tabindex="-1">远程代理服务器开启docker服务 <a class="header-anchor" href="#远程代理服务器开启docker服务" aria-label="Permalink to &quot;远程代理服务器开启docker服务&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> squid</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 3128:3128</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> /home/ubuntu/squid.conf:/etc/squid/squid.conf</span><span style="color:#98C379;"> sameersbn/squid</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="本地电脑设置代理" tabindex="-1">本地电脑设置代理 <a class="header-anchor" href="#本地电脑设置代理" aria-label="Permalink to &quot;本地电脑设置代理&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 根据远程代理服务器访问的方式是否为https进行设置，不确定的话就都设置上</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> http_proxy</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;http://xx.xx.xx.xx:3128&#39;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> https_proxy</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;https://xx.xx.xx.xx:3128&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#or</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> https_proxy</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;http://xx.xx.xx.xx:3128&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="通过wget确认代理是否生效" tabindex="-1">通过wget确认代理是否生效 <a class="header-anchor" href="#通过wget确认代理是否生效" aria-label="Permalink to &quot;通过wget确认代理是否生效&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">wget</span><span style="color:#98C379;"> https://www.xxxx.com</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">--2024-12-21</span><span style="color:#98C379;"> 21:39:35--</span><span style="color:#98C379;">  https://www.xxxx.com/</span></span>
<span class="line"><span style="color:#61AFEF;">Connecting</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> 49.232.53.251:3128...</span><span style="color:#98C379;"> connected.</span></span>
<span class="line"><span style="color:#61AFEF;">Proxy</span><span style="color:#98C379;"> request</span><span style="color:#98C379;"> sent,</span><span style="color:#98C379;"> awaiting</span><span style="color:#98C379;"> response...</span><span style="color:#D19A66;"> 200</span><span style="color:#98C379;"> OK</span></span>
<span class="line"><span style="color:#61AFEF;">Length:</span><span style="color:#98C379;"> unspecified</span><span style="color:#ABB2BF;"> [text/html]</span></span>
<span class="line"><span style="color:#61AFEF;">Saving</span><span style="color:#98C379;"> to:</span><span style="color:#98C379;"> ‘index.html.13’</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">index.html.13</span><span style="color:#ABB2BF;">                               [            &lt;=&gt;                                                                 </span><span style="color:#98C379;">]</span><span style="color:#98C379;"> 436.98K</span><span style="color:#98C379;">   142KB/s</span><span style="color:#98C379;">    in</span><span style="color:#98C379;"> 3.1s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">2024-12-21</span><span style="color:#98C379;"> 21:39:39</span><span style="color:#ABB2BF;"> (142 </span><span style="color:#98C379;">KB/s</span><span style="color:#ABB2BF;">) - ‘index.html.13’ saved [447470]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="需要验证或者授权的代理" tabindex="-1">需要验证或者授权的代理 <a class="header-anchor" href="#需要验证或者授权的代理" aria-label="Permalink to &quot;需要验证或者授权的代理&quot;">​</a></h2><p>配置文件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> localnet</span><span style="color:#98C379;"> src</span><span style="color:#98C379;"> all</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> SSL_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 443</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 80</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 21</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 443</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 70</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 210</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#98C379;"> 1025-65535</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 280</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 488</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 591</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> Safe_ports</span><span style="color:#98C379;"> port</span><span style="color:#D19A66;"> 777</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> CONNECT</span><span style="color:#98C379;"> method</span><span style="color:#98C379;"> CONNECT</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># username and password auth config</span></span>
<span class="line"><span style="color:#61AFEF;">auth_param</span><span style="color:#98C379;"> basic</span><span style="color:#98C379;"> program</span><span style="color:#98C379;"> /usr/lib/squid/basic_ncsa_auth</span><span style="color:#98C379;"> /etc/squid/squid_passwd</span></span>
<span class="line"><span style="color:#61AFEF;">acl</span><span style="color:#98C379;"> ncsa_users</span><span style="color:#98C379;"> proxy_auth</span><span style="color:#98C379;"> REQUIRED</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> allow</span><span style="color:#98C379;"> ncsa_users</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> deny</span><span style="color:#98C379;"> !Safe_ports</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> deny</span><span style="color:#98C379;"> CONNECT</span><span style="color:#98C379;"> !SSL_ports</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> allow</span><span style="color:#98C379;"> localhost</span><span style="color:#98C379;"> manager</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> deny</span><span style="color:#98C379;"> manager</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> deny</span><span style="color:#98C379;"> to_localhost</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> allow</span><span style="color:#98C379;"> localnet</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> allow</span><span style="color:#98C379;"> localhost</span></span>
<span class="line"><span style="color:#61AFEF;">http_access</span><span style="color:#98C379;"> deny</span><span style="color:#98C379;"> all</span></span>
<span class="line"><span style="color:#61AFEF;">http_port</span><span style="color:#D19A66;"> 3128</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">refresh_pattern</span><span style="color:#98C379;"> ^ftp:</span><span style="color:#D19A66;">           1440</span><span style="color:#98C379;">    20%</span><span style="color:#D19A66;">     10080</span></span>
<span class="line"><span style="color:#61AFEF;">refresh_pattern</span><span style="color:#98C379;"> ^gopher:</span><span style="color:#D19A66;">        1440</span><span style="color:#98C379;">    0%</span><span style="color:#D19A66;">      1440</span></span>
<span class="line"><span style="color:#61AFEF;">refresh_pattern</span><span style="color:#D19A66;"> -i</span><span style="color:#ABB2BF;"> (/cgi-bin/|</span><span style="color:#61AFEF;">\\?</span><span style="color:#ABB2BF;">) 0     0%      0</span></span>
<span class="line"><span style="color:#61AFEF;">refresh_pattern</span><span style="color:#ABB2BF;"> (Release|</span><span style="color:#61AFEF;">Packages(.gz</span><span style="color:#ABB2BF;">)*)$ 0       20%     2880</span></span>
<span class="line"><span style="color:#61AFEF;">refresh_pattern</span><span style="color:#98C379;"> .</span><span style="color:#D19A66;">               0</span><span style="color:#98C379;">       20%</span><span style="color:#D19A66;">     4320</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h3 id="安装htpasswd命令" tabindex="-1">安装<code>htpasswd</code>命令 <a class="header-anchor" href="#安装htpasswd命令" aria-label="Permalink to &quot;安装\`htpasswd\`命令&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> apt</span><span style="color:#98C379;"> install</span><span style="color:#98C379;"> apache2-utils</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="生成访问用户名密码对" tabindex="-1">生成访问用户名密码对 <a class="header-anchor" href="#生成访问用户名密码对" aria-label="Permalink to &quot;生成访问用户名密码对&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> htpasswd</span><span style="color:#D19A66;"> -c</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">filenam</span><span style="color:#ABB2BF;">e&gt; &lt;</span><span style="color:#98C379;">usernam</span><span style="color:#ABB2BF;">e&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">dotohi:$apr1$gewwEbvJ$PGGUSPxPm4OQdoRXnaCh4.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="开启docker的squid服务" tabindex="-1">开启docker的squid服务 <a class="header-anchor" href="#开启docker的squid服务" aria-label="Permalink to &quot;开启docker的squid服务&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> squid</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 3128:3128</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> /home/ubuntu/pass_squid.conf:/etc/squid/squid.conf</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> /home/ubuntu/squid_pass:/etc/squid/squid_passwd</span><span style="color:#98C379;"> sameersbn/squid</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,23)]))}const u=a(e,[["render",o]]);export{d as __pageData,u as default};