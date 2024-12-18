import{_ as n,c as a,a2 as l,o as p}from"./chunks/framework.trnLO_3_.js";const u=JSON.parse('{"title":"git 基本命令","description":"","frontmatter":{"order":1},"headers":[],"relativePath":"git/git-basic-command.md","filePath":"git/git-basic-command.md","lastUpdated":1734536287000}'),e={name:"git/git-basic-command.md"};function c(r,s,o,i,t,b){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="git-基本命令" tabindex="-1">git 基本命令 <a class="header-anchor" href="#git-基本命令" aria-label="Permalink to &quot;git 基本命令&quot;">​</a></h1><h2 id="工作区管理" tabindex="-1">工作区管理 <a class="header-anchor" href="#工作区管理" aria-label="Permalink to &quot;工作区管理&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 命令用来从工作目录中删除所有没有跟踪（tracked）过的文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 是一次clean的演习, 告诉你哪些文件会被删除</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clean</span><span style="color:#D19A66;"> -n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除当前目录下没有tracked过的文件，不会删除.gitignore指定的文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clean</span><span style="color:#D19A66;"> -f</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除当前目录下没有被tracked过的文件和文件夹</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> clean</span><span style="color:#D19A66;"> -df</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 将没有放入到暂存区的所有文件恢复</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> .</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#放弃指定文件的修改</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 暂存现在工作区的工作，然后恢复原来为编辑的状态，但是不包括未被跟踪的文件，也就是新建的文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> stash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示现在正在暂存的工作</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> stash</span><span style="color:#98C379;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复stash暂存区的工作</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> stash</span><span style="color:#98C379;"> apply</span><span style="color:#98C379;"> stash@{</span><span style="color:#D19A66;">0</span><span style="color:#98C379;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="暂存区管理" tabindex="-1">暂存区管理 <a class="header-anchor" href="#暂存区管理" aria-label="Permalink to &quot;暂存区管理&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 提交所有修改和新增的文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> add</span><span style="color:#98C379;"> .</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> add</span><span style="color:#D19A66;"> -u</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 撤销暂存区的所有文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#98C379;"> HEAD</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 撤销暂存区的指定文件</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#98C379;"> HEAD</span><span style="color:#98C379;"> file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看暂存区文件列表</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> ls-files</span><span style="color:#D19A66;"> -s</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看暂存区文件内容</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> cat-file</span><span style="color:#D19A66;"> -p</span><span style="color:#98C379;"> 6e9a94</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交一次版本</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -m</span><span style="color:#98C379;"> ‘提交信息’</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 提交一次版本， 同git add . &amp;&amp; git commit -m &quot;message&quot;</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> commit</span><span style="color:#D19A66;"> -am</span><span style="color:#98C379;"> ‘提交信息’</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 将误删除文件从上次版本库中恢复</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> HEAD</span><span style="color:#D19A66;"> --</span><span style="color:#98C379;"> deletedFile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 将误删除文件从上上次提交的版本库中恢复</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> HEAD^</span><span style="color:#D19A66;"> --</span><span style="color:#98C379;"> deletedFile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="版本库管理" tabindex="-1">版本库管理 <a class="header-anchor" href="#版本库管理" aria-label="Permalink to &quot;版本库管理&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#使用reset恢复到历史提交点，重置暂存区与工作目录的内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 保留工作区的内容，不保留暂存区 等同 git reset --mixed</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 保留工作区的内容，把文件差异放进暂存区，即保留暂存区</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --soft</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 清空工作区和暂存区的改动</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复前三个版本</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span><span style="color:#98C379;"> HEAD^^^</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># (同上)恢复前三个版本</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span><span style="color:#98C379;"> HEAD~3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 恢复到指定提交版本（先通过 git log 查看版本号)</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#D19A66;"> --hard</span><span style="color:#98C379;"> b7b73147ca8d6fc20e451d7b36</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 放弃已经add 暂存区的文件hd.js</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reset</span><span style="color:#98C379;"> HEAD</span><span style="color:#98C379;"> hd.js</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 可以查询之前进行的 每一次 git 命令，即包括reset前的所有日志，即显示每一步操作信息</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> reflog</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="分支管理-branch" tabindex="-1">分支管理 branch <a class="header-anchor" href="#分支管理-branch" aria-label="Permalink to &quot;分支管理 branch&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#分支用于为项目增加新功能或修复Bug时使用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 创建分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 切换分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 创建并切换分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#D19A66;"> -b</span><span style="color:#98C379;"> feature/bbs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 将分支 main 更新为master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -m</span><span style="color:#98C379;"> main</span><span style="color:#98C379;"> master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 合并dev分支到master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> checkout</span><span style="color:#98C379;"> master</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> merge</span><span style="color:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -d</span><span style="color:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除没有合并的分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -D</span><span style="color:#98C379;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 删除远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> push</span><span style="color:#98C379;"> origin</span><span style="color:#98C379;"> :dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看未合并的分支(切换到master)</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> --no-merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看已经合并的分支(切换到master)</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> --merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看两个分支的变动</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> diff</span><span style="color:#98C379;"> branch-a..branch-b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="日志查看-log" tabindex="-1">日志查看 log <a class="header-anchor" href="#日志查看-log" aria-label="Permalink to &quot;日志查看 log&quot;">​</a></h2><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#查看日志</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看最近2次提交日志并显示文件差异</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> -p</span><span style="color:#D19A66;"> -2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示已修改的文件清单</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --name-only</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 显示新增、修改、删除的文件清单</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --name-status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一行显示并只显示SHA-1的前几个字符</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 一行显示并只显示SHA-1的前几个字符及最近的5条信息</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --oneline</span><span style="color:#D19A66;"> -5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 过滤日志信息</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --oneline</span><span style="color:#D19A66;"> --grep=</span><span style="color:#98C379;">&quot;filer info&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看特定时间段日志</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --before=</span><span style="color:#98C379;">&#39;1 day&#39;</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> log</span><span style="color:#D19A66;"> --after=</span><span style="color:#98C379;">&#39;1 day&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="远程管理-git-remote" tabindex="-1">远程管理 git remote <a class="header-anchor" href="#远程管理-git-remote" aria-label="Permalink to &quot;远程管理 git remote&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 添加远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> remote</span><span style="color:#98C379;"> add</span><span style="color:#98C379;"> origin</span><span style="color:#98C379;"> https://gitee.com/loveagri/blank.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> branch</span><span style="color:#D19A66;"> -r</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 查看远程分支关联地址</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># origin  git@gitee.com:loveagri/blank.git (fetch)</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># origin  git@gitee.com:loveagri/blank.git (push)</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> remote</span><span style="color:#D19A66;"> -v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="推送分支到远程-git-push" tabindex="-1">推送分支到远程 git push <a class="header-anchor" href="#推送分支到远程-git-push" aria-label="Permalink to &quot;推送分支到远程 git push&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># todo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="远程拉取-git-pull-git-fetch-git-merge" tabindex="-1">远程拉取 git pull, git fetch, git merge <a class="header-anchor" href="#远程拉取-git-pull-git-fetch-git-merge" aria-label="Permalink to &quot;远程拉取 git pull, git fetch, git merge&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 拉取远程分支但是不合并</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> fetch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 合并远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#直接拉取远程分支</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> pull</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="git-diff" tabindex="-1">git diff <a class="header-anchor" href="#git-diff" aria-label="Permalink to &quot;git diff&quot;">​</a></h2><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 查看两个分支的变动</span></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> diff</span><span style="color:#98C379;"> branch-a..branch-b</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,19)]))}const m=n(e,[["render",c]]);export{u as __pageData,m as default};
