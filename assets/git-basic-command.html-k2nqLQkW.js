import{_ as s,o as n,c as a,b as l}from"./app-lZ8g2une.js";const e={},i=l(`<h1 id="git-基本命令" tabindex="-1"><a class="header-anchor" href="#git-基本命令"><span>git 基本命令</span></a></h1><h2 id="工作区管理" tabindex="-1"><a class="header-anchor" href="#工作区管理"><span>工作区管理</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 命令用来从工作目录中删除所有没有跟踪（tracked）过的文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> clean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 是一次clean的演习, 告诉你哪些文件会被删除</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> clean -n </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 删除当前目录下没有tracked过的文件，不会删除.gitignore指定的文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> clean -f </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 删除当前目录下没有被tracked过的文件和文件夹</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> clean -df </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 将没有放入到暂存区的所有文件恢复</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout . </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#放弃指定文件的修改</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout file </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 暂存现在工作区的工作，然后恢复原来为编辑的状态，但是不包括未被跟踪的文件，也就是新建的文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> stash </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 显示现在正在暂存的工作</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> stash list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 恢复stash暂存区的工作</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> stash apply stash@{</span><span style="color:#B5CEA8;">0</span><span style="color:#CE9178;">} </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="暂存区管理" tabindex="-1"><a class="header-anchor" href="#暂存区管理"><span>暂存区管理</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 提交所有修改和新增的文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> add . </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> add -u </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 撤销暂存区的所有文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset HEAD  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 撤销暂存区的指定文件</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset HEAD file </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看暂存区文件列表</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> ls-files -s </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看暂存区文件内容</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> cat-file -p </span><span style="color:#B5CEA8;">6</span><span style="color:#CE9178;">e9a94 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 提交一次版本</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> commit -m ‘提交信息’ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 提交一次版本， 同git add . &amp;&amp; git commit -m &quot;message&quot;</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> commit -am ‘提交信息’ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 将误删除文件从上次版本库中恢复</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout HEAD -- deletedFile </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 将误删除文件从上上次提交的版本库中恢复</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout HEAD^ -- deletedFile </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="版本库管理" tabindex="-1"><a class="header-anchor" href="#版本库管理"><span>版本库管理</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">#使用reset恢复到历史提交点，重置暂存区与工作目录的内容。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 保留工作区的内容，不保留暂存区 等同 git reset --mixed</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 保留工作区的内容，把文件差异放进暂存区，即保留暂存区</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset --soft </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 清空工作区和暂存区的改动</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset --hard </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 恢复前三个版本</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset --hard HEAD^^^ </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># (同上)恢复前三个版本</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset --hard HEAD~3 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 恢复到指定提交版本（先通过 git log 查看版本号)</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset --hard b7b73147ca8d6fc20e451d7b36 </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 放弃已经add 暂存区的文件hd.js</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reset HEAD hd.js </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 可以查询之前进行的 每一次 git 命令，即包括reset前的所有日志，即显示每一步操作信息</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> reflog </span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支管理-branch" tabindex="-1"><a class="header-anchor" href="#分支管理-branch"><span>分支管理 branch</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">#分支用于为项目增加新功能或修复Bug时使用。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 创建分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看分支 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 切换分支 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 创建并切换分支 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout -b feature/bbs</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看远程分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch -r </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 将分支 main 更新为master </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch -m main master</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 合并dev分支到master </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> checkout master</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> merge dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 删除分支 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch -d dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 删除没有合并的分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch -D dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 删除远程分支 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> push origin :dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看未合并的分支(切换到master) </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch --no-merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看已经合并的分支(切换到master) </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch --merged</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看两个分支的变动</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> diff branch-a..branch-b</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志查看-log" tabindex="-1"><a class="header-anchor" href="#日志查看-log"><span>日志查看 log</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;">#查看日志 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看最近2次提交日志并显示文件差异 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log -p </span><span style="color:#B5CEA8;">-2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 显示已修改的文件清单 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --name-only</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 显示新增、修改、删除的文件清单 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --name-status</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 一行显示并只显示SHA-1的前几个字符 </span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --oneline</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 一行显示并只显示SHA-1的前几个字符及最近的5条信息</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --oneline </span><span style="color:#B5CEA8;">-5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 过滤日志信息</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --oneline --grep=&quot;filer info&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看特定时间段日志</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --before=&#39;1 day&#39;</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> log --after=&#39;1 day&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="远程管理-git-remote" tabindex="-1"><a class="header-anchor" href="#远程管理-git-remote"><span>远程管理 git remote</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 添加远程分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> remote add origin https://gitee.com/loveagri/blank.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看远程分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> branch -r </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 查看远程分支关联地址</span></span>
<span class="line"><span style="color:#6A9955;"># origin  git@gitee.com:loveagri/blank.git (fetch)</span></span>
<span class="line"><span style="color:#6A9955;"># origin  git@gitee.com:loveagri/blank.git (push)</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> remote -v</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推送分支到远程-git-push" tabindex="-1"><a class="header-anchor" href="#推送分支到远程-git-push"><span>推送分支到远程 git push</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># todo</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="远程拉取-git-pull-git-fetch-git-merge" tabindex="-1"><a class="header-anchor" href="#远程拉取-git-pull-git-fetch-git-merge"><span>远程拉取 git pull, git fetch, git merge</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 拉取远程分支但是不合并</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> fetch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 合并远程分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> merge</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;">#直接拉取远程分支</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> pull</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-diff" tabindex="-1"><a class="header-anchor" href="#git-diff"><span>git diff</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="shiki dark-plus" style="background-color:#1E1E1E;color:#D4D4D4;" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 查看两个分支的变动</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#CE9178;"> diff branch-a..branch-b</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),p=[i];function c(r,d){return n(),a("div",null,p)}const t=s(e,[["render",c],["__file","git-basic-command.html.vue"]]);export{t as default};
