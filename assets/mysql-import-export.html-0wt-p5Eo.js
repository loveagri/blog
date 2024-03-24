import{_ as s,o as n,c as a,b as l}from"./app-lZ8g2une.js";const e={},p=l(`<h1 id="mysql导入导出详细教程" tabindex="-1"><a class="header-anchor" href="#mysql导入导出详细教程"><span>MySQL导入导出详细教程</span></a></h1><h2 id="导出" tabindex="-1"><a class="header-anchor" href="#导出"><span><strong>导出</strong></span></a></h2><p>在日常维护工作当中经常会需要对数据进行导出操作，而mysqldump是导出数据过程中使用非常频繁的一个工具。</p><p><strong>语法</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump [OPTIONS] </span><span style="color:#569CD6;">database</span><span style="color:#D4D4D4;"> [tables]</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump [OPTIONS] </span><span style="color:#6A9955;">--databases [OPTIONS] DB1 [DB2 DB3...]</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump [OPTIONS] </span><span style="color:#6A9955;">--all-databases [OPTIONS]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>导出所有数据库</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump -uroot -proot </span><span style="color:#6A9955;">--all-databases &gt;/tmp/all.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>导出db1、db2两个数据库的所有数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump -uroot -proot </span><span style="color:#6A9955;">--databases db1 db2 &gt;/tmp/user.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>导出db1中的a1、a2表</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump -uroot -proot </span><span style="color:#6A9955;">--databases db1 --tables a1 a2  &gt;/tmp/db1.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>条件导出，导出db1表a1中id=1的数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump -uroot -proot </span><span style="color:#6A9955;">--databases db1 --tables a1 --where=&#39;id=1&#39;  &gt;/tmp/a1.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>只导出表结构不导出数据，--no-data</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump -uroot -proot </span><span style="color:#6A9955;">--no-data --databases db1 &gt;/tmp/db1.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>跨服务器导出导入数据</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysqldump </span><span style="color:#6A9955;">--host=h1 -uroot -proot --databases db1 |mysql --host=h2 -uroot -proot db2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>所有参数说明</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">--all-databases  , -A</span></span>
<span class="line"><span style="color:#D4D4D4;">导出全部数据库。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--all-tablespaces  , -Y</span></span>
<span class="line"><span style="color:#D4D4D4;">导出全部表空间。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --all-tablespaces</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-tablespaces  , -y</span></span>
<span class="line"><span style="color:#D4D4D4;">不导出任何表空间信息。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --no-tablespaces</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--add-drop-database</span></span>
<span class="line"><span style="color:#D4D4D4;">每个数据库创建之前添加drop数据库语句。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --add-drop-database</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--add-drop-table</span></span>
<span class="line"><span style="color:#D4D4D4;">每个数据表创建之前添加drop数据表语句。(默认为打开状态，使用</span><span style="color:#6A9955;">--skip-add-drop-table取消选项)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases  (默认添加drop语句)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases –skip-add-drop-table  (取消drop语句)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--add-locks</span></span>
<span class="line"><span style="color:#D4D4D4;">在每个表导出之前增加LOCK TABLES并且之后UNLOCK  </span><span style="color:#569CD6;">TABLE</span><span style="color:#D4D4D4;">。(默认为打开状态，使用</span><span style="color:#6A9955;">--skip-add-locks取消选项)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases  (默认添加LOCK语句)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases –skip-add-locks   (取消LOCK语句)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--allow-keywords</span></span>
<span class="line"><span style="color:#D4D4D4;">允许创建是关键词的列名字。这由表名前缀于每个列名做到。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --allow-keywords</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--apply-slave-statements</span></span>
<span class="line"><span style="color:#D4D4D4;">在</span><span style="color:#CE9178;">&#39;CHANGE MASTER&#39;</span><span style="color:#D4D4D4;">前添加</span><span style="color:#CE9178;">&#39;STOP SLAVE&#39;</span><span style="color:#D4D4D4;">，并且在导出的最后添加</span><span style="color:#CE9178;">&#39;START SLAVE&#39;</span><span style="color:#D4D4D4;">。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --apply-slave-statements</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--character-sets-dir</span></span>
<span class="line"><span style="color:#D4D4D4;">字符集文件的目录</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases  --character-sets-dir=/usr/local/mysql/share/mysql/charsets</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--comments</span></span>
<span class="line"><span style="color:#D4D4D4;">附加注释信息。默认为打开，可以用</span><span style="color:#6A9955;">--skip-comments取消</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases  (默认记录注释)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --skip-comments   (取消注释)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--compatible</span></span>
<span class="line"><span style="color:#D4D4D4;">导出的数据将和其它数据库或旧版本的MySQL 相兼容。值可以为ansi、mysql323、mysql40、postgresql、oracle、mssql、db2、maxdb、no_key_options、no_tables_options、no_field_options等，</span></span>
<span class="line"><span style="color:#D4D4D4;">要使用几个值，用逗号将它们隔开。它并不保证能完全兼容，而是尽量兼容。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --compatible=ansi</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--compact</span></span>
<span class="line"><span style="color:#D4D4D4;">导出更少的输出信息(用于调试)。去掉注释和头尾等结构。可以使用选项：</span><span style="color:#6A9955;">--skip-add-drop-table  --skip-add-locks --skip-comments --skip-disable-keys</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --compact</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--complete-insert,  -c</span></span>
<span class="line"><span style="color:#D4D4D4;">使用完整的insert语句(包含列名称)。这么做能提高插入效率，但是可能会受到max_allowed_packet参数的影响而导致插入失败。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --complete-insert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--compress, -C</span></span>
<span class="line"><span style="color:#D4D4D4;">在客户端和服务器之间启用压缩传递所有信息</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --compress</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--create-options,  -a</span></span>
<span class="line"><span style="color:#D4D4D4;">在CREATE TABLE语句中包括所有MySQL特性选项。(默认为打开状态)</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--databases,  -B</span></span>
<span class="line"><span style="color:#D4D4D4;">导出几个数据库。参数后面所有名字参量都被看作数据库名。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--databases test mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--debug</span></span>
<span class="line"><span style="color:#D4D4D4;">输出debug信息，用于调试。默认值为：d:t,/tmp/mysqldump.trace</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --debug</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --debug=” d:t,/tmp/debug.trace”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--debug-check</span></span>
<span class="line"><span style="color:#D4D4D4;">检查内存和打开文件使用说明并退出。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --debug-check</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--debug-info</span></span>
<span class="line"><span style="color:#D4D4D4;">输出调试信息并退出</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --debug-info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--default-character-set</span></span>
<span class="line"><span style="color:#D4D4D4;">设置默认字符集，默认值为utf8</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --default-character-set=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--delayed-insert</span></span>
<span class="line"><span style="color:#D4D4D4;">采用延时插入方式（</span><span style="color:#569CD6;">INSERT</span><span style="color:#D4D4D4;"> DELAYED）导出数据</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --delayed-insert</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--delete-master-logs</span></span>
<span class="line"><span style="color:#D4D4D4;">master备份后删除日志. 这个参数将自动激活</span><span style="color:#6A9955;">--master-data。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --delete-master-logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--disable-keys</span></span>
<span class="line"><span style="color:#D4D4D4;">对于每个表，用</span><span style="color:#6A9955;">/*!40000 ALTER TABLE tbl_name DISABLE KEYS */</span><span style="color:#D4D4D4;">;和</span><span style="color:#6A9955;">/*!40000 ALTER TABLE tbl_name ENABLE KEYS */</span><span style="color:#D4D4D4;">;语句引用INSERT语句。这样可以更快地导入dump出来的文件，因为它是在插入所有行后创建索引的。该选项只适合MyISAM表，默认为打开状态。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--dump-slave</span></span>
<span class="line"><span style="color:#D4D4D4;">该选项将主的binlog位置和文件名追加到导出数据的文件中(show slave </span><span style="color:#569CD6;">status</span><span style="color:#D4D4D4;">)。设置为1时，将会以CHANGE MASTER命令输出到数据文件；设置为2时，会在change前加上注释。该选项将会打开</span><span style="color:#6A9955;">--lock-all-tables，除非--single-transaction被指定。该选项会自动关闭--lock-tables选项。默认值为0。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --dump-slave=1</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --dump-slave=2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--master-data</span></span>
<span class="line"><span style="color:#D4D4D4;">该选项将当前服务器的binlog的位置和文件名追加到输出文件中(show </span><span style="color:#569CD6;">master</span><span style="color:#569CD6;"> status</span><span style="color:#D4D4D4;">)。如果为1，将会输出CHANGE </span><span style="color:#569CD6;">MASTER</span><span style="color:#D4D4D4;"> 命令；如果为2，输出的CHANGE  MASTER命令前添加注释信息。该选项将打开</span><span style="color:#6A9955;">--lock-all-tables 选项，除非--single-transaction也被指定（在这种情况下，全局读锁在开始导出时获得很短的时间；其他内容参考下面的--single-transaction选项）。该选项自动关闭--lock-tables选项。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --master-data=1;</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --master-data=2;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--events, -E</span></span>
<span class="line"><span style="color:#D4D4D4;">导出事件。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --events</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--extended-insert,  -e</span></span>
<span class="line"><span style="color:#D4D4D4;">使用具有多个VALUES列的INSERT语法。这样使导出文件更小，并加速导入时的速度。默认为打开状态，使用</span><span style="color:#6A9955;">--skip-extended-insert取消选项。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases--skip-extended-insert   (取消选项)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--fields-terminated-by</span></span>
<span class="line"><span style="color:#D4D4D4;">导出文件中忽略给定字段。与</span><span style="color:#6A9955;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p test test </span><span style="color:#6A9955;">--tab=”/home/mysql” --fields-terminated-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--fields-enclosed-by</span></span>
<span class="line"><span style="color:#D4D4D4;">输出文件中的各个字段用给定字符包裹。与</span><span style="color:#6A9955;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p test test </span><span style="color:#6A9955;">--tab=”/home/mysql” --fields-enclosed-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--fields-optionally-enclosed-by</span></span>
<span class="line"><span style="color:#D4D4D4;">输出文件中的各个字段用给定字符选择性包裹。与</span><span style="color:#6A9955;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p test test </span><span style="color:#6A9955;">--tab=”/home/mysql”  --fields-enclosed-by=”#” --fields-optionally-enclosed-by  =”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--fields-escaped-by</span></span>
<span class="line"><span style="color:#D4D4D4;">输出文件中的各个字段忽略给定字符。与</span><span style="color:#6A9955;">--tab选项一起使用，不能用于--databases和--all-databases选项</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p mysql user </span><span style="color:#6A9955;">--tab=”/home/mysql” --fields-escaped-by=”#”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--flush-logs</span></span>
<span class="line"><span style="color:#D4D4D4;">开始导出之前刷新日志。</span></span>
<span class="line"><span style="color:#D4D4D4;">请注意：假如一次导出多个数据库(使用选项</span><span style="color:#6A9955;">--databases或者--all-databases)，将会逐个数据库刷新日志。除使用--lock-all-tables或者--master-data外。在这种情况下，日志将会被刷新一次，相应的所以表同时被锁定。因此，如果打算同时导出和刷新日志应该使用--lock-all-tables 或者--master-data 和--flush-logs。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --flush-logs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--flush-privileges</span></span>
<span class="line"><span style="color:#D4D4D4;">在导出mysql数据库之后，发出一条FLUSH  PRIVILEGES 语句。为了正确恢复，该选项应该用于导出mysql数据库和依赖mysql数据库数据的任何时候。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --flush-privileges</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--force</span></span>
<span class="line"><span style="color:#D4D4D4;">在导出过程中忽略出现的SQL错误。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --force</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--help</span></span>
<span class="line"><span style="color:#D4D4D4;">显示帮助信息并退出。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  </span><span style="color:#6A9955;">--help</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--hex-blob</span></span>
<span class="line"><span style="color:#D4D4D4;">使用十六进制格式导出二进制字符串字段。如果有二进制数据就必须使用该选项。影响到的字段类型有BINARY、</span><span style="color:#569CD6;">VARBINARY</span><span style="color:#D4D4D4;">、BLOB。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--all-databases --hex-blob</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--host, -h</span></span>
<span class="line"><span style="color:#D4D4D4;">需要导出的主机信息</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--ignore-table</span></span>
<span class="line"><span style="color:#D4D4D4;">不导出指定表。指定忽略多个表时，需要重复多次，每次一个表。每个表必须同时指定数据库和表名。例如：</span><span style="color:#6A9955;">--ignore-table=database.table1 --ignore-table=database.table2 ……</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --ignore-table=mysql.user</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--include-master-host-port</span></span>
<span class="line"><span style="color:#D4D4D4;">在</span><span style="color:#6A9955;">--dump-slave产生的&#39;CHANGE  MASTER TO..&#39;语句中增加&#39;MASTER_HOST=&lt;host&gt;，MASTER_PORT=&lt;port&gt;&#39;  </span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --include-master-host-port</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--insert-ignore</span></span>
<span class="line"><span style="color:#D4D4D4;">在插入行时使用INSERT IGNORE语句.</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --insert-ignore</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--lines-terminated-by</span></span>
<span class="line"><span style="color:#D4D4D4;">输出文件的每行用给定字符串划分。与</span><span style="color:#6A9955;">--tab选项一起使用，不能用于--databases和--all-databases选项。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost test test --tab=”/tmp/mysql”  --lines-terminated-by=”##”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--lock-all-tables,  -x</span></span>
<span class="line"><span style="color:#D4D4D4;">提交请求锁定所有数据库中的所有表，以保证数据的一致性。这是一个全局读锁，并且自动关闭</span><span style="color:#6A9955;">--single-transaction 和--lock-tables 选项。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --lock-all-tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--lock-tables,  -l</span></span>
<span class="line"><span style="color:#D4D4D4;">开始导出前，锁定所有表。用READ  LOCAL锁定表以允许MyISAM表并行插入。对于支持事务的表例如InnoDB和BDB，</span><span style="color:#6A9955;">--single-transaction是一个更好的选择，因为它根本不需要锁定表。</span></span>
<span class="line"><span style="color:#D4D4D4;">请注意当导出多个数据库时，</span><span style="color:#6A9955;">--lock-tables分别为每个数据库锁定表。因此，该选项不能保证导出文件中的表在数据库之间的逻辑一致性。不同数据库表的导出状态可以完全不同。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --lock-tables</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--log-error</span></span>
<span class="line"><span style="color:#D4D4D4;">附加警告和错误信息到给定文件</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases  --log-error=/tmp/mysqldump_error_log.err</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--max_allowed_packet</span></span>
<span class="line"><span style="color:#D4D4D4;">服务器发送和接受的最大包长度。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --max_allowed_packet=10240</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--net_buffer_length</span></span>
<span class="line"><span style="color:#569CD6;">TCP</span><span style="color:#D4D4D4;">/IP和socket连接的缓存大小。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --net_buffer_length=1024</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-autocommit</span></span>
<span class="line"><span style="color:#D4D4D4;">使用autocommit/</span><span style="color:#569CD6;">commit</span><span style="color:#D4D4D4;"> 语句包裹表。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --no-autocommit</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-create-db,  -n</span></span>
<span class="line"><span style="color:#D4D4D4;">只导出数据，而不添加CREATE </span><span style="color:#569CD6;">DATABASE</span><span style="color:#D4D4D4;"> 语句。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --no-create-db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-create-info,  -t</span></span>
<span class="line"><span style="color:#D4D4D4;">只导出数据，而不添加CREATE </span><span style="color:#569CD6;">TABLE</span><span style="color:#D4D4D4;"> 语句。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --no-create-info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-data, -d</span></span>
<span class="line"><span style="color:#D4D4D4;">不导出任何数据，只导出数据库表结构。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --no-data</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--no-set-names,  -N</span></span>
<span class="line"><span style="color:#D4D4D4;">等同于</span><span style="color:#6A9955;">--skip-set-charset</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --no-set-names</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--opt</span></span>
<span class="line"><span style="color:#D4D4D4;">等同于</span><span style="color:#6A9955;">--add-drop-table,  --add-locks, --create-options, --quick, --extended-insert, --lock-tables,  --set-charset, --disable-keys 该选项默认开启,  可以用--skip-opt禁用.</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --opt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--order-by-primary</span></span>
<span class="line"><span style="color:#D4D4D4;">如果存在主键，或者第一个唯一键，对每个表的记录进行排序。在导出MyISAM表到InnoDB表时有效，但会使得导出工作花费很长时间。 </span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --order-by-primary</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--password, -p</span></span>
<span class="line"><span style="color:#D4D4D4;">连接数据库密码</span></span>
<span class="line"><span style="color:#6A9955;">--pipe(windows系统可用)</span></span>
<span class="line"><span style="color:#D4D4D4;">使用命名管道连接mysql</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --pipe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--port, -P</span></span>
<span class="line"><span style="color:#D4D4D4;">连接数据库端口号</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--protocol</span></span>
<span class="line"><span style="color:#D4D4D4;">使用的连接协议，包括：</span><span style="color:#569CD6;">tcp</span><span style="color:#D4D4D4;">, socket, pipe, memory.</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --protocol=tcp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--quick, -q</span></span>
<span class="line"><span style="color:#D4D4D4;">不缓冲查询，直接导出到标准输出。默认为打开状态，使用</span><span style="color:#6A9955;">--skip-quick取消该选项。</span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases </span></span>
<span class="line"><span style="color:#D4D4D4;">mysqldump  -uroot -p </span><span style="color:#6A9955;">--host=localhost --all-databases --skip-quick</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">--quote-names,-Q</span></span>
<span class="line"><span style="color:#D4D4D4;">使用（</span><span style="color:#CE9178;">\`）引起表和列名。默认为打开状态，使用--skip-quote-names取消该选项。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --skip-quote-names</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--replace</span></span>
<span class="line"><span style="color:#CE9178;">使用REPLACE INTO 取代INSERT INTO.</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --replace</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--result-file,  -r</span></span>
<span class="line"><span style="color:#CE9178;">直接输出到指定文件中。该选项应该用在使用回车换行对（</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">r</span><span style="color:#D7BA7D;">\\\\</span><span style="color:#CE9178;">n）换行的系统上（例如：DOS，Windows）。该选项确保只有一行被使用。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --result-file=/tmp/mysqldump_result_file.txt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--routines, -R</span></span>
<span class="line"><span style="color:#CE9178;">导出存储过程以及自定义函数。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --routines</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--set-charset</span></span>
<span class="line"><span style="color:#CE9178;">添加&#39;SET NAMES  default_character_set&#39;到输出文件。默认为打开状态，使用--skip-set-charset关闭选项。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases </span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --skip-set-charset</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--single-transaction</span></span>
<span class="line"><span style="color:#CE9178;">该选项在导出数据之前提交一个BEGIN SQL语句，BEGIN 不会阻塞任何应用程序且能保证导出时数据库的一致性状态。它只适用于多版本存储引擎，仅InnoDB。本选项和--lock-tables 选项是互斥的，因为LOCK  TABLES 会使任何挂起的事务隐含提交。要想导出大表的话，应结合使用--quick 选项。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --single-transaction</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--dump-date</span></span>
<span class="line"><span style="color:#CE9178;">将导出时间添加到输出文件中。默认为打开状态，使用--skip-dump-date关闭选项。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --skip-dump-date</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--skip-opt</span></span>
<span class="line"><span style="color:#CE9178;">禁用–opt选项.</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --skip-opt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--socket,-S</span></span>
<span class="line"><span style="color:#CE9178;">指定连接mysql的socket文件位置，默认路径/tmp/mysql.sock</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --socket=/tmp/mysqld.sock</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--tab,-T</span></span>
<span class="line"><span style="color:#CE9178;">为每个表在给定路径创建tab分割的文本文件。注意：仅仅用于mysqldump和mysqld服务器运行在相同机器上。注意使用--tab不能指定--databases参数</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost test test --tab=&quot;/home/mysql&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--tables</span></span>
<span class="line"><span style="color:#CE9178;">覆盖--databases (-B)参数，指定需要导出的表名，在后面的版本会使用table取代tables。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --databases test --tables test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--triggers</span></span>
<span class="line"><span style="color:#CE9178;">导出触发器。该选项默认启用，用--skip-triggers禁用它。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --triggers</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--tz-utc</span></span>
<span class="line"><span style="color:#CE9178;">在导出顶部设置时区TIME_ZONE=&#39;+00:00&#39; ，以保证在不同时区导出的TIMESTAMP 数据或者数据被移动其他时区时的正确性。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --tz-utc</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--user, -u</span></span>
<span class="line"><span style="color:#CE9178;">指定连接的用户名。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--verbose, --v</span></span>
<span class="line"><span style="color:#CE9178;">输出多种平台信息。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--version, -V</span></span>
<span class="line"><span style="color:#CE9178;">输出mysqldump版本信息并退出</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--where, -w</span></span>
<span class="line"><span style="color:#CE9178;">只转储给定的WHERE条件选择的记录。请注意如果条件包含命令解释符专用空格或字符，一定要将条件引用起来。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --where=” user=’root’”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--xml, -X</span></span>
<span class="line"><span style="color:#CE9178;">导出XML格式.</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--plugin_dir</span></span>
<span class="line"><span style="color:#CE9178;">客户端插件的目录，用于兼容不同的插件版本。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --plugin_dir=”/usr/local/lib/plugin”</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CE9178;">--default_auth</span></span>
<span class="line"><span style="color:#CE9178;">客户端插件默认使用权限。</span></span>
<span class="line"><span style="color:#CE9178;">mysqldump  -uroot -p --host=localhost --all-databases --default-auth=”/usr/local/lib/plugin/&lt;PLUGIN&gt;”</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入"><span><strong>导入</strong></span></a></h2><p><strong>source命令导入</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">mysql&gt;</span><span style="color:#569CD6;">use</span><span style="color:#D4D4D4;"> db1</span></span>
<span class="line"><span style="color:#D4D4D4;">mysql&gt;source db1.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>mysql命令行导出</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">#mysql -uroot -p db1 &lt; db1.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="导入去掉指定表" tabindex="-1"><a class="header-anchor" href="#导入去掉指定表"><span><strong>导入去掉指定表</strong></span></a></h2><p>当导出的SQL脚本文件中存在需要跳过的表数据时，可以在不重新导出的情况下，在sed命令对原脚本文件进行处理，可得到一个更小的导入脚本</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#D4D4D4;">sed </span><span style="color:#CE9178;">&#39;/INSERT INTO \`TABLE1_TO_SKIP\`/d&#39;</span><span style="color:#D4D4D4;"> DBdump.sql | \\</span></span>
<span class="line"><span style="color:#D4D4D4;">sed </span><span style="color:#CE9178;">&#39;/INSERT INTO \`TABLE2_TO_SKIP\`/d&#39;</span><span style="color:#D4D4D4;"> | \\</span></span>
<span class="line"><span style="color:#D4D4D4;">sed </span><span style="color:#CE9178;">&#39;/INSERT INTO \`TABLE3_TO_SKIP\`/d&#39;</span><span style="color:#D4D4D4;"> &gt; reduced.sql</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),i=[p];function o(c,d){return n(),a("div",null,i)}const t=s(e,[["render",o],["__file","mysql-import-export.html.vue"]]);export{t as default};
