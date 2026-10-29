import{_ as n,c as a,o as l,ah as e}from"./chunks/framework.BrJYEL96.js";const m=JSON.parse('{"title":"主从复制","description":"","frontmatter":{},"headers":[],"relativePath":"database/redis/master-slave.md","filePath":"database/redis/master-slave.md","lastUpdated":1738670768000}'),p={name:"database/redis/master-slave.md"};function r(c,s,o,i,t,b){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="主从复制" tabindex="-1">主从复制 <a class="header-anchor" href="#主从复制" aria-label="Permalink to &quot;主从复制&quot;">​</a></h1><p>配置文件</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">bind</span><span style="color:#D19A66;"> 0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">daemonize</span><span style="color:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">logfile</span><span style="color:#98C379;"> &quot;/usr/local/redis/log/redis.log&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">dbfilename</span><span style="color:#98C379;"> dump.rdb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">dir</span><span style="color:#98C379;"> /usr/local/redis/data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">appendonly</span><span style="color:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">appendfilename</span><span style="color:#98C379;"> &#39;appendonly.aof&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">requirepass</span><span style="color:#98C379;"> password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 从节点访问主节点密码，与requirepass一致</span></span>
<span class="line"><span style="color:#61AFEF;">masterauth</span><span style="color:#98C379;"> password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 从节点只读模式</span></span>
<span class="line"><span style="color:#61AFEF;">replica-read-only</span><span style="color:#98C379;"> yes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 从节点属于哪个主节点</span></span>
<span class="line"><span style="color:#61AFEF;">slaveof</span><span style="color:#D19A66;"> 192.168.0.90</span><span style="color:#D19A66;"> 6379</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>查看主从节点情况</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&gt; info replication</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">127.0.0.1:6379</span><span style="color:#ABB2BF;">&gt; </span><span style="color:#98C379;">info</span><span style="color:#98C379;"> replication</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Replication</span></span>
<span class="line"><span style="color:#61AFEF;">role:master</span></span>
<span class="line"><span style="color:#61AFEF;">connected_slaves:0</span></span>
<span class="line"><span style="color:#61AFEF;">master_replid:ff37328c031e0476abfdc289fd9efa7611948c2d</span></span>
<span class="line"><span style="color:#61AFEF;">master_replid2:0000000000000000000000000000000000000000</span></span>
<span class="line"><span style="color:#61AFEF;">master_repl_offset:0</span></span>
<span class="line"><span style="color:#61AFEF;">second_repl_offset:-1</span></span>
<span class="line"><span style="color:#61AFEF;">repl_backlog_active:0</span></span>
<span class="line"><span style="color:#61AFEF;">repl_backlog_size:1048576</span></span>
<span class="line"><span style="color:#61AFEF;">repl_backlog_first_byte_offset:0</span></span>
<span class="line"><span style="color:#61AFEF;">repl_backlog_histlen:0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,5)]))}const u=n(p,[["render",r]]);export{m as __pageData,u as default};
