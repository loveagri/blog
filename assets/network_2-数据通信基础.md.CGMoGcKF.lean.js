import{_ as r,C as d,c as a,o as e,j as Q,G as o,ah as l,a as T,w as n}from"./chunks/framework.BrJYEL96.js";const _=JSON.parse('{"title":"第 2 章 数据通信基础","description":"","frontmatter":{"order":98},"headers":[],"relativePath":"network/2-数据通信基础.md","filePath":"network/2-数据通信基础.md","lastUpdated":1736052165000}'),m={name:"network/2-数据通信基础.md"},i={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},p={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.237ex",height:"1.731ex",role:"img",focusable:"false",viewBox:"0 -683 3640.6 765","aria-hidden":"true"},h={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},g={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.546ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.094ex",height:"2.116ex",role:"img",focusable:"false",viewBox:"0 -694 5787.4 935.4","aria-hidden":"true"},u={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.781ex"},xmlns:"http://www.w3.org/2000/svg",width:"19.019ex",height:"2.8ex",role:"img",focusable:"false",viewBox:"0 -892.5 8406.5 1237.5","aria-hidden":"true"},x={tabindex:"0",class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},H={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-1.552ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.388ex",height:"4.676ex",role:"img",focusable:"false",viewBox:"0 -1381 6801.6 2067","aria-hidden":"true"},L={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},f={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.312ex"},xmlns:"http://www.w3.org/2000/svg",width:"15.155ex",height:"1.882ex",role:"img",focusable:"false",viewBox:"0 -694 6698.4 832","aria-hidden":"true"};function c(k,t,M,y,V,b){const s=d("center");return e(),a("div",null,[t[23]||(t[23]=Q("h1",{id:"第-2-章-数据通信基础",tabindex:"-1"},[T("第 2 章 数据通信基础 "),Q("a",{class:"header-anchor",href:"#第-2-章-数据通信基础","aria-label":'Permalink to "第 2 章 数据通信基础"'},"​")],-1)),t[24]||(t[24]=Q("h2",{id:"_2-8-多路复用技术",tabindex:"-1"},[T("2.8 多路复用技术 "),Q("a",{class:"header-anchor",href:"#_2-8-多路复用技术","aria-label":'Permalink to "2.8 多路复用技术"'},"​")],-1)),t[25]||(t[25]=Q("p",null,"E1载波：30个语音信道，2个控制信道复合在一条2.048Mb/s的高速信道上。",-1)),t[26]||(t[26]=Q("p",null,"T1载波：24个语音信道在一条1.544Mb/s的高速信道上。",-1)),o(s,null,{default:n(()=>t[0]||(t[0]=[Q("img",{src:"https://raw.gitcode.com/loveagri/pic/raw/main/2024-03-13/20/76149_image-20240313204704611.png",alt:"image-20240313204704611",style:{zoom:"50%"}},null,-1)])),_:1}),t[27]||(t[27]=Q("h3",{id:"信道容量计算",tabindex:"-1"},[T("信道容量计算 "),Q("a",{class:"header-anchor",href:"#信道容量计算","aria-label":'Permalink to "信道容量计算"'},"​")],-1)),t[28]||(t[28]=Q("p",null,"信道容量：信道无差错传输信息的最大平均信息速率。",-1)),Q("p",null,[t[3]||(t[3]=T("理想")),t[4]||(t[4]=Q("strong",null,"无噪声",-1)),t[5]||(t[5]=T("的信道容量：奈奎斯特公式：")),Q("mjx-container",i,[(e(),a("svg",p,t[1]||(t[1]=[l("",1)]))),t[2]||(t[2]=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"B"),Q("mo",null,"="),Q("mn",null,"2"),Q("mi",null,"W")])],-1))]),t[6]||(t[6]=T(", B为码元速率（单位：波特Baud），W为信道带宽（带宽），即最高频-最低频。"))]),Q("p",null,[t[9]||(t[9]=T("码元速率与数据速率关系： ")),Q("mjx-container",h,[(e(),a("svg",g,t[7]||(t[7]=[l("",1)]))),t[8]||(t[8]=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"R"),Q("mo",null,"="),Q("mi",null,"B"),Q("msub",null,[Q("mi",null,"log"),Q("mn",null,"2")]),Q("mo",{"data-mjx-texclass":"NONE"},"⁡"),Q("mi",null,"N")])],-1))])]),Q("p",null,[t[12]||(t[12]=Q("strong",null,"有噪声",-1)),t[13]||(t[13]=T("连续信道的信道容量：香农公式 ")),Q("mjx-container",u,[(e(),a("svg",w,t[10]||(t[10]=[l("",1)]))),t[11]||(t[11]=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"C"),Q("mo",null,"="),Q("mi",null,"W"),Q("mi",null,"l"),Q("mi",null,"o"),Q("msub",null,[Q("mi",null,"g"),Q("mn",null,"2")]),Q("mo",{stretchy:"false"},"("),Q("mn",null,"1"),Q("mo",null,"+"),Q("mfrac",null,[Q("mi",null,"S"),Q("mi",null,"N")]),Q("mo",{stretchy:"false"},")")])],-1))]),t[14]||(t[14]=T("， C为极限数据速率bps，S为信号的平均功率，N为噪声平均功率。信噪比S/N，数值很大，常用分贝数DB表示。"))]),Q("mjx-container",x,[(e(),a("svg",H,t[15]||(t[15]=[l("",1)]))),t[16]||(t[16]=Q("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[Q("mi",null,"D"),Q("mi",null,"B"),Q("mo",null,"="),Q("mn",null,"10"),Q("mi",null,"l"),Q("mi",null,"g"),Q("mo",{stretchy:"false"},"("),Q("mfrac",null,[Q("mi",null,"S"),Q("mi",null,"N")]),Q("mo",{stretchy:"false"},")")])],-1))]),o(s,null,{default:n(()=>t[17]||(t[17]=[Q("img",{src:"https://raw.gitcode.com/loveagri/pic/raw/main/2024-03-14/20/60000_image-20240314204717683.png",alt:"image-20240314204717683",style:{zoom:"40%"}},null,-1)])),_:1}),t[29]||(t[29]=Q("h3",{id:"编码效率",tabindex:"-1"},[T("编码效率 "),Q("a",{class:"header-anchor",href:"#编码效率","aria-label":'Permalink to "编码效率"'},"​")],-1)),o(s,null,{default:n(()=>t[18]||(t[18]=[Q("img",{src:"https://raw.gitcode.com/loveagri/pic/raw/main/2024-03-14/21/28990_image-20240314214507616.png",alt:"image-20240314214507616",style:{zoom:"33%"}},null,-1)])),_:1}),t[30]||(t[30]=l("",4)),Q("p",null,[t[21]||(t[21]=T("公式：")),Q("mjx-container",L,[(e(),a("svg",f,t[19]||(t[19]=[l("",1)]))),t[20]||(t[20]=Q("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[Q("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[Q("mi",null,"m"),Q("mo",null,"+"),Q("mi",null,"k"),Q("mo",null,"≤"),Q("mn",null,"2"),Q("mi",null,"k"),Q("mo",null,"−"),Q("mn",null,"1")])],-1))]),t[22]||(t[22]=T(" 其中m为信息码个数，k为校验码个数，即可检错，也可纠错一位错误。"))]),t[31]||(t[31]=Q("h4",{id:"crc校验",tabindex:"-1"},[T("CRC校验 "),Q("a",{class:"header-anchor",href:"#crc校验","aria-label":'Permalink to "CRC校验"'},"​")],-1)),t[32]||(t[32]=Q("p",null,"只检错，不纠错，主要用于以太网，",-1))])}const v=r(m,[["render",c]]);export{_ as __pageData,v as default};
