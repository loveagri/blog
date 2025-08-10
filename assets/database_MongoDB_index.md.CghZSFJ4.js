import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const d=JSON.parse('{"title":"MongoDB","description":"","frontmatter":{},"headers":[],"relativePath":"database/MongoDB/index.md","filePath":"database/MongoDB/index.md","lastUpdated":1751723043000}'),e={name:"database/MongoDB/index.md"};function o(r,s,c,t,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="mongodb" tabindex="-1">MongoDB <a class="header-anchor" href="#mongodb" aria-label="Permalink to &quot;MongoDB&quot;">​</a></h1><table tabindex="0"><thead><tr><th>web</th><th>desc</th></tr></thead><tbody><tr><td><a href="https://www.mongodb.com/zh-cn" target="_blank" rel="noreferrer">官网</a></td><td><a href="https://www.mongodb.com/zh-cn/docs/" target="_blank" rel="noreferrer">各种语言操作</a></td></tr><tr><td><a href="https://www.mongodb.com/zh-cn/docs/manual/crud/" target="_blank" rel="noreferrer">手册</a></td><td></td></tr><tr><td><a href="https://www.mongodb.com/try/download/atlascli" target="_blank" rel="noreferrer">mongodb compass</a></td><td>客户端</td></tr></tbody></table><h2 id="docker启动" tabindex="-1">docker启动 <a class="header-anchor" href="#docker启动" aria-label="Permalink to &quot;docker启动&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> mymongo</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 27017:27017</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> /Users/press/Data/mymongo/data:/data/db</span><span style="color:#D19A66;">  --restart=always</span><span style="color:#D19A66;"> -e</span><span style="color:#98C379;"> TZ=Asia/Shanghai</span><span style="color:#98C379;">  mongo:[version]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 带用户认证和配置文件的</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --name</span><span style="color:#98C379;"> mongodb</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  --name</span><span style="color:#98C379;"> mymongo</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  -v</span><span style="color:#98C379;"> /Users/coder/Data/mymongo/data:/data/db</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  -v</span><span style="color:#ABB2BF;"> $(</span><span style="color:#56B6C2;">pwd</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">/mongod.conf:/etc/mongod.conf</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  --restart=always</span><span style="color:#D19A66;"> -e</span><span style="color:#98C379;"> TZ=Asia/Shanghai</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  -e</span><span style="color:#98C379;"> MONGO_INITDB_ROOT_USERNAME=admin</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  -e</span><span style="color:#98C379;"> MONGO_INITDB_ROOT_PASSWORD=love</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">  -p</span><span style="color:#98C379;"> 27017:27017</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#98C379;">  mongo:6</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#链接express</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#D19A66;"> -d</span><span style="color:#D19A66;"> --link</span><span style="color:#98C379;"> mymongo:mongo</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 8081:8081</span><span style="color:#98C379;"> mongo-express</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#启动交互式mongo shell</span></span>
<span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> exec</span><span style="color:#D19A66;"> -it</span><span style="color:#98C379;"> mymongo</span><span style="color:#98C379;"> mongo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>mongod.conf</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># mongod.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># for documentation of all options, see:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#   http://docs.mongodb.org/manual/reference/configuration-options/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Where and how to store data.</span></span>
<span class="line"><span style="color:#61AFEF;">storage:</span></span>
<span class="line"><span style="color:#61AFEF;">  dbPath:</span><span style="color:#98C379;"> /var/lib/mongodb</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#  engine:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#  wiredTiger:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># where to write logging data.</span></span>
<span class="line"><span style="color:#61AFEF;">systemLog:</span></span>
<span class="line"><span style="color:#61AFEF;">  destination:</span><span style="color:#98C379;"> file</span></span>
<span class="line"><span style="color:#61AFEF;">  logAppend:</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#61AFEF;">  path:</span><span style="color:#98C379;"> /var/log/mongodb/mongod.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># network interfaces</span></span>
<span class="line"><span style="color:#61AFEF;">net:</span></span>
<span class="line"><span style="color:#61AFEF;">  port:</span><span style="color:#D19A66;"> 27017</span></span>
<span class="line"><span style="color:#61AFEF;">  bindIp:</span><span style="color:#D19A66;"> 127.0.0.1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># how the process runs</span></span>
<span class="line"><span style="color:#61AFEF;">processManagement:</span></span>
<span class="line"><span style="color:#61AFEF;">  timeZoneInfo:</span><span style="color:#98C379;"> /usr/share/zoneinfo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">security:</span></span>
<span class="line"><span style="color:#61AFEF;">	authorization:</span><span style="color:#98C379;"> enabled</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#operationProfiling:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#replication:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#sharding:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">## Enterprise-Only Options:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#auditLog:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#snmp:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="连接" tabindex="-1">连接 <a class="header-anchor" href="#连接" aria-label="Permalink to &quot;连接&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mongosh</span><span style="color:#98C379;"> mongodb://admin:love@localhost:27017/admin</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">mongosh</span><span style="color:#98C379;"> &quot;mongodb+srv://cluster0.etnh4zf.mongodb.net/&quot;</span><span style="color:#D19A66;"> --apiVersion</span><span style="color:#D19A66;"> 1</span><span style="color:#D19A66;"> --username</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">usernam</span><span style="color:#ABB2BF;">e&gt; </span><span style="color:#D19A66;">--password</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">passwor</span><span style="color:#ABB2BF;">d&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,8)]))}const m=n(e,[["render",o]]);export{d as __pageData,m as default};
