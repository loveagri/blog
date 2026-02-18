import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const m=JSON.parse('{"title":"docker MySQL","description":"","frontmatter":{},"headers":[],"relativePath":"database/Mysql/docker-mysql.md","filePath":"database/Mysql/docker-mysql.md","lastUpdated":1743511059000}'),e={name:"database/Mysql/docker-mysql.md"};function r(c,s,o,t,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="docker-mysql" tabindex="-1">docker MySQL <a class="header-anchor" href="#docker-mysql" aria-label="Permalink to &quot;docker MySQL&quot;">​</a></h1><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 3306 端口</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 用户</span></span>
<span class="line"><span style="color:#E06C75;">user</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 的安装目录</span></span>
<span class="line"><span style="color:#61AFEF;">basedir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#61AFEF;">datadir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/mysqldb</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># secure_file_priv是MySQL中的系统变量，用于限制文件的读取和写入。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 1.secure_file_priv = NULL ，限制文件的读取和写入。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2.secure_file_priv = 文件路径 ，限制文件的读取和写入只能在设定的文件夹中。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 3.secure_file_priv= &quot;&quot;, 对文件和读取和写入没有任何限制。</span></span>
<span class="line"><span style="color:#61AFEF;">secure-file-priv</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#慢查询sql日志设置</span></span>
<span class="line"><span style="color:#E06C75;">slow_query_log</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">1</span></span>
<span class="line"><span style="color:#E06C75;">slow_query_log_file</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">/usr/local/mysql/log/show_query.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#pid</span></span>
<span class="line"><span style="color:#E06C75;">pid-file</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">/usr/local/mysql/mysqld/mysqld.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#设置socke文件所在目录</span></span>
<span class="line"><span style="color:#E06C75;">socket</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">/usr/local/mysql/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 允许访问的IP网段</span></span>
<span class="line"><span style="color:#E06C75;">bind-address</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 允许最大连接数</span></span>
<span class="line"><span style="color:#61AFEF;">max_connections</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统</span></span>
<span class="line"><span style="color:#61AFEF;">max_connect_errors</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 服务端使用的字符集默认为 UTF8</span></span>
<span class="line"><span style="color:#61AFEF;">character-set-server</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#数据库字符集对应一些排序等规则，注意要和character-set-server对应</span></span>
<span class="line"><span style="color:#E06C75;">collation-server</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">utf8mb4_general_ci</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#是否对sql语句大小写敏感，0敏感 1不敏感</span></span>
<span class="line"><span style="color:#E06C75;">lower_case_table_names</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#TIMESTAMP如果没有显示声明NOT NULL，允许NULL值</span></span>
<span class="line"><span style="color:#E06C75;">explicit_defaults_for_timestamp</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 配置时区</span></span>
<span class="line"><span style="color:#61AFEF;">default_time_zone</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &#39;+8:00&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#61AFEF;">default-storage-engine</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> INNODB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 默认使用 mysql_native_password 插件认证</span></span>
<span class="line"><span style="color:#61AFEF;">default_authentication_plugin</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> mysql_native_password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 是否对 sql 语句大小写敏感，1：不敏感</span></span>
<span class="line"><span style="color:#61AFEF;">lower_case_table_names</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MySQL 连接闲置超过一定时间后(单位：秒)将会被强行关闭</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MySQL 默认的 wait_timeout 值为 8 个小时, interactive_timeout 参数需要同时配置才能生效</span></span>
<span class="line"><span style="color:#61AFEF;">interactive_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1800</span></span>
<span class="line"><span style="color:#61AFEF;">wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1800</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Metadata Lock最大时长（秒），一般用于控制 alter 操作的最大时长 sine mysql5.6</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行 DML 操作时除了增加 innodb 事务锁外还增加 Metadata Lock，其他 alter（DDL）session 将阻塞</span></span>
<span class="line"><span style="color:#61AFEF;">lock_wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3600</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 内部内存临时表的最大值。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 比如大数据量的 group by / order by 时可能用到临时表，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 超过了这个值将写入磁盘，系统 IO 压力增大</span></span>
<span class="line"><span style="color:#61AFEF;">tmp_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"><span style="color:#61AFEF;">max_heap_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#检查未使用到索引的sql</span></span>
<span class="line"><span style="color:#E06C75;">log_queries_not_using_indexes</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">[mysql]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 客户端默认字符集</span></span>
<span class="line"><span style="color:#61AFEF;">default-character-set</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span>
<span class="line"><span style="color:#ABB2BF;">[client]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span style="color:#E06C75;">port</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">3306</span></span>
<span class="line"><span style="color:#61AFEF;">default-character-set</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">docker</span><span style="color:#98C379;"> run</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -p</span><span style="color:#98C379;"> 3306:3306</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -e</span><span style="color:#98C379;"> MYSQL_ROOT_PASSWORD=love</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -v</span><span style="color:#98C379;"> /home/ubuntu/mysql/data:/usr/local/mysql/mysqldb:rw</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -v</span><span style="color:#98C379;"> /usr/local/mysql/conf:/etc/mysql</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -v</span><span style="color:#98C379;"> /home/ubuntu/data:/home/root/data</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    --privileged=true</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    --name</span><span style="color:#98C379;"> mysql</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    --restart=always</span><span style="color:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#D19A66;">    -d</span><span style="color:#98C379;"> mysql:8.0.24</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,3)]))}const u=n(e,[["render",r]]);export{m as __pageData,u as default};
