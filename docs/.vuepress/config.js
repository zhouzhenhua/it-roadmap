const { path } = require('@vuepress/utils')

module.exports = {
  title: '大圣前端编程自学网',
  description: '学前端的最佳实践.',
  bundler:'@vuepress/bundler-vite',
  theme: path.resolve(__dirname, './theme'),
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  head: [

    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/logo.ico`,
      },
    ],
    // ['style', {},``]
  ],
  markdown:{
    linkify:true
  },
  plugins:['@vuepress/search','@vuepress/debug'],
  themeConfig:{
    logo:"/logo.png",
    contributors:false,
    contributorsText: '贡献者',
    lastUpdatedText:'上次更新',
    notFound:['这就戳碰到我知识的盲点了'],
    editLinkText:"编辑页面",
    docsRepo:"https://github.com/shengxinjing/it-roadmap",
    docsBranch:"main",
    docsDir:"docs",
    navbar:[
      '/fe/',
      {
        text:'常用工具',
        children:[
          {text:'时钟',link:"https://pandafe.gitee.io/clock/"},
          {text:'正则可视化',link:"https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24"},
          {text:"mdnice",link:"https://mdnice.com/"},
          {text:'时间轴工具',link:"https://time.graphics/editor"},
          {text:'扁平配图unDraw',link:"https://undraw.co/illustrations"},
          {text:'创客贴做海报',link:"https://www.chuangkit.com/"},
          {text:"正则表达式",link:"https://any86.github.io/any-rule/"},
          {text:'图片清除背景',link:"https://remove.bg/"},
          {text:'小徽章',link:"https://shields.io/"},
          {text:'数据结构/算法动态可视化',link:"https://visualgo.net/zh"},
          {text:'AST Explorer',link:"https://astexplorer.net/"},
        ]
      },
      {
        text:'摸鱼必备',
        children:[
          {text:"在线街机",link:"https://www.yikm.net/"},
          {text:"假装更新系统",link:"https://fakeupdate.net/"},
          {text:"在线看大熊猫",link:"http://live.ipanda.com/xmcd/"},
          {text:"知乎",link:"https://www.zhihu.com/people/woniuppp"},
          {text:"B站",link:"https://space.bilibili.com/26995758"},
          {text:"云旅游",link:"https://livechina.cctv.com/mlzg/index.shtml?spm=0.PiHRJ12Bw7m4.EVbEpxjQVGbO.4"},
          {text:'云游故宫',link:"https://www.dpm.org.cn/yygg.html"},
        ]
      },
      'support.md',
      {
        text:'提问',
        link:"https://github.com/shengxinjing/it-roadmap/discussions"
      },
      {
        text:'Github',
        link:"https://github.com/shengxinjing/it-roadmap"
      },
    ],
    sidebar:[
      '/fe/README.md',

      {
        text:'入门实战',
        children:[
            '/fe/css.md',
            '/fe/Javascript.md',
            '/fe/project.md',
            '/fe/interview.md',
            '/fe/server.md',
        ]
      },{
        text:'实战进阶',
        children:[
          '/fe/vue.md',
          '/fe/react.md',
          // '/fe/framework.md',
          '/fe/typescript.md',
          '/fe/node.md',
          '/fe/fis.md',
          '/fe/arch.md',
          '/fe/perf.md',
          '/fe/browser.md',
        ]
      },{
        text:'通用技能',
        children:[
          '/it/soft.md',
          '/it/internet.md',
          '/it/algorithm.md',
        ]
      },{
        text:'用到再学',
        children:[
          '/fe/miniapp.md',
          '/fe/app.md',
          '/fe/hot.md'
        ]
      },
      'support.md',
    ]
    // sidebar:{
    //   '/fe':[
    //     {
    //       text:'入门实战',
    //       children:[
    //         '/fe/README.md',
    //         '/fe/css.md',
    //         '/fe/Javascript.md',
    //         '/fe/project.md',
    //         '/fe/interview.md',
    //         '/fe/server.md',
    //         '/fe/vue.md',
    //         '/fe/react.md',
    //         '/fe/framework.md',
    //         '/fe/typescript.md',
    //         '/fe/node.md',
    //         '/fe/fis.md',
    //         '/fe/miniapp.md',
    //         '/fe/arch.md',
    //         '/fe/browser.md',
    //         '/fe/app.md',
    //         '/fe/hot.md'
    //       ]
    //     },
    //     {
    //       text:'进阶',
    //       children:[]
    //     },
    //     {
    //       text:'通用技能'
    //     }
    //   ],
    //   '/it':[
    //     {
    //       text:'通用技能',
    //       children:[
    //         '/it/soft.md',
    //         '/it/internet.md',
    //         '/it/algorithm.md',
    //       ]
    //     }
    //   ]
    // }
    // https://shadiao.app/#
  }
}
