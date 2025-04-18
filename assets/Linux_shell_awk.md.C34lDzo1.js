import{_ as e,c as n,o as l,ah as s,j as t,a as d}from"./chunks/framework.BrJYEL96.js";const w=JSON.parse('{"title":"awk","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/shell/awk.md","filePath":"Linux/shell/awk.md","lastUpdated":1737347272000}'),r={name:"Linux/shell/awk.md"},o={tabindex:"0"},p={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},i={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.891ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 1278 748","aria-hidden":"true"};function u(c,a,b,h,m,q){return l(),n("div",null,[a[17]||(a[17]=s(`<h1 id="awk" tabindex="-1">awk <a class="header-anchor" href="#awk" aria-label="Permalink to &quot;awk&quot;">​</a></h1><hr><h2 id="语法格式" tabindex="-1">语法格式 <a class="header-anchor" href="#语法格式" aria-label="Permalink to &quot;语法格式&quot;">​</a></h2><p>第一种：<code>awk &quot;BEGIN{}pattern{commands}END{}&quot; file</code></p><p>第二种：<code>standard output | awk &quot;BEGIN{}pattern{commands}END{}&quot;</code></p><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><ul><li><p>-v 传递参数</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">num1</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">20</span></span>
<span class="line"><span style="color:#E06C75;">var</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;hello world&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">awk</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> num2=</span><span style="color:#E06C75;">$num1</span><span style="color:#D19A66;"> -v</span><span style="color:#98C379;"> var1=&quot;</span><span style="color:#E06C75;">$var</span><span style="color:#98C379;">&quot;</span><span style="color:#98C379;"> &#39;BEGIN{print num2,var1}&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li><li><p>-f 引入文件脚本</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">awk</span><span style="color:#D19A66;"> -f</span><span style="color:#98C379;"> exec.awk</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>-F 指定分隔符</p></li></ul><h2 id="内置变量" tabindex="-1">内置变量 <a class="header-anchor" href="#内置变量" aria-label="Permalink to &quot;内置变量&quot;">​</a></h2>`,8)),t("table",o,[a[16]||(a[16]=t("thead",null,[t("tr",null,[t("th",null,"内置变量"),t("th",null,"含义"),t("th",null,"示例")])],-1)),t("tbody",null,[a[5]||(a[5]=t("tr",null,[t("td",null,"$0"),t("td",null,"整行内容"),t("td")],-1)),t("tr",null,[t("td",null,[t("mjx-container",p,[(l(),n("svg",i,a[0]||(a[0]=[s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(500,0)"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g></g></g>',1)]))),a[1]||(a[1]=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mn",null,"1"),t("mo",null,"−")])],-1))]),a[2]||(a[2]=d("n"))]),a[3]||(a[3]=t("td",null,"当前行的1-n个字段",-1)),a[4]||(a[4]=t("td",null,null,-1))]),a[6]||(a[6]=t("tr",null,[t("td",null,"NF"),t("td",null,"处理行的字段个数"),t("td")],-1)),a[7]||(a[7]=t("tr",null,[t("td",null,"NR"),t("td",null,"当前行的行号，从1开始计数"),t("td")],-1)),a[8]||(a[8]=t("tr",null,[t("td",null,"FNR"),t("td",null,"多文件处理时，每个文件行号单独计数，都是从1开始"),t("td")],-1)),a[9]||(a[9]=t("tr",null,[t("td",null,"FS"),t("td",null,"分隔符，默认空格活tab"),t("td",null,`Awk 'BEGIN{FS=":"}{print $2}' file`)],-1)),a[10]||(a[10]=t("tr",null,[t("td",null,"RS"),t("td",null,"输入行分隔符，默认为空格"),t("td",null,`Awk 'BEGIN{FS=":";RS="--"}{print $2}' file`)],-1)),a[11]||(a[11]=t("tr",null,[t("td",null,"OFS"),t("td",null,"输出字段分隔符，默认空格"),t("td")],-1)),a[12]||(a[12]=t("tr",null,[t("td",null,"ORS"),t("td",null,"输出行分隔符，默认回车换行"),t("td")],-1)),a[13]||(a[13]=t("tr",null,[t("td",null,"FILENAME"),t("td",null,"当前输入的文件名称"),t("td")],-1)),a[14]||(a[14]=t("tr",null,[t("td",null,"ARGC"),t("td",null,"命令行参数个数"),t("td")],-1)),a[15]||(a[15]=t("tr",null,[t("td",null,"ARGV"),t("td",null,"命令行参数数组"),t("td")],-1))])]),a[18]||(a[18]=s(`<h2 id="格式化输出printf" tabindex="-1">格式化输出printf <a class="header-anchor" href="#格式化输出printf" aria-label="Permalink to &quot;格式化输出printf&quot;">​</a></h2><table tabindex="0"><thead><tr><th>格式符</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>%s</td><td>字符串</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} {printf &quot;%s\\n&quot;, $1}&#39; /etc /passwd</td></tr><tr><td>%d</td><td>十进制</td><td></td></tr><tr><td>%f</td><td>浮点数</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} {printf &quot;%0.2f\\n&quot;, $3}&#39; /etc/passwd</td></tr><tr><td>%x</td><td>十六进制</td><td></td></tr><tr><td>%o</td><td>八进制</td><td></td></tr><tr><td>%e</td><td>数字科学计数法</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} {printf &quot;%e\\n&quot;, $3}&#39; /etc/passwd</td></tr><tr><td>%c</td><td>单个字符的ASCII码</td><td></td></tr><tr><td>-</td><td>左对齐,默认左对齐</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} {printf &quot;%-20s %-20s\\n&quot;, $1,$7}&#39; /etc/passwd</td></tr><tr><td>+</td><td>右对齐,加对齐位数后默认右对齐</td><td></td></tr><tr><td>#</td><td>显示八进制的前面加0，显示十六进制的前面加0x</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} {printf &quot;%#x\\n&quot;, $3}&#39; /etc/passwd</td></tr></tbody></table><h2 id="模式匹配" tabindex="-1">模式匹配 <a class="header-anchor" href="#模式匹配" aria-label="Permalink to &quot;模式匹配&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法</th><th>描述</th><th>示例</th></tr></thead><tbody><tr><td>RegExp</td><td></td><td>awk &#39;BEGIN{FS=&quot;:&quot;}/root/ {printf &quot;%d\\n&quot;, $3}&#39; /etc/passwd</td></tr><tr><td>运算符匹配</td><td>&lt; | &gt; | &lt;= | &gt;= | == | != | ~ | !~</td><td>1. awk &#39;BEGIN{FS=&quot;:&quot;} $3&lt;10 {printf &quot;%d\\n&quot;, $3}&#39; /etc/passwd <br>2. awk &#39;BEGIN{FS=&quot;:&quot;} $3~/[0-9]{2,}/ {printf &quot;%d\\n&quot;, $3}&#39; /etc/passwd</td></tr><tr><td>布尔值匹配</td><td>|| | &amp;&amp; | ！</td><td>awk &#39;BEGIN{FS=&quot;:&quot;} $1==&quot;root&quot; || $1==&quot;mail&quot;{printf &quot;%s\\n&quot;, $0}&#39; /etc/passwd</td></tr></tbody></table><h2 id="动作表达式" tabindex="-1">动作表达式 <a class="header-anchor" href="#动作表达式" aria-label="Permalink to &quot;动作表达式&quot;">​</a></h2><ul><li>计算空白行的数量</li></ul><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">awk</span><span style="color:#98C379;"> &#39;/^$/ {sum++} END {print sum}&#39;</span><span style="color:#98C379;"> /etc/services</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>计算学生平均分，并且格式化输出，添加头部，文本如下：</li></ul><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span>Allen  802  36  956 798</span></span>
<span class="line"><span>mike  80  376  967 798</span></span>
<span class="line"><span>Zhang  480  36  596 988</span></span>
<span class="line"><span>wang  680  366  966 988</span></span>
<span class="line"><span>han  870  37  967 988</span></span>
<span class="line"><span>Li  809  33  896 988</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">awk</span><span style="color:#98C379;"> &#39;BEGIN{printf &quot;%-8s%-8s%-8s%-8s%-8s%-8s\\n&quot;,&quot;name&quot;, &quot;math&quot;, &quot;chinese&quot;, &quot;english&quot;, &quot;pysical&quot;, &quot;avg&quot;}{total=$2+$3+$4+$5;avg=total/4; printf &quot;%-8s%-8d%-8d%-8d%-8d%-0.2f\\n&quot;,$1,$2,$3,$4,$5,avg}&#39;</span><span style="color:#98C379;"> student.txt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="awk-文件内编写代码-然后执行" tabindex="-1">Awk 文件内编写代码，然后执行 <a class="header-anchor" href="#awk-文件内编写代码-然后执行" aria-label="Permalink to &quot;Awk 文件内编写代码，然后执行&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">awk</span><span style="color:#D19A66;"> -f</span><span style="color:#98C379;"> exec.awk</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="字符串函数" tabindex="-1">字符串函数 <a class="header-anchor" href="#字符串函数" aria-label="Permalink to &quot;字符串函数&quot;">​</a></h2><table tabindex="0"><thead><tr><th>函数名</th><th>解释</th><th>函数返回值</th></tr></thead><tbody><tr><td>length(str)</td><td>计算字符串长度</td><td>整数长度值</td></tr><tr><td>index(str1,str2)</td><td>在str1中查找str2的文职</td><td>返回索引值，从1计数</td></tr><tr><td>tolower(str)</td><td>转为小写</td><td></td></tr><tr><td>toupper(str)</td><td>大写</td><td></td></tr><tr><td>substr</td><td>从str的m个字符串开始，截取n位</td><td>截取后的子串</td></tr><tr><td>split(str,arr,fs)</td><td>按fs切割字符串，结果保存arr</td><td>切割后的子串个数</td></tr><tr><td>match(str,RE)</td><td>在str中按照RE查找，返回位置</td><td>返回索引位置</td></tr><tr><td>sub(RE,RepStr,str)</td><td>在str中搜索符合RE的字串，将其替换为Repstr;只替换第一个</td><td>替换的个数</td></tr><tr><td>gsub</td><td>在str中搜索符合RE的字串，将其替换为Repstr;替换所有</td><td>替换的个数</td></tr></tbody></table><h2 id="awk数组的用法" tabindex="-1">awk数组的用法 <a class="header-anchor" href="#awk数组的用法" aria-label="Permalink to &quot;awk数组的用法&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">警告</p><p>awk中数组索引是从1开始的，shell中数组是从0开始</p></div>`,16))])}const y=e(r,[["render",u]]);export{w as __pageData,y as default};
