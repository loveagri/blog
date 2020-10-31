module.exports = {
    // host: '0.0.0.0',  // 生成网页地址（本地调试使用）
    // port: "22335", // 生成网页端口（本地调试使用）
    dest: './docs',
    title: "Loveagri", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
    description: "保持热爱", // meta 中的描述文字，用于SEO
    head: [
        ["link", {rel: "icon", href: "/favicon.svg"}], //浏览器的标签栏的网页图标,基地址/contents/.vuepress/public
        [
            "meta",
            {
                name: "viewport",
                content: "width=device-width,initial-scale=1,user-scalable=no",
            },
        ], //在移动端，搜索框在获得焦点时会放大
    ],
    theme: "reco", //选择主题‘reco’
    themeConfig: {
        type: "blog", //选择类型博客
        fullscreen: true,
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "分类", // 默认 “分类”
            },
            tag: {
                location: 9, // 在导航栏菜单中所占的位置，默认3
                text: "标签", // 默认 “标签”
            },
        },
        nav: require('./nav'),
        sidebar: "auto", //在所有页面中启用自动生成侧栏
        record: "冀ICP备19024518号-1",
        recordLink: "https://icp.chinaz.com/home/info?host=tsanfer.xyz",
        // cyberSecurityRecord: "川公网安备 51110202000301号",
        // cyberSecurityLink:
        //     "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51110202000301",
        startYear: "2020", // 项目开始时间，只填写年份
        lastUpdated: "最后更新时间", // string | boolean
        author: "地农",
        authorAvatar: "/avatar.svg", //作者头像
        mode: "light", //默认显示白天模式
        codeTheme: "okaidia", // default 'tomorrow'
        smooth: "true", //平滑滚动
        // 评论设置
        valineConfig: {
            appId: process.env.LEANCLOUD_APP_ID,
            appKey: process.env.LEANCLOUD_APP_KEY,
        },
    },
    markdown: {
        lineNumbers: true, //代码显示行号
    }, // 搜索设置
    search: true,
    searchMaxSuggestions: 10, // 插件
    plugins: [
        [
            "@vuepress-reco/vuepress-plugin-bgm-player", // BGM播放器
            {
                audios: [
                    {
                        name: "Forever",
                        artist: "PIKASONIC",
                        url: "https://cdn-image.tsanfer.xyz/music/forever%20mst.mp3",
                        cover:
                            "https://p1.music.126.net/LjXufn3OaIgf8OwaEP_xcQ==/109951164419438501.jpg",
                    },
                    {
                        name: "Life Of Sin Pt. 4",
                        artist: "MitiS",
                        url:
                            "https://cdn-image.tsanfer.xyz/music/MitiS%20-%20Life%20Of%20Sin%20Pt.%204.mp3",
                        cover:
                            "https://p2.music.126.net/LmjTrSwvSLSNBsfFsQFO6g==/2533274793491743.jpg",
                    },
                    {
                        name: "Sea Of Voices (RAC Mix)",
                        artist: "Porter Robinson",
                        url:
                            "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
                        cover:
                            "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
                    },
                    {
                        name: "New Lipstick",
                        artist: "The Kissaway Trail",
                        url:
                            "https://cdn-image.tsanfer.xyz/music/The%20Kissaway%20Trail%20-%20New%20Lipstick.flac",
                        cover:
                            "https://p2.music.126.net/VjN74c1hoYgPCEZ9DngeQw==/109951163772624643.jpg",
                    },
                ],
                autoShrink:true
            },
        ],
        [
            "social-share", //分享插件
            {
                networks: ["qq", "weibo", "twitter", "facebook", "email"], //分享类型
                email: "a1124851454@gmail.com", //email地址
                twitterUser: "a1124851454", //Twitter账号
            },
        ],
        [
            "@vuepress-reco/vuepress-plugin-rss", //RSS插件
            {
                site_url: "https://tsanfer.xyz", //网站地址
                copyright: "Tsanfer", //版权署名
            },
        ],
        ["flowchart"], // 支持流程图
        // ["vuepress-plugin-smooth-scroll"], // 平滑滚动
        ["@vuepress/nprogress"], // 加载进度条
        ["reading-progress"], // 阅读进度条
        ["vuepress-plugin-code-copy", true], //一键复制代码插件
    ],
};
