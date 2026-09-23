import{_ as n,c as a,o as l,ah as e}from"./chunks/framework.BrJYEL96.js";const u=JSON.parse('{"title":"DHCP","description":"","frontmatter":{},"headers":[],"relativePath":"courses/Internet/dhcp.md","filePath":"courses/Internet/dhcp.md","lastUpdated":1776736422000}'),p={name:"courses/Internet/dhcp.md"};function r(t,s,c,i,o,b){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="dhcp" tabindex="-1">DHCP <a class="header-anchor" href="#dhcp" aria-label="Permalink to &quot;DHCP&quot;">​</a></h1><p><img src="https://raw.gitcode.com/loveagri/pic/raw/main/2026-04-20/22/19422_image-20260420214216815.png" alt="image-20260420214216815" loading="lazy"></p><h2 id="一、网络规划-必看" tabindex="-1">一、网络规划（必看） <a class="header-anchor" href="#一、网络规划-必看" aria-label="Permalink to &quot;一、网络规划（必看）&quot;">​</a></h2><table tabindex="0"><thead><tr><th>设备</th><th>接口</th><th>IP 地址 / 配置</th><th>作用</th></tr></thead><tbody><tr><td><strong>R1</strong></td><td>Vlanif10</td><td>192.168.1.1/24</td><td>销售部网关（DHCP 服务器）</td></tr><tr><td><strong>R1</strong></td><td>Vlanif20</td><td>192.168.2.1/24</td><td>市场部网关（DHCP 服务器）</td></tr><tr><td><strong>R1</strong></td><td>GE0/0/1</td><td>10.2.2.1/24</td><td>与 R2 互联</td></tr><tr><td><strong>R2</strong></td><td>GE0/0/0</td><td>10.2.2.2/24</td><td>与 R1 互联</td></tr><tr><td><strong>R2</strong></td><td>Ethernet0/0/1</td><td>172.16.5.1/24</td><td>研发部网关（DHCP 中继）</td></tr><tr><td><strong>LSW1</strong></td><td>接 PC1/2</td><td>Access → Vlan10</td><td>销售部接入</td></tr><tr><td><strong>LSW1</strong></td><td>接 PC3/4</td><td>Access → Vlan20</td><td>市场部接入</td></tr><tr><td><strong>LSW1</strong></td><td>接 R1</td><td>Trunk → 允 Vlan10/20</td><td>上联路由</td></tr></tbody></table><h2 id="二、lsw1-接入交换机配置" tabindex="-1">二、LSW1 接入交换机配置 <a class="header-anchor" href="#二、lsw1-接入交换机配置" aria-label="Permalink to &quot;二、LSW1 接入交换机配置&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Huawei&gt; system-view</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] undo info-center enable</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] sysname LSW1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 1. 创建VLAN</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] vlan batch 10 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2. 配置销售部接口（PC1、PC2）</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] interface Ethernet 0/0/1</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/1] port link-type access</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/1] port default vlan 10</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/1] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] interface Ethernet 0/0/2</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/2] port link-type access</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/2] port default vlan 10</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/2] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 3. 配置市场部接口（PC3、PC4）</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] interface Ethernet 0/0/3</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/3] port link-type access</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/3] port default vlan 20</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/3] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] interface Ethernet 0/0/4</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/4] port link-type access</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/4] port default vlan 20</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-Ethernet0/0/4] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 4. 配置连接R1的上联口（必须是Trunk）</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1] interface GigabitEthernet 0/0/1</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-GigabitEthernet0/0/1] port link-type trunk</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-GigabitEthernet0/0/1] port trunk allow-pass vlan 10 20</span></span>
<span class="line"><span style="color:#ABB2BF;">[LSW1-GigabitEthernet0/0/1] quit</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><hr><h2 id="三、r1-路由器配置-dhcp-服务器核心" tabindex="-1">三、R1 路由器配置（DHCP 服务器核心） <a class="header-anchor" href="#三、r1-路由器配置-dhcp-服务器核心" aria-label="Permalink to &quot;三、R1 路由器配置（DHCP 服务器核心）&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Huawei&gt; system-view</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] undo info-center enable</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] sysname R1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 1. 全局开启DHCP</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] dhcp enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2. 创建VLAN并配置三层网关</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] vlan batch 10 20</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 3. 配置连接交换机的Trunk口</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] interface GigabitEthernet 0/0/0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/0] portswitch</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/0] port link-type trunk</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/0] port trunk allow-pass vlan 10 20</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/0] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 4. 配置销售部Vlanif10（网关+DHCP）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] interface Vlanif 10</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif10] ip address 192.168.1.1 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif10] dhcp </span><span style="color:#C678DD;">select</span><span style="color:#E06C75;"> global</span><span style="color:#7F848E;font-style:italic;">  # 绑定全局地址池</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif10] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 5. 配置市场部Vlanif20（网关+DHCP）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] interface Vlanif 20</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif20] ip address 192.168.2.1 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif20] dhcp </span><span style="color:#C678DD;">select</span><span style="color:#E06C75;"> global</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-Vlanif20] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 6. 配置与R2互联接口</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] interface GigabitEthernet 0/0/1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/1] ip address 10.2.2.1 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/1] dhcp </span><span style="color:#C678DD;">select</span><span style="color:#E06C75;"> global</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-GigabitEthernet0/0/1] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 7. 配置DHCP全局地址池</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 销售部地址池</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] ip pool Pool-Sales</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] network 192.168.1.0 mask 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] gateway-list 192.168.1.1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] dns-list 8.8.8.8 114.114.114.114</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] excluded-ip-address 192.168.1.2 192.168.1.10</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] excluded-ip-address 192.168.1.201 192.168.1.254</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Sales] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 市场部地址池</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] ip pool Pool-Market</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Market] network 192.168.2.0 mask 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Market] gateway-list 192.168.2.1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Market] dns-list 8.8.8.8 114.114.114.114</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-Market] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 研发部地址池（R2中继使用）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] ip pool Pool-RD</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-RD] network 172.16.5.0 mask 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-RD] gateway-list 172.16.5.1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-RD] dns-list 8.8.8.8 114.114.114.114</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1-ip-pool-Pool-RD] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 8. 配置静态路由（指向R2）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R1] ip route-static 172.16.5.0 255.255.255.0 10.2.2.2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br></div></div><hr><h2 id="四、r2-路由器配置-dhcp-中继" tabindex="-1">四、R2 路由器配置（DHCP 中继） <a class="header-anchor" href="#四、r2-路由器配置-dhcp-中继" aria-label="Permalink to &quot;四、R2 路由器配置（DHCP 中继）&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;Huawei&gt; system-view</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] undo info-center enable</span></span>
<span class="line"><span style="color:#ABB2BF;">[Huawei] sysname R2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 1. 全局开启DHCP（中继必须开启）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2] dhcp enable</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2. 配置与R1互联接口</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2] interface GigabitEthernet 0/0/0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-GigabitEthernet0/0/0] ip address 10.2.2.2 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-GigabitEthernet0/0/0] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 3. 配置研发部接口（网关+中继）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2] interface Ethernet 0/0/1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-Ethernet 0/0/1] ip address 172.16.5.1 255.255.255.0</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-Ethernet 0/0/1] dhcp </span><span style="color:#C678DD;">select</span><span style="color:#E06C75;"> relay</span><span style="color:#7F848E;font-style:italic;">      # 开启中继模式</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-Ethernet 0/0/1] dhcp relay server-ip 10.2.2.1  </span><span style="color:#7F848E;font-style:italic;"># 指定DHCP服务器IP（R1）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2-Ethernet 0/0/1] quit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 4. 配置静态路由（指向R1的业务网段）</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2] ip route-static 192.168.1.0 255.255.255.0 10.2.2.1</span></span>
<span class="line"><span style="color:#ABB2BF;">[R2] ip route-static 192.168.2.0 255.255.255.0 10.2.2.1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><hr><h2 id="五、pc-终端配置-自动获取" tabindex="-1">五、PC 终端配置（自动获取） <a class="header-anchor" href="#五、pc-终端配置-自动获取" aria-label="Permalink to &quot;五、PC 终端配置（自动获取）&quot;">​</a></h2><p>所有 PC 均设置为 <strong>DHCP 自动获取</strong>：</p><ol><li><p>打开 PC → 网络设置 → IPv4 → 选择 “自动获取 IP 地址” 和 “自动获取 DNS 服务器地址”。</p></li><li><p>执行命令行：</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">ipconfig</span><span style="color:#98C379;"> /release</span></span>
<span class="line"><span style="color:#61AFEF;">ipconfig</span><span style="color:#98C379;"> /renew</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol>`,16)]))}const d=n(p,[["render",r]]);export{u as __pageData,d as default};
