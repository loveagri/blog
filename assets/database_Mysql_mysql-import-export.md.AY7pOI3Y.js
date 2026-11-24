import{_ as n,c as a,o as l,ah as p}from"./chunks/framework.BrJYEL96.js";const m=JSON.parse('{"title":"MySQL导入导出详细教程","description":"","frontmatter":{},"headers":[],"relativePath":"database/Mysql/mysql-import-export.md","filePath":"database/Mysql/mysql-import-export.md","lastUpdated":1718246330000}'),e={name:"database/Mysql/mysql-import-export.md"};function o(t,s,c,r,i,b){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="mysql导入导出详细教程" tabindex="-1">MySQL导入导出详细教程 <a class="header-anchor" href="#mysql导入导出详细教程" aria-label="Permalink to &quot;MySQL导入导出详细教程&quot;">​</a></h1><h2 id="导出" tabindex="-1"><strong>导出</strong> <a class="header-anchor" href="#导出" aria-label="Permalink to &quot;**导出**&quot;">​</a></h2><p>在日常维护工作当中经常会需要对数据进行导出操作，而mysqldump是导出数据过程中使用非常频繁的一个工具。</p><p><strong>语法</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump </span><span style="color:#E06C75;">[OPTIONS]</span><span style="color:#C678DD;"> database</span><span style="color:#E06C75;"> [tables]</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump </span><span style="color:#E06C75;">[OPTIONS]</span><span style="color:#7F848E;font-style:italic;"> --databases [OPTIONS] DB1 [DB2 DB3...]</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump </span><span style="color:#E06C75;">[OPTIONS]</span><span style="color:#7F848E;font-style:italic;"> --all-databases [OPTIONS]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>导出所有数据库</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump -uroot -proot </span><span style="color:#7F848E;font-style:italic;">--all-databases &gt;/tmp/all.sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>导出db1、db2两个数据库的所有数据</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump -uroot -proot </span><span style="color:#7F848E;font-style:italic;">--databases db1 db2 &gt;/tmp/user.sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>导出db1中的a1、a2表</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump -uroot -proot </span><span style="color:#7F848E;font-style:italic;">--databases db1 --tables a1 a2  &gt;/tmp/db1.sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>条件导出，导出db1表a1中id=1的数据</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump -uroot -proot </span><span style="color:#7F848E;font-style:italic;">--databases db1 --tables a1 --where=&#39;id=1&#39;  &gt;/tmp/a1.sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>只导出表结构不导出数据，--no-data</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump -uroot -proot </span><span style="color:#7F848E;font-style:italic;">--no-data --databases db1 &gt;/tmp/db1.sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>跨服务器导出导入数据</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysqldump </span><span style="color:#7F848E;font-style:italic;">--host=h1 -uroot -proot --databases db1 |mysql --host=h2 -uroot -proot db2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>所有参数说明</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">--all-databases  , -A</span></span>
<span class="line"><span style="color:#ABB2BF;">导出全部数据库。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--all-tablespaces  , -Y</span></span>
<span class="line"><span style="color:#ABB2BF;">导出全部表空间。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --all-tablespaces</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-tablespaces  , -y</span></span>
<span class="line"><span style="color:#ABB2BF;">不导出任何表空间信息。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --no-tablespaces</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--add-drop-database</span></span>
<span class="line"><span style="color:#ABB2BF;">每个数据库创建之前添加drop数据库语句。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --add-drop-database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--add-drop-table</span></span>
<span class="line"><span style="color:#ABB2BF;">每个数据表创建之前添加drop数据表语句。(默认为打开状态，使用</span><span style="color:#7F848E;font-style:italic;">--skip-add-drop-table取消选项)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases  (默认添加drop语句)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases –skip-add-drop-table  (取消drop语句)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--add-locks</span></span>
<span class="line"><span style="color:#ABB2BF;">在每个表导出之前增加LOCK TABLES并且之后UNLOCK  </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;">。(默认为打开状态，使用</span><span style="color:#7F848E;font-style:italic;">--skip-add-locks取消选项)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases  (默认添加LOCK语句)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases –skip-add-locks   (取消LOCK语句)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--allow-keywords</span></span>
<span class="line"><span style="color:#ABB2BF;">允许创建是关键词的列名字。这由表名前缀于每个列名做到。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --allow-keywords</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--apply-slave-statements</span></span>
<span class="line"><span style="color:#ABB2BF;">在</span><span style="color:#98C379;">&#39;CHANGE MASTER&#39;</span><span style="color:#ABB2BF;">前添加</span><span style="color:#98C379;">&#39;STOP SLAVE&#39;</span><span style="color:#ABB2BF;">，并且在导出的最后添加</span><span style="color:#98C379;">&#39;START SLAVE&#39;</span><span style="color:#ABB2BF;">。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --apply-slave-statements</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--character-sets-dir</span></span>
<span class="line"><span style="color:#ABB2BF;">字符集文件的目录</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases  --character-sets-dir=/usr/local/mysql/share/mysql/charsets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--comments</span></span>
<span class="line"><span style="color:#ABB2BF;">附加注释信息。默认为打开，可以用</span><span style="color:#7F848E;font-style:italic;">--skip-comments取消</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases  (默认记录注释)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --skip-comments   (取消注释)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--compatible</span></span>
<span class="line"><span style="color:#ABB2BF;">导出的数据将和其它数据库或旧版本的MySQL 相兼容。值可以为ansi、mysql323、mysql40、postgresql、oracle、mssql、db2、maxdb、no_key_options、no_tables_options、no_field_options等，</span></span>
<span class="line"><span style="color:#ABB2BF;">要使用几个值，用逗号将它们隔开。它并不保证能完全兼容，而是尽量兼容。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --compatible=ansi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--compact</span></span>
<span class="line"><span style="color:#ABB2BF;">导出更少的输出信息(用于调试)。去掉注释和头尾等结构。可以使用选项：</span><span style="color:#7F848E;font-style:italic;">--skip-add-drop-table  --skip-add-locks --skip-comments --skip-disable-keys</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --compact</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--complete-insert,  -c</span></span>
<span class="line"><span style="color:#ABB2BF;">使用完整的insert语句(包含列名称)。这么做能提高插入效率，但是可能会受到max_allowed_packet参数的影响而导致插入失败。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --complete-insert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--compress, -C</span></span>
<span class="line"><span style="color:#ABB2BF;">在客户端和服务器之间启用压缩传递所有信息</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --compress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--create-options,  -a</span></span>
<span class="line"><span style="color:#ABB2BF;">在CREATE TABLE语句中包括所有MySQL特性选项。(默认为打开状态)</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--databases,  -B</span></span>
<span class="line"><span style="color:#ABB2BF;">导出几个数据库。参数后面所有名字参量都被看作数据库名。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--databases test mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--debug</span></span>
<span class="line"><span style="color:#ABB2BF;">输出debug信息，用于调试。默认值为：d:t,/tmp/</span><span style="color:#D19A66;">mysqldump</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">trace</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --debug</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --debug=” d:t,/tmp/debug.trace”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--debug-check</span></span>
<span class="line"><span style="color:#ABB2BF;">检查内存和打开文件使用说明并退出。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --debug-check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--debug-info</span></span>
<span class="line"><span style="color:#ABB2BF;">输出调试信息并退出</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --debug-info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--default-character-set</span></span>
<span class="line"><span style="color:#ABB2BF;">设置默认字符集，默认值为utf8</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --default-character-set=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--delayed-insert</span></span>
<span class="line"><span style="color:#ABB2BF;">采用延时插入方式（</span><span style="color:#C678DD;">INSERT</span><span style="color:#ABB2BF;"> DELAYED）导出数据</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --delayed-insert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--delete-master-logs</span></span>
<span class="line"><span style="color:#ABB2BF;">master备份后删除日志. 这个参数将自动激活</span><span style="color:#7F848E;font-style:italic;">--master-data。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --delete-master-logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--disable-keys</span></span>
<span class="line"><span style="color:#ABB2BF;">对于每个表，用</span><span style="color:#7F848E;font-style:italic;">/*!40000 ALTER TABLE tbl_name DISABLE KEYS */</span><span style="color:#ABB2BF;">;和</span><span style="color:#7F848E;font-style:italic;">/*!40000 ALTER TABLE tbl_name ENABLE KEYS */</span><span style="color:#ABB2BF;">;语句引用INSERT语句。这样可以更快地导入dump出来的文件，因为它是在插入所有行后创建索引的。该选项只适合MyISAM表，默认为打开状态。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--dump-slave</span></span>
<span class="line"><span style="color:#ABB2BF;">该选项将主的binlog位置和文件名追加到导出数据的文件中(show slave </span><span style="color:#C678DD;">status</span><span style="color:#ABB2BF;">)。设置为1时，将会以CHANGE MASTER命令输出到数据文件；设置为2时，会在change前加上注释。该选项将会打开</span><span style="color:#7F848E;font-style:italic;">--lock-all-tables，除非--single-transaction被指定。该选项会自动关闭--lock-tables选项。默认值为0。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --dump-slave=1</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --dump-slave=2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--master-data</span></span>
<span class="line"><span style="color:#ABB2BF;">该选项将当前服务器的binlog的位置和文件名追加到输出文件中(show </span><span style="color:#C678DD;">master</span><span style="color:#C678DD;"> status</span><span style="color:#ABB2BF;">)。如果为1，将会输出CHANGE </span><span style="color:#C678DD;">MASTER</span><span style="color:#ABB2BF;"> 命令；如果为2，输出的CHANGE  MASTER命令前添加注释信息。该选项将打开</span><span style="color:#7F848E;font-style:italic;">--lock-all-tables 选项，除非--single-transaction也被指定（在这种情况下，全局读锁在开始导出时获得很短的时间；其他内容参考下面的--single-transaction选项）。该选项自动关闭--lock-tables选项。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --master-data=1;</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --master-data=2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--events, -E</span></span>
<span class="line"><span style="color:#ABB2BF;">导出事件。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --events</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--extended-insert,  -e</span></span>
<span class="line"><span style="color:#ABB2BF;">使用具有多个VALUES列的INSERT语法。这样使导出文件更小，并加速导入时的速度。默认为打开状态，使用</span><span style="color:#7F848E;font-style:italic;">--skip-extended-insert取消选项。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases--skip-extended-insert   (取消选项)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--fields-terminated-by</span></span>
<span class="line"><span style="color:#ABB2BF;">导出文件中忽略给定字段。与</span><span style="color:#7F848E;font-style:italic;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p test test </span><span style="color:#7F848E;font-style:italic;">--tab=”/home/mysql” --fields-terminated-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--fields-enclosed-by</span></span>
<span class="line"><span style="color:#ABB2BF;">输出文件中的各个字段用给定字符包裹。与</span><span style="color:#7F848E;font-style:italic;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p test test </span><span style="color:#7F848E;font-style:italic;">--tab=”/home/mysql” --fields-enclosed-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--fields-optionally-enclosed-by</span></span>
<span class="line"><span style="color:#ABB2BF;">输出文件中的各个字段用给定字符选择性包裹。与</span><span style="color:#7F848E;font-style:italic;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p test test </span><span style="color:#7F848E;font-style:italic;">--tab=”/home/mysql”  --fields-enclosed-by=”#” --fields-optionally-enclosed-by  =”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--fields-escaped-by</span></span>
<span class="line"><span style="color:#ABB2BF;">输出文件中的各个字段忽略给定字符。与</span><span style="color:#7F848E;font-style:italic;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p mysql user </span><span style="color:#7F848E;font-style:italic;">--tab=”/home/mysql” --fields-escaped-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--flush-logs</span></span>
<span class="line"><span style="color:#ABB2BF;">开始导出之前刷新日志。</span></span>
<span class="line"><span style="color:#ABB2BF;">请注意：假如一次导出多个数据库(使用选项</span><span style="color:#7F848E;font-style:italic;">--databases或者--all-databases)，将会逐个数据库刷新日志。除使用--lock-all-tables或者--master-data外。在这种情况下，日志将会被刷新一次，相应的所以表同时被锁定。因此，如果打算同时导出和刷新日志应该使用--lock-all-tables 或者--master-data 和--flush-logs。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --flush-logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--flush-privileges</span></span>
<span class="line"><span style="color:#ABB2BF;">在导出mysql数据库之后，发出一条FLUSH  PRIVILEGES 语句。为了正确恢复，该选项应该用于导出mysql数据库和依赖mysql数据库数据的任何时候。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --flush-privileges</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--force</span></span>
<span class="line"><span style="color:#ABB2BF;">在导出过程中忽略出现的SQL错误。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--help</span></span>
<span class="line"><span style="color:#ABB2BF;">显示帮助信息并退出。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  </span><span style="color:#7F848E;font-style:italic;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--hex-blob</span></span>
<span class="line"><span style="color:#ABB2BF;">使用十六进制格式导出二进制字符串字段。如果有二进制数据就必须使用该选项。影响到的字段类型有BINARY、</span><span style="color:#C678DD;">VARBINARY</span><span style="color:#ABB2BF;">、BLOB。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--all-databases --hex-blob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--host, -h</span></span>
<span class="line"><span style="color:#ABB2BF;">需要导出的主机信息</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--ignore-table</span></span>
<span class="line"><span style="color:#ABB2BF;">不导出指定表。指定忽略多个表时，需要重复多次，每次一个表。每个表必须同时指定数据库和表名。例如：</span><span style="color:#7F848E;font-style:italic;">--ignore-table=database.table1 --ignore-table=database.table2 ……</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --ignore-table=mysql.user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--include-master-host-port</span></span>
<span class="line"><span style="color:#ABB2BF;">在</span><span style="color:#7F848E;font-style:italic;">--dump-slave产生的&#39;CHANGE  MASTER TO..&#39;语句中增加&#39;MASTER_HOST=&lt;host&gt;，MASTER_PORT=&lt;port&gt;&#39;  </span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --include-master-host-port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--insert-ignore</span></span>
<span class="line"><span style="color:#ABB2BF;">在插入行时使用INSERT IGNORE语句.</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --insert-ignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--lines-terminated-by</span></span>
<span class="line"><span style="color:#ABB2BF;">输出文件的每行用给定字符串划分。与</span><span style="color:#7F848E;font-style:italic;">--tab选项一起使用，不能用于--databases和--all-databases选项。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost test test --tab=”/tmp/mysql”  --lines-terminated-by=”##”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--lock-all-tables,  -x</span></span>
<span class="line"><span style="color:#ABB2BF;">提交请求锁定所有数据库中的所有表，以保证数据的一致性。这是一个全局读锁，并且自动关闭</span><span style="color:#7F848E;font-style:italic;">--single-transaction 和--lock-tables 选项。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --lock-all-tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--lock-tables,  -l</span></span>
<span class="line"><span style="color:#ABB2BF;">开始导出前，锁定所有表。用READ  LOCAL锁定表以允许MyISAM表并行插入。对于支持事务的表例如InnoDB和BDB，</span><span style="color:#7F848E;font-style:italic;">--single-transaction是一个更好的选择，因为它根本不需要锁定表。</span></span>
<span class="line"><span style="color:#ABB2BF;">请注意当导出多个数据库时，</span><span style="color:#7F848E;font-style:italic;">--lock-tables分别为每个数据库锁定表。因此，该选项不能保证导出文件中的表在数据库之间的逻辑一致性。不同数据库表的导出状态可以完全不同。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --lock-tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--log-error</span></span>
<span class="line"><span style="color:#ABB2BF;">附加警告和错误信息到给定文件</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases  --log-error=/tmp/mysqldump_error_log.err</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--max_allowed_packet</span></span>
<span class="line"><span style="color:#ABB2BF;">服务器发送和接受的最大包长度。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --max_allowed_packet=10240</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--net_buffer_length</span></span>
<span class="line"><span style="color:#C678DD;">TCP</span><span style="color:#ABB2BF;">/IP和socket连接的缓存大小。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --net_buffer_length=1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-autocommit</span></span>
<span class="line"><span style="color:#ABB2BF;">使用autocommit/</span><span style="color:#C678DD;">commit</span><span style="color:#ABB2BF;"> 语句包裹表。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --no-autocommit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-create-db,  -n</span></span>
<span class="line"><span style="color:#ABB2BF;">只导出数据，而不添加CREATE </span><span style="color:#C678DD;">DATABASE</span><span style="color:#ABB2BF;"> 语句。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --no-create-db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-create-info,  -t</span></span>
<span class="line"><span style="color:#ABB2BF;">只导出数据，而不添加CREATE </span><span style="color:#C678DD;">TABLE</span><span style="color:#ABB2BF;"> 语句。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --no-create-info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-data, -d</span></span>
<span class="line"><span style="color:#ABB2BF;">不导出任何数据，只导出数据库表结构。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --no-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--no-set-names,  -N</span></span>
<span class="line"><span style="color:#ABB2BF;">等同于</span><span style="color:#7F848E;font-style:italic;">--skip-set-charset</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --no-set-names</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--opt</span></span>
<span class="line"><span style="color:#ABB2BF;">等同于</span><span style="color:#7F848E;font-style:italic;">--add-drop-table,  --add-locks, --create-options, --quick, --extended-insert, --lock-tables,  --set-charset, --disable-keys 该选项默认开启,  可以用--skip-opt禁用.</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --opt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--order-by-primary</span></span>
<span class="line"><span style="color:#ABB2BF;">如果存在主键，或者第一个唯一键，对每个表的记录进行排序。在导出MyISAM表到InnoDB表时有效，但会使得导出工作花费很长时间。 </span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --order-by-primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--password, -p</span></span>
<span class="line"><span style="color:#ABB2BF;">连接数据库密码</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--pipe(windows系统可用)</span></span>
<span class="line"><span style="color:#ABB2BF;">使用命名管道连接mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --pipe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--port, -P</span></span>
<span class="line"><span style="color:#ABB2BF;">连接数据库端口号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--protocol</span></span>
<span class="line"><span style="color:#ABB2BF;">使用的连接协议，包括：</span><span style="color:#C678DD;">tcp</span><span style="color:#ABB2BF;">, socket, pipe, memory.</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --protocol=tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--quick, -q</span></span>
<span class="line"><span style="color:#ABB2BF;">不缓冲查询，直接导出到标准输出。默认为打开状态，使用</span><span style="color:#7F848E;font-style:italic;">--skip-quick取消该选项。</span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases </span></span>
<span class="line"><span style="color:#ABB2BF;">mysqldump  -uroot -p </span><span style="color:#7F848E;font-style:italic;">--host=localhost --all-databases --skip-quick</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">--quote-names,-Q</span></span>
<span class="line"><span style="color:#ABB2BF;">使用（</span><span style="color:#98C379;">\`）引起表和列名。默认为打开状态，使用--skip-quote-names取消该选项。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --skip-quote-names</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--replace</span></span>
<span class="line"><span style="color:#98C379;">使用REPLACE INTO 取代INSERT INTO.</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --replace</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--result-file,  -r</span></span>
<span class="line"><span style="color:#98C379;">直接输出到指定文件中。该选项应该用在使用回车换行对（</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">r</span><span style="color:#56B6C2;">\\\\</span><span style="color:#98C379;">n）换行的系统上（例如：DOS，Windows）。该选项确保只有一行被使用。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --result-file=/tmp/mysqldump_result_file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--routines, -R</span></span>
<span class="line"><span style="color:#98C379;">导出存储过程以及自定义函数。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --routines</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--set-charset</span></span>
<span class="line"><span style="color:#98C379;">添加&#39;SET NAMES  default_character_set&#39;到输出文件。默认为打开状态，使用--skip-set-charset关闭选项。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases </span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --skip-set-charset</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--single-transaction</span></span>
<span class="line"><span style="color:#98C379;">该选项在导出数据之前提交一个BEGIN SQL语句，BEGIN 不会阻塞任何应用程序且能保证导出时数据库的一致性状态。它只适用于多版本存储引擎，仅InnoDB。本选项和--lock-tables 选项是互斥的，因为LOCK  TABLES 会使任何挂起的事务隐含提交。要想导出大表的话，应结合使用--quick 选项。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --single-transaction</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--dump-date</span></span>
<span class="line"><span style="color:#98C379;">将导出时间添加到输出文件中。默认为打开状态，使用--skip-dump-date关闭选项。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --skip-dump-date</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--skip-opt</span></span>
<span class="line"><span style="color:#98C379;">禁用–opt选项.</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --skip-opt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--socket,-S</span></span>
<span class="line"><span style="color:#98C379;">指定连接mysql的socket文件位置，默认路径/tmp/mysql.sock</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --socket=/tmp/mysqld.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--tab,-T</span></span>
<span class="line"><span style="color:#98C379;">为每个表在给定路径创建tab分割的文本文件。注意：仅仅用于mysqldump和mysqld服务器运行在相同机器上。注意使用--tab不能指定--databases参数</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost test test --tab=&quot;/home/mysql&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--tables</span></span>
<span class="line"><span style="color:#98C379;">覆盖--databases (-B)参数，指定需要导出的表名，在后面的版本会使用table取代tables。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --databases test --tables test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--triggers</span></span>
<span class="line"><span style="color:#98C379;">导出触发器。该选项默认启用，用--skip-triggers禁用它。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --triggers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--tz-utc</span></span>
<span class="line"><span style="color:#98C379;">在导出顶部设置时区TIME_ZONE=&#39;+00:00&#39; ，以保证在不同时区导出的TIMESTAMP 数据或者数据被移动其他时区时的正确性。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --tz-utc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--user, -u</span></span>
<span class="line"><span style="color:#98C379;">指定连接的用户名。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--verbose, --v</span></span>
<span class="line"><span style="color:#98C379;">输出多种平台信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--version, -V</span></span>
<span class="line"><span style="color:#98C379;">输出mysqldump版本信息并退出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--where, -w</span></span>
<span class="line"><span style="color:#98C379;">只转储给定的WHERE条件选择的记录。请注意如果条件包含命令解释符专用空格或字符，一定要将条件引用起来。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --where=” user=’root’”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--xml, -X</span></span>
<span class="line"><span style="color:#98C379;">导出XML格式.</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--plugin_dir</span></span>
<span class="line"><span style="color:#98C379;">客户端插件的目录，用于兼容不同的插件版本。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --plugin_dir=”/usr/local/lib/plugin”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#98C379;">--default_auth</span></span>
<span class="line"><span style="color:#98C379;">客户端插件默认使用权限。</span></span>
<span class="line"><span style="color:#98C379;">mysqldump  -uroot -p --host=localhost --all-databases --default-auth=”/usr/local/lib/plugin/&lt;PLUGIN&gt;”</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br></div></div><h2 id="导入" tabindex="-1"><strong>导入</strong> <a class="header-anchor" href="#导入" aria-label="Permalink to &quot;**导入**&quot;">​</a></h2><p><strong>source命令导入</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">mysql</span><span style="color:#56B6C2;">&gt;</span><span style="color:#C678DD;">use</span><span style="color:#ABB2BF;"> db1</span></span>
<span class="line"><span style="color:#ABB2BF;">mysql</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;">source </span><span style="color:#D19A66;">db1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>mysql命令行导出</strong></p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">#mysql -uroot -p db1 </span><span style="color:#56B6C2;">&lt;</span><span style="color:#D19A66;"> db1</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="导入去掉指定表" tabindex="-1"><strong>导入去掉指定表</strong> <a class="header-anchor" href="#导入去掉指定表" aria-label="Permalink to &quot;**导入去掉指定表**&quot;">​</a></h2><p>当导出的SQL脚本文件中存在需要跳过的表数据时，可以在不重新导出的情况下，在sed命令对原脚本文件进行处理，可得到一个更小的导入脚本</p><div class="language-sql line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">sed </span><span style="color:#98C379;">&#39;/INSERT INTO \`TABLE1_TO_SKIP\`/d&#39;</span><span style="color:#D19A66;"> DBdump</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span><span style="color:#ABB2BF;"> | \\</span></span>
<span class="line"><span style="color:#ABB2BF;">sed </span><span style="color:#98C379;">&#39;/INSERT INTO \`TABLE2_TO_SKIP\`/d&#39;</span><span style="color:#ABB2BF;"> | \\</span></span>
<span class="line"><span style="color:#ABB2BF;">sed </span><span style="color:#98C379;">&#39;/INSERT INTO \`TABLE3_TO_SKIP\`/d&#39;</span><span style="color:#56B6C2;"> &gt;</span><span style="color:#D19A66;"> reduced</span><span style="color:#ABB2BF;">.</span><span style="color:#D19A66;">sql</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,27)]))}const u=n(e,[["render",o]]);export{m as __pageData,u as default};
