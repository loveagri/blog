import{_ as n,c as a,o as p,ah as l}from"./chunks/framework.BrJYEL96.js";const b=JSON.parse('{"title":"chrt","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/commands/chrt.md","filePath":"Linux/commands/chrt.md","lastUpdated":1737450307000}'),o={name:"Linux/commands/chrt.md"};function e(r,s,c,t,y,i){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="chrt" tabindex="-1">chrt <a class="header-anchor" href="#chrt" aria-label="Permalink to &quot;chrt&quot;">​</a></h1><p>cup 调度</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[root@dotohi ~]# chrt --help</span></span>
<span class="line"><span style="color:#61AFEF;">Show</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> change</span><span style="color:#98C379;"> the</span><span style="color:#98C379;"> real-time</span><span style="color:#98C379;"> scheduling</span><span style="color:#98C379;"> attributes</span><span style="color:#98C379;"> of</span><span style="color:#98C379;"> a</span><span style="color:#98C379;"> process.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Set</span><span style="color:#98C379;"> policy:</span></span>
<span class="line"><span style="color:#61AFEF;"> chrt</span><span style="color:#ABB2BF;"> [options] &lt;priority&gt; &lt;command&gt; [</span><span style="color:#56B6C2;">&lt;</span><span style="color:#ABB2BF;">arg</span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;">...]</span></span>
<span class="line"><span style="color:#61AFEF;"> chrt</span><span style="color:#ABB2BF;"> [options] --pid &lt;priority&gt; &lt;pid&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Get</span><span style="color:#98C379;"> policy:</span></span>
<span class="line"><span style="color:#61AFEF;"> chrt</span><span style="color:#ABB2BF;"> [options] -p &lt;pid&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Policy</span><span style="color:#98C379;"> options:</span></span>
<span class="line"><span style="color:#61AFEF;"> -b,</span><span style="color:#D19A66;"> --batch</span><span style="color:#98C379;">          set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_BATCH</span></span>
<span class="line"><span style="color:#61AFEF;"> -d,</span><span style="color:#D19A66;"> --deadline</span><span style="color:#98C379;">       set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_DEADLINE</span></span>
<span class="line"><span style="color:#61AFEF;"> -f,</span><span style="color:#D19A66;"> --fifo</span><span style="color:#98C379;">           set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_FIFO</span></span>
<span class="line"><span style="color:#61AFEF;"> -i,</span><span style="color:#D19A66;"> --idle</span><span style="color:#98C379;">           set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_IDLE</span></span>
<span class="line"><span style="color:#61AFEF;"> -o,</span><span style="color:#D19A66;"> --other</span><span style="color:#98C379;">          set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_OTHER</span></span>
<span class="line"><span style="color:#61AFEF;"> -r,</span><span style="color:#D19A66;"> --rr</span><span style="color:#98C379;">             set</span><span style="color:#98C379;"> policy</span><span style="color:#98C379;"> to</span><span style="color:#98C379;"> SCHED_RR</span><span style="color:#ABB2BF;"> (default)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Scheduling</span><span style="color:#98C379;"> options:</span></span>
<span class="line"><span style="color:#61AFEF;"> -R,</span><span style="color:#D19A66;"> --reset-on-fork</span><span style="color:#98C379;">       set</span><span style="color:#98C379;"> SCHED_RESET_ON_FORK</span><span style="color:#98C379;"> for</span><span style="color:#98C379;"> FIFO</span><span style="color:#98C379;"> or</span><span style="color:#98C379;"> RR</span></span>
<span class="line"><span style="color:#61AFEF;"> -T,</span><span style="color:#D19A66;"> --sched-runtime</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">n</span><span style="color:#ABB2BF;">s&gt;  </span><span style="color:#98C379;">runtime</span><span style="color:#98C379;"> parameter</span><span style="color:#98C379;"> for</span><span style="color:#98C379;"> DEADLINE</span></span>
<span class="line"><span style="color:#61AFEF;"> -P,</span><span style="color:#D19A66;"> --sched-period</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">n</span><span style="color:#ABB2BF;">s&gt;   </span><span style="color:#98C379;">period</span><span style="color:#98C379;"> parameter</span><span style="color:#98C379;"> for</span><span style="color:#98C379;"> DEADLINE</span></span>
<span class="line"><span style="color:#61AFEF;"> -D,</span><span style="color:#D19A66;"> --sched-deadline</span><span style="color:#ABB2BF;"> &lt;</span><span style="color:#98C379;">n</span><span style="color:#ABB2BF;">s&gt; </span><span style="color:#98C379;">deadline</span><span style="color:#98C379;"> parameter</span><span style="color:#98C379;"> for</span><span style="color:#98C379;"> DEADLINE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">Other</span><span style="color:#98C379;"> options:</span></span>
<span class="line"><span style="color:#61AFEF;"> -a,</span><span style="color:#D19A66;"> --all-tasks</span><span style="color:#98C379;">      operate</span><span style="color:#98C379;"> on</span><span style="color:#98C379;"> all</span><span style="color:#98C379;"> the</span><span style="color:#98C379;"> tasks</span><span style="color:#ABB2BF;"> (threads) </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> a given pid</span></span>
<span class="line"><span style="color:#61AFEF;"> -m,</span><span style="color:#D19A66;"> --max</span><span style="color:#98C379;">            show</span><span style="color:#98C379;"> min</span><span style="color:#98C379;"> and</span><span style="color:#98C379;"> max</span><span style="color:#98C379;"> valid</span><span style="color:#98C379;"> priorities</span></span>
<span class="line"><span style="color:#61AFEF;"> -p,</span><span style="color:#D19A66;"> --pid</span><span style="color:#98C379;">            operate</span><span style="color:#98C379;"> on</span><span style="color:#98C379;"> existing</span><span style="color:#98C379;"> given</span><span style="color:#98C379;"> pid</span></span>
<span class="line"><span style="color:#61AFEF;"> -v,</span><span style="color:#D19A66;"> --verbose</span><span style="color:#98C379;">        display</span><span style="color:#98C379;"> status</span><span style="color:#98C379;"> information</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;"> -h,</span><span style="color:#D19A66;"> --help</span><span style="color:#98C379;">           display</span><span style="color:#98C379;"> this</span><span style="color:#98C379;"> help</span></span>
<span class="line"><span style="color:#61AFEF;"> -V,</span><span style="color:#D19A66;"> --version</span><span style="color:#98C379;">        display</span><span style="color:#98C379;"> version</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">For</span><span style="color:#98C379;"> more</span><span style="color:#98C379;"> details</span><span style="color:#98C379;"> see</span><span style="color:#98C379;"> chrt</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">1</span><span style="color:#ABB2BF;">)</span><span style="color:#98C379;">.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki one-dark-pro vp-code" style="background-color:#282c34;color:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">[root@dotohi ~]# chrt -r --max</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_OTHER</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 0/0</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_FIFO</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 1/99</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_RR</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 1/99</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_BATCH</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 0/0</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_IDLE</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 0/0</span></span>
<span class="line"><span style="color:#61AFEF;">SCHED_DEADLINE</span><span style="color:#98C379;"> min/max</span><span style="color:#98C379;"> priority</span><span style="color:#98C379;">	:</span><span style="color:#98C379;"> 0/0</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,4)]))}const F=n(o,[["render",e]]);export{b as __pageData,F as default};
