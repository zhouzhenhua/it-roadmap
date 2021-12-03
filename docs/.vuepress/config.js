module.exports = {
  title: '大圣编程路线图',
  description: '学编程的最佳实践.',
  bundler:'@vuepress/bundler-vite',
  // head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  head: [
    ['style', {},`
iframe{
  width:100%;
  height:500px;
}`]
  ],
  themeConfig:{
    contributorsText: '贡献者',
    lastUpdatedText:'上次更新',
    navbar:[
      {
        text:'前端',
        link:'/fe/'
      },
      {
        text:'常用工具',
        children:[
          {text:"正则表达式",link:"https://any86.github.io/any-rule/"},
          {text:"mdnice",link:"https://mdnice.com/"},
        ]
      },
      {
        text:'摸鱼必备',
        children:[
          {text:"在线街机",link:"https://www.yikm.net/"},
          {text:"在线看大熊猫",link:"http://live.ipanda.com/xmcd/"},
          {text:"知乎",link:"https://www.zhihu.com/people/woniuppp"},
          {text:"B站",link:"https://space.bilibili.com/26995758"},
          {text:"云旅游",link:"https://livechina.cctv.com/mlzg/index.shtml?spm=0.PiHRJ12Bw7m4.EVbEpxjQVGbO.4"},
        ]
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
          '/fe/framework.md',
          '/fe/typescript.md',
          '/fe/node.md',
          '/fe/fis.md',
          '/fe/arch.md',
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
      }
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
  }
}