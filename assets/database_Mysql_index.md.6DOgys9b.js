import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const u=JSON.parse('{"title":"MySQL","description":"","frontmatter":{"barName":"Mysql"},"headers":[],"relativePath":"database/Mysql/index.md","filePath":"database/Mysql/index.md","lastUpdated":1737883952000}'),e={name:"database/Mysql/index.md"};function o(c,s,r,t,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="mysql" tabindex="-1">MySQL <a class="header-anchor" href="#mysql" aria-label="Permalink to &quot;MySQL&quot;">​</a></h1><table tabindex="0"><thead><tr><th>web</th><th>des</th></tr></thead><tbody><tr><td><a href="https://dev.mysql.com/downloads/" target="_blank" rel="noreferrer">download from official</a>，<a href="https://www.oracle.com/mysql/technologies/mysql-enterprise-edition-downloads.html" target="_blank" rel="noreferrer">企业版</a>，<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noreferrer">社区版</a></td><td>包括各种语言链接包</td></tr><tr><td><a href="https://blog.csdn.net/weixin_44778952?type=blog" target="_blank" rel="noreferrer">博主笔记</a></td><td></td></tr></tbody></table><h2 id="部署mysql" tabindex="-1">部署MySQL <a class="header-anchor" href="#部署mysql" aria-label="Permalink to &quot;部署MySQL&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 获取</span></span>
<span class="line"><span style="color:#61AFEF;">wget</span><span style="color:#98C379;"> https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-8.0.15-linux-glibc2.12-x86_64.tar.xz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 解压</span></span>
<span class="line"><span style="color:#61AFEF;">xz</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> mysql-8.0.15-linux-glibc2.12-x86_64.tar.xz</span></span>
<span class="line"><span style="color:#61AFEF;">tar</span><span style="color:#98C379;"> xf</span><span style="color:#98C379;"> mysql-8.0.15-linux-glibc2.12-x86_64.tar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 移动</span></span>
<span class="line"><span style="color:#61AFEF;"> mv</span><span style="color:#98C379;"> mysql-8.0.15-linux-glibc2.12-x86_64</span><span style="color:#98C379;"> /usr/local/mysql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="建立mysql账号" tabindex="-1">建立Mysql账号 <a class="header-anchor" href="#建立mysql账号" aria-label="Permalink to &quot;建立Mysql账号&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">adduser</span><span style="color:#98C379;"> mysql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="创建文件夹" tabindex="-1">创建文件夹 <a class="header-anchor" href="#创建文件夹" aria-label="Permalink to &quot;创建文件夹&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> data</span><span style="color:#98C379;"> sql_log</span><span style="color:#98C379;"> undo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 修改权限</span></span>
<span class="line"><span style="color:#61AFEF;">chown</span><span style="color:#98C379;"> mysql:mysql</span><span style="color:#D19A66;"> -R</span><span style="color:#98C379;"> data/</span><span style="color:#98C379;"> sql_log/</span><span style="color:#98C379;"> undo/</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="添加mysql的path" tabindex="-1">添加Mysql的path <a class="header-anchor" href="#添加mysql的path" aria-label="Permalink to &quot;添加Mysql的path&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#E06C75;"> PATH</span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;">$PATH</span><span style="color:#ABB2BF;">:/</span><span style="color:#E06C75;">usr</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">local</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">mysql</span><span style="color:#ABB2BF;">/</span><span style="color:#E06C75;">bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="初始化mysql" tabindex="-1">初始化Mysql <a class="header-anchor" href="#初始化mysql" aria-label="Permalink to &quot;初始化Mysql&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">mysqld</span><span style="color:#D19A66;"> --initialize</span><span style="color:#D19A66;"> --user=mysql</span><span style="color:#D19A66;"> --basedir=/usr/local/mysql</span><span style="color:#D19A66;"> --datadir=/usr/local/mysql/data</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="设置开机启动程序" tabindex="-1">设置开机启动程序 <a class="header-anchor" href="#设置开机启动程序" aria-label="Permalink to &quot;设置开机启动程序&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">cp</span><span style="color:#98C379;"> /usr/local/mysql/support-files/mysql.server</span><span style="color:#98C379;"> /etc/init.d/mysqld</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="启动mysql" tabindex="-1">启动Mysql <a class="header-anchor" href="#启动mysql" aria-label="Permalink to &quot;启动Mysql&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">/etc/init.d/mysqld</span><span style="color:#98C379;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">ps</span><span style="color:#D19A66;"> -ef</span><span style="color:#ABB2BF;"> | </span><span style="color:#61AFEF;">grep</span><span style="color:#98C379;"> mysql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="查看初始密码" tabindex="-1">查看初始密码 <a class="header-anchor" href="#查看初始密码" aria-label="Permalink to &quot;查看初始密码&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">grep</span><span style="color:#98C379;"> password</span><span style="color:#98C379;"> /usr/local/mysql/sql_log/mysql-error.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 登录Mysql</span></span>
<span class="line"><span style="color:#61AFEF;">mysql</span><span style="color:#D19A66;"> -uroot</span><span style="color:#D19A66;"> -p</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#change password</span></span>
<span class="line"><span style="color:#61AFEF;">alter</span><span style="color:#98C379;"> user</span><span style="color:#98C379;"> user</span><span style="color:#ABB2BF;">() </span><span style="color:#98C379;">identified</span><span style="color:#98C379;"> by</span><span style="color:#98C379;"> &quot;your-password&quot;</span><span style="color:#ABB2BF;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="初始化my-cnf-linux" tabindex="-1">初始化my.cnf (linux) <a class="header-anchor" href="#初始化my-cnf-linux" aria-label="Permalink to &quot;初始化my.cnf (linux)&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[client]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># default-character-set = utf8mb4</span></span>
<span class="line"><span style="color:#61AFEF;">socket</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/data/mysql.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### 服务端参数配置 #####################################</span></span>
<span class="line"><span style="color:#ABB2BF;">[mysqld]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 只能用 IP 地址检查客户端的登录，不用主机名</span></span>
<span class="line"><span style="color:#61AFEF;">skip_name_resolve</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;">skip_external_locking</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;">skip_symbolic_links</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">user</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 创建新表时将使用的默认存储引擎</span></span>
<span class="line"><span style="color:#61AFEF;">default-storage-engine</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> InnoDB</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 服务端使用的字符集默认为 UTF8</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#character-set-server = utf8mb4</span></span>
<span class="line"><span style="color:#61AFEF;">character-set-server</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 的安装目录</span></span>
<span class="line"><span style="color:#61AFEF;">basedir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 数据库的数据的存放目录 DATA STROAGE #</span></span>
<span class="line"><span style="color:#61AFEF;">datadir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/data</span></span>
<span class="line"><span style="color:#61AFEF;">tmpdir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /tmp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">socket</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/data/mysql.sock</span></span>
<span class="line"><span style="color:#61AFEF;">pid_file</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/data/mysqld.pid</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 3306 端口</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">bind-address</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0.0.0.0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># TIMESTAMP 如果没有显示声明 NOT NULL，允许NULL值</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#explicit_defaults_for_timestamp = true</span></span>
<span class="line"><span style="color:#61AFEF;">explicit_defaults_for_timestamp</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> off</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行 sql 的模式，规定了 sql 的安全等级, 暂时屏蔽，my.cnf 文件中配置报错</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER</span></span>
<span class="line"><span style="color:#61AFEF;">sql_mode</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#read_only=on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MyISAM #</span></span>
<span class="line"><span style="color:#61AFEF;">key_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 32M</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#myisam_recover = FORCE,BACKUP</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># undo log #</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_undo_directory</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/undo</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_undo_tablespaces</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># SAFETY #</span></span>
<span class="line"><span style="color:#61AFEF;">max_allowed_packet</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 100M</span></span>
<span class="line"><span style="color:#61AFEF;">max_connect_errors</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1000000</span></span>
<span class="line"><span style="color:#61AFEF;">sysdate_is_now</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#innodb = FORCE</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#innodb_strick_mode = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">secure-file-priv</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /tmp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">default_authentication_plugin</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> mysql_native_password</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Replice #</span></span>
<span class="line"><span style="color:#61AFEF;">server-id</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1001</span></span>
<span class="line"><span style="color:#61AFEF;">relay_log</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> mysqld-relay-bin</span></span>
<span class="line"><span style="color:#61AFEF;">gtid_mode</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> on</span></span>
<span class="line"><span style="color:#61AFEF;">enforce-gtid-consistency</span></span>
<span class="line"><span style="color:#61AFEF;">log_slave_updates</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> on</span></span>
<span class="line"><span style="color:#61AFEF;">master_info_repository</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> TABLE</span></span>
<span class="line"><span style="color:#61AFEF;">relay_log_info_repository</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> TABLE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 日志文件 BINAARY LOGGING</span></span>
<span class="line"><span style="color:#61AFEF;">log_bin</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/sql_log/mysql-bin</span></span>
<span class="line"><span style="color:#61AFEF;">max_binlog_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 1000M</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_format</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> row</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_expire_logs_seconds</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 86400</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># sync_binlog = 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># CACHES AND LIMITS #</span></span>
<span class="line"><span style="color:#61AFEF;">tmp_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 32M</span></span>
<span class="line"><span style="color:#61AFEF;">max_heap_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 32M</span></span>
<span class="line"><span style="color:#61AFEF;">max_connections</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4000</span></span>
<span class="line"><span style="color:#61AFEF;">thread_cache_size</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 2048</span></span>
<span class="line"><span style="color:#61AFEF;">open_files_limit</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 65535</span></span>
<span class="line"><span style="color:#61AFEF;">table_definition_cache</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4096</span></span>
<span class="line"><span style="color:#61AFEF;">table_open_cache</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4096</span></span>
<span class="line"><span style="color:#61AFEF;">sort_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 2M</span></span>
<span class="line"><span style="color:#61AFEF;">read_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 2M</span></span>
<span class="line"><span style="color:#61AFEF;">read_rnd_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 2M</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># thread_concurrency = 24</span></span>
<span class="line"><span style="color:#61AFEF;">join_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 1M</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#table_cache = 32768</span></span>
<span class="line"><span style="color:#61AFEF;">thread_stack</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 512K</span></span>
<span class="line"><span style="color:#61AFEF;">max_length_for_sort_data</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 16k</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># InnoDB #</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_method</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> O_DIRECT</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 16M</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_log_at_trx_commit</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_file_per_table</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 512M</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_instances</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_stats_on_metadata</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> off</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_open_files</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8192</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_read_io_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 16</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_write_io_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 16</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_io_capacity</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 20000</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_thread_concurrency</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_lock_wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 60</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_old_blocks_time</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1000</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_use_native_aio</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_purge_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_change_buffering</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> all</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_file_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_files_in_group</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 2</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_data_file_path</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> ibdata1:512M:autoextend</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_rollback_on_timeout</span><span style="color:#98C379;"> =on</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># LOGGING #</span></span>
<span class="line"><span style="color:#61AFEF;">log-error</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/sql_log/mysql-error.log</span></span>
<span class="line"><span style="color:#61AFEF;">log_queries_not_using_indexes</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#slow_query_log = 1</span></span>
<span class="line"><span style="color:#61AFEF;">slow_query_log_file</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/sql_log/slowlog.log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#timeout#</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#interactive_timeout = 30</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#wait_timeout = 30</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#net_read_timeout = 60</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br></div></div><h3 id="报错" tabindex="-1">报错 <a class="header-anchor" href="#报错" aria-label="Permalink to &quot;报错&quot;">​</a></h3><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># root @ dotohi in /usr/local/mysql [14:48:05] C:1</span></span>
<span class="line"><span style="color:#61AFEF;">$</span><span style="color:#98C379;"> /etc/init.d/mysqld</span><span style="color:#98C379;"> start</span></span>
<span class="line"><span style="color:#61AFEF;">Starting</span><span style="color:#98C379;"> MySQL....</span><span style="color:#98C379;"> ERROR!</span><span style="color:#98C379;"> The</span><span style="color:#98C379;"> server</span><span style="color:#98C379;"> quit</span><span style="color:#98C379;"> without</span><span style="color:#98C379;"> updating</span><span style="color:#98C379;"> PID</span><span style="color:#98C379;"> file</span><span style="color:#ABB2BF;"> (/usr/local/mysql/data/dotohi.pid).</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 3306 端口</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 的安装目录</span></span>
<span class="line"><span style="color:#61AFEF;">basedir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 数据库的数据的存放目录</span></span>
<span class="line"><span style="color:#61AFEF;">datadir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/local/mysql/mysqldb</span></span>
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
<span class="line"><span style="color:#7F848E;font-style:italic;"># 配置时区 </span></span>
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
<span class="line"><span style="color:#ABB2BF;">[mysql]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 客户端默认字符集</span></span>
<span class="line"><span style="color:#61AFEF;">default-character-set</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span>
<span class="line"><span style="color:#ABB2BF;">[client]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 mysql 客户端连接服务端时默认使用的端口</span></span>
<span class="line"><span style="color:#E06C75;">port</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">3306</span></span>
<span class="line"><span style="color:#61AFEF;">default-character-set</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><h4 id="详细配置" tabindex="-1">详细配置 <a class="header-anchor" href="#详细配置" aria-label="Permalink to &quot;详细配置&quot;">​</a></h4><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[client]</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;">    =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"><span style="color:#61AFEF;">socket</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /tmp/mysql.sock</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">[mysql]</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#prompt=&quot;\\u@mysqldb \\R:\\m:\\s [\\d]&gt; &quot;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#关闭自动补全sql命令功能</span></span>
<span class="line"><span style="color:#61AFEF;">no-auto-rehash</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### 服务端参数配置 #####################################</span></span>
<span class="line"><span style="color:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="color:#61AFEF;">port</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3306</span></span>
<span class="line"><span style="color:#61AFEF;">datadir</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/mysql-8.0.32/data</span></span>
<span class="line"><span style="color:#61AFEF;">log-error</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/mysql-8.0.32/logs/error.log</span></span>
<span class="line"><span style="color:#61AFEF;">pid-file</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/mysql-8.0.32/data/mysql.pid</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 只能用 IP 地址检查客户端的登录，不用主机名</span></span>
<span class="line"><span style="color:#61AFEF;">skip_name_resolve</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 指定时间存储默认时区</span></span>
<span class="line"><span style="color:#61AFEF;">default_time_zone</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> &quot;+8:00&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 数据库默认字符集, 主流字符集支持一些特殊表情符号（特殊表情符占用4个字节）</span></span>
<span class="line"><span style="color:#61AFEF;">character-set-server</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 数据库字符集对应一些排序等规则，注意要和 character-set-server 对应</span></span>
<span class="line"><span style="color:#61AFEF;">collation-server</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> utf8mb4_general_ci</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设置 client 连接 mysql 时的字符集, 防止乱码</span></span>
<span class="line"><span style="color:#E06C75;">init_connect</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;SET NAMES utf8mb4&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 是否对 sql 语句大小写敏感，1: 不敏感</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#lower_case_table_names = 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行 sql 的模式，规定了 sql 的安全等级, 暂时屏蔽，my.cnf 文件中配置报错</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#sql_mode = STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 事务隔离级别，默认为可重复读，mysql 默认可重复读级别（此级别下可能参数很多间隙锁，影响性能）</span></span>
<span class="line"><span style="color:#61AFEF;">transaction_isolation</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> READ-COMMITTED</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># TIMESTAMP 如果没有显示声明 NOT NULL，允许NULL值</span></span>
<span class="line"><span style="color:#61AFEF;">explicit_defaults_for_timestamp</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> true</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 控制 mysqld 进程能使用的最大文件描述(FD)符数量。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 需要注意的是这个变量的值并不一定是你设定的值，mysqld 会在系统允许的情况下尽量获取更多的 FD 数量</span></span>
<span class="line"><span style="color:#61AFEF;">open_files_limit</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 65535</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 最大连接数</span></span>
<span class="line"><span style="color:#61AFEF;">max_connections</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 300</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 最大错误连接数</span></span>
<span class="line"><span style="color:#61AFEF;">max_connect_errors</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 600</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MySQL 暂时停止响应新请求之前的短时间内多少个请求可以被存在堆栈中</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 官方建议 back_log = 50 + (max_connections / 5), 封顶数为 65535, 默认值 = max_connections</span></span>
<span class="line"><span style="color:#61AFEF;">back_log</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 110</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 为所有线程打开的表的数量</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 例如，对于200个并发运行的连接，指定表缓存大小至少为 200 * N </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 其中N是您执行的任何查询中每个连接的最大表数 </span></span>
<span class="line"><span style="color:#61AFEF;">table_open_cache</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 600</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 可以存储在定义缓存中的表定义数量, MIN(400 + table_open_cache / 2, 2000)</span></span>
<span class="line"><span style="color:#61AFEF;">table_definition_cache</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 700</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 为了减少会话之间的争用，可以将 opentables 缓存划分为 table_open_cache/table_open_cache_instances个小缓存</span></span>
<span class="line"><span style="color:#61AFEF;">table_open_cache_instances</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 64</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 每个线程的堆栈大小 如果线程堆栈太小，则会限制执行复杂 SQL 语句</span></span>
<span class="line"><span style="color:#61AFEF;">thread_stack</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 512K</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 禁止外部系统锁</span></span>
<span class="line"><span style="color:#61AFEF;">external-locking</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> FALSE</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># SQL 数据包发送的大小，如果有 BLOB 对象建议修改成 1G</span></span>
<span class="line"><span style="color:#61AFEF;">max_allowed_packet</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 128M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># order by / group by 时用到, 建议先调整为4M，后期观察调整</span></span>
<span class="line"><span style="color:#61AFEF;">sort_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># inner left / right join 时用到, 建议先调整为4M，后期观察调整</span></span>
<span class="line"><span style="color:#61AFEF;">join_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果您的服务器每秒达到数百个连接，则通常应将 thread_cache_size 设置得足够高，以便大多数新连接使用缓存线程</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># default value = 8 + ( max_connections / 100) 上限为 100</span></span>
<span class="line"><span style="color:#61AFEF;">thread_cache_size</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 20</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MySQL 连接闲置超过一定时间后(单位：秒)将会被强行关闭</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># MySQL 默认的 wait_timeout 值为8个小时, interactive_timeout 参数需要同时配置才能生效</span></span>
<span class="line"><span style="color:#61AFEF;">interactive_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1800</span></span>
<span class="line"><span style="color:#61AFEF;">wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1800</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Metadata Lock最大时长（秒），一般用于控制 alter 操作的最大时长 sine mysql5.6</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 执行 DML 操作时除了增加innodb事务锁外还增加 Metadata Lock，其他 alter（DDL）session 将阻塞</span></span>
<span class="line"><span style="color:#61AFEF;">lock_wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3600</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 内部内存临时表的最大值。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 比如大数据量的 group by / order by 时可能用到临时表，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 超过了这个值将写入磁盘，系统IO压力增大</span></span>
<span class="line"><span style="color:#61AFEF;">tmp_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"><span style="color:#61AFEF;">max_heap_table_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### 慢 SQL 日志记录 #####################################</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 是否启用慢查询日志，1：启用，0：禁用  </span></span>
<span class="line"><span style="color:#61AFEF;">slow_query_log</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 记录系统时区</span></span>
<span class="line"><span style="color:#61AFEF;">log_timestamps</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> SYSTEM</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 指定慢查询日志文件的路径和名字</span></span>
<span class="line"><span style="color:#61AFEF;">slow_query_log_file</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> /usr/mysql-8.0.32/logs/slow.log</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 慢查询执行的秒数，必须达到此值可被记录</span></span>
<span class="line"><span style="color:#61AFEF;">long_query_time</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 5</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 将没有使用索引的语句记录到慢查询日志  </span></span>
<span class="line"><span style="color:#61AFEF;">log_queries_not_using_indexes</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 设定每分钟记录到日志的未使用索引的语句数目，超过这个数目后只记录语句数量和花费的总时间  </span></span>
<span class="line"><span style="color:#61AFEF;">log_throttle_queries_not_using_indexes</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 60</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对于查询扫描行数小于此参数的SQL，将不会记录到慢查询日志中</span></span>
<span class="line"><span style="color:#61AFEF;">min_examined_row_limit</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 5000</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 记录执行缓慢的管理SQL，如alter table,analyze table, check table, create index, drop index, optimize table, repair table等。  </span></span>
<span class="line"><span style="color:#61AFEF;">log_slow_admin_statements</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 作为从库时生效, 从库复制中如何有慢sql也将被记录</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对于 ROW 格式 binlog，不管执行时间有没有超过阈值，都不会写入到从库的慢查询日志</span></span>
<span class="line"><span style="color:#61AFEF;">log_slow_slave_statements</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### BinLog 设置 #####################################</span></span>
<span class="line"><span style="color:#61AFEF;">server-id</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 110</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 开启 bin log 功能</span></span>
<span class="line"><span style="color:#E06C75;">log-bin</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">mysql-bin</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># binlog 记录内容的方式，记录被操作的每一行</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_format</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> ROW</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对于 binlog_format = ROW 模式时，FULL 模式可以用于误操作后的 flashBack。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果设置为 MINIMAL，则会减少记录日志的内容，只记录受影响的列，但对于部分 update 无法 flashBack</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_row_image</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> FULL</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># bin log 日志保存的天数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果 binlog_expire_logs_seconds 选项也存在则 expire_logs_days 选项无效</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># expire_logs_days 已经被标注为过期参数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#expire_logs_days = 7</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_expire_logs_seconds</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1209600</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># master status and connection information 输出到表 mysql.slave_master_info 中</span></span>
<span class="line"><span style="color:#61AFEF;">master_info_repository</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> TABLE</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># the slave&#39;s position in the relay logs 输出到表 mysql.slave_relay_log_info 中</span></span>
<span class="line"><span style="color:#61AFEF;">relay_log_info_repository</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> TABLE</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 作为从库时生效, 想进行级联复制，则需要此参数</span></span>
<span class="line"><span style="color:#61AFEF;">log_slave_updates</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 作为从库时生效, 中继日志 relay-log 可以自我修复</span></span>
<span class="line"><span style="color:#61AFEF;">relay_log_recovery</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 作为从库时生效, 主从复制时忽略的错误</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果在备份过程中执行ddl操作，从机需要从主机的备份恢复时可能会异常，从而导致从机同步数据失败</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果对数据完整性要求不是很严格，那么这个选项确实可以减轻维护的成本</span></span>
<span class="line"><span style="color:#61AFEF;">slave_skip_errors</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> ddl_exist_errors</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### RedoLog 日志和 BinLog 日志的写磁盘频率设置 #####################################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># RedoLog 日志（用于增删改事务操作） +  binlog 日志（用于归档，主从复制）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 为什么会有两份日志呢？ </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 因为最开始 MySQL 没有 InnoDB 引擎,自带 MyISAM 引擎没有 crash-safe 能力，binlog 日志只用于归档</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># InnoDB 引擎是另一个公司以插件形式引入 MySQL 的，采用 RedoLog 日志来实现 crash-safe 能力</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># redo log 的写入（即事务操作）拆成两阶段提交（2PC）：prepare 阶段 和 commit 阶段</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># (事务步骤1) 执行 commit 命令，InnoDB redo log 写盘，然后告知 Mysql 执行器:[你可以写 binlog 了，且一并提交事务]，事务进入 prepare 状态</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># (事务步骤2) 如果前面 prepare 成功，Mysql 执行器生成 binlog 并且将 binlog 日志写盘</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># (事务步骤3) 如果 binlog 写盘成功，Mysql 执行器一并调用 InnoDB 引擎的提交事务接口，事务进入 commit 状态，操作完成，事务结束</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 参数设置成 1，每次事务都直接持久化到磁盘</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 参数设置成 0，mysqld 进程的崩溃会导致上一秒钟所有事务数据的丢失。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 参数设置成 2，只有在操作系统崩溃或者系统掉电的情况下，上一秒钟所有事务数据才可能丢失。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 即便都设置为1，服务崩溃或者服务器主机 crash，Mysql 也可能丢失但最多一个事务</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 控制 redolog 写磁盘频率，默认为1</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_log_at_trx_commit</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 控制 binlog 写磁盘频率</span></span>
<span class="line"><span style="color:#61AFEF;">sync_binlog</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一般数据库中没什么大的事务，设成 1~2M，默认 32kb</span></span>
<span class="line"><span style="color:#61AFEF;">binlog_cache_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># binlog 能够使用的最大 cache 内存大小</span></span>
<span class="line"><span style="color:#61AFEF;">max_binlog_cache_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 2G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 单个 binlog 文件大小 默认值是 1GB</span></span>
<span class="line"><span style="color:#61AFEF;">max_binlog_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 1G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 开启 GTID 复制模式</span></span>
<span class="line"><span style="color:#61AFEF;">gtid_mode</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> on</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 强制 gtid 一致性，开启后对于 create table ... select ...或 CREATE TEMPORARY TABLE 将不被支持</span></span>
<span class="line"><span style="color:#61AFEF;">enforce_gtid_consistency</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 解决部分无主键表导致的从库复制延迟问题</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 其基本思路是对于在一个 ROWS EVENT 中的所有前镜像收集起来，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 然后在一次扫描全表时，判断 HASH 中的每一条记录进行更新</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 该参数已经被标注为过期参数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#slave-rows-search-algorithms = &#39;INDEX_SCAN,HASH_SCAN&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># default value is CRC32</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#binlog_checksum = 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># default value is ON</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#relay-log-purge = 1</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#####################################  MyISAM 性能设置 #####################################</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对 MyISAM 表起作用，但是内部的临时磁盘表是 MyISAM 表，也要使用该值。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 可以使用检查状态值 created_tmp_disk_tables 得知详情</span></span>
<span class="line"><span style="color:#61AFEF;">key_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 15M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对 MyISAM 表起作用，但是内部的临时磁盘表是 MyISAM 表，也要使用该值，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 例如大表 order by、缓存嵌套查询、大容量插入分区。</span></span>
<span class="line"><span style="color:#61AFEF;">read_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 8M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对 MyISAM 表起作用 读取优化</span></span>
<span class="line"><span style="color:#61AFEF;">read_rnd_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 对 MyISAM 表起作用 插入优化</span></span>
<span class="line"><span style="color:#61AFEF;">bulk_insert_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 64M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">##################################### innodb 性能设置 #####################################</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Defines the maximum number of threads permitted inside of InnoDB. </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># A value of 0 (the default) is interpreted as infinite concurrency (no limit)</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_thread_concurrency</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一般设置物理存储的 60% ~ 70%</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 8G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 当缓冲池大小大于 1GB 时，将 innodb_buffer_pool_instances 设置为大于 1 的值，可以提高繁忙服务器的可伸缩性</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_instances</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 默认启用。指定在 MySQL 服务器启动时，InnoDB 缓冲池通过加载之前保存的相同页面自动预热。 通常与innodb_buffer_pool_dump_at_shutdown 结合使用</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_load_at_startup</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 默认启用。指定在 MySQL 服务器关闭时是否记录在 InnoDB 缓冲池中缓存的页面，以便在下次重新启动时缩短预热过程</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_buffer_pool_dump_at_shutdown</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 定义 InnoDB 系统表空间数据文件的名称、大小和属性</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#innodb_data_file_path = ibdata1:1G:autoextend</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># InnoDB 用于写入磁盘日志文件的缓冲区大小（以字节为单位）。默认值为 16MB</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 32M</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># InnoDB 日志文件组数量</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_files_in_group</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 3</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># InnoDB 日志文件组中每一个文件的大小</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_log_file_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 2G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 是否开启在线回收（收缩）undo log 日志文件，支持动态设置，默认开启</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_undo_log_truncate</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 当超过这个阀值（默认是1G），会触发 truncate 回收（收缩）动作，truncate 后空间缩小到 10M</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_max_undo_log_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The path where InnoDB creates undo tablespaces</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 没有配置则在数据文件目录下</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># innodb_undo_directory = /usr/mysql-8.0.32/undolog</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 用于设定创建的 undo 表空间的个数</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 已经弃用了，只能手动添加 undo 表空间</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># innodb_undo_tablespaces 变量已弃用，从 MySQL 8.0.14 开始不再可配置</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># innodb_undo_tablespaces = 95</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提高刷新脏页数量和合并插入数量，改善磁盘 I/O 处理能力</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 根据您的服务器 IOPS 能力适当调整</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一般配普通 SSD 盘的话，可以调整到 10000 - 20000</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 配置高端 PCIe SSD 卡的话，则可以调整的更高，比如 50000 - 80000</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_io_capacity</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4000</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_io_capacity_max</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8000</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 如果打开参数 innodb_flush_sync, checkpoint 时，flush 操作将由 page cleaner 线程来完成，此时 page cleaner 会忽略 io capacity 的限制，进入激烈刷脏</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_sync</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_neighbors</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 0</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># CPU 多核处理能力设置，假设 CPU 是 4 颗 8 核的，设置如下</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 读多，写少可以设成 2:6 的比例</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_write_io_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_read_io_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 8</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_purge_threads</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_page_cleaners</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_open_files</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 65535</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_max_dirty_pages_pct</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 50</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 该参数针对 unix、linux，window 上直接注释该参数.默认值为 NULL</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># O_DIRECT 减少操作系统级别 VFS 的缓存和 Innodb 本身的 buffer 缓存之间的冲突</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_flush_method</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> O_DIRECT</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#61AFEF;">innodb_lru_scan_depth</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 4000</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_checksum_algorithm</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> crc32</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 为了获取被锁定的资源最大等待时间，默认 50 秒，超过该时间会报如下错误:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># ERROR 1205 (HY000): Lock wait timeout exceeded; try restarting transaction</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_lock_wait_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 20</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 默认 OFF，如果事务因为加锁超时，会回滚上一条语句执行的操作。如果设置 ON，则整个事务都会回滚</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_rollback_on_timeout</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 强所有发生的死锁错误信息记录到 error.log 中，之前通过命令行只能查看最近一次死锁信息</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_print_all_deadlocks</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 在创建 InnoDB 索引时用于指定对数据排序的排序缓冲区的大小</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_sort_buffer_size</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 67108864</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 控制着在向有 auto_increment 列的表插入数据时，相关锁的行为，默认为 2</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 0：traditonal（每次都会产生表锁）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 1：consecutive（ mysql 的默认模式，会产生一个轻量锁，simple insert 会获得批量的锁，保证连续插入）</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 2：interleaved（不会锁表，来一个处理一个，并发最高）</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_autoinc_lock_mode</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 表示每个表都有自已独立的表空间</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_file_per_table</span><span style="color:#98C379;"> =</span><span style="color:#D19A66;"> 1</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 指定 Online DDL 执行期间产生临时日志文件的最大大小，单位字节，默认大小为 128MB。</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 日志文件记录的是表在 DDL 期间的数据插入、更新和删除信息(DML操作)，一旦日志文件超过该参数指定值时，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># DDL 执行就会失败并回滚所有未提交的当前 DML 操作，所以，当执行 DDL 期间有大量 DML 操作时可以提高该参数值，</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 但同时也会增加 DDL 执行完成时应用日志时锁定表的时间</span></span>
<span class="line"><span style="color:#61AFEF;">innodb_online_alter_log_max_size</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 4G</span></span>
<span class="line"><span style="color:#ABB2BF;"> </span></span>
<span class="line"><span style="color:#ABB2BF;">[mysqldump]</span></span>
<span class="line"><span style="color:#61AFEF;">quick</span></span>
<span class="line"><span style="color:#61AFEF;">max_allowed_packet</span><span style="color:#98C379;"> =</span><span style="color:#98C379;"> 128M</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br></div></div>`,26)]))}const m=n(e,[["render",o]]);export{u as __pageData,m as default};
