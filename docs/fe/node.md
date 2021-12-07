# Node.js

<!-- ['❌','✅','🔥','⭐'] -->
Node.js的诞生让前端有了入侵后端的能力，也是前端开始繁荣的标志，现在前端之所以工资这么高，可以折腾自动化工具，开发Web后端，搞基建都基于Node带来的后端能力，现在前端已经离不开Node了，npm，vite，webpack，babel都基于Node，其他程序员对Node褒贬不一，但是不耽误我们好好学习Node去提高工资

没有Node之前的前端，就像是工地上负责装修的，后端盖好高楼大厦后，我们负责内部的硬装软装，提高用户体验，Node就像装修队学会了开后端的挖掘机，除了运送装修物料的速度变快了，我们前端装修队也可以用挖机去盖小楼了，虽然高楼大厦还是需要后端搞，但是四五层小楼和别墅（创业公司）的场景，前端自己就从盖楼到装修包圆了 这也是前端这几年工资高的原因

Node并不难，语法都是Javascript，难点在于我们没有后端思维以及不懂操作系统，Node执行在操作系统里，文件系统，网络协议，数据库等概念纯前端了解的不多， 业务需求也从实现布局变成自动化，文件读写，数据库读写等等，我们一起转变思维，好好拥抱Node把

<roadmap :data="[
  {title:'Node.js',download:true,x:400,y:20},
  { title:'入门', y:180,
    left:[
      ['安装Node'],
      ['IO'],
      ['进程'],
      ['网络',[
        ['net'],
        ['http'],
        ['rpc'],
      ]],
    ],right:[
      ['流'],
      ['测试'],
      ['调试'],
    ]
  } ,
{ title:'Web开发', y:300,
    left:[
      ['Web框架',[
        ['Koa'],
        ['Express'],
        ['Egg'],
        ['Nest.js'],
      ]],
      ['中间件'],
      ['日志'],
      ['模板'],
      ['监控',[
        ['alinode']
      ]],
      ['数据库',[
        ['mongodb'],
        ['mysql']
      ]],
      ['网络'],
      ['SSR'],
    ],right:[
      ['部署',[-80],[
        ['PM2'],
        ['Docker'],
      ]],
      ['常见功能开发',[-30],[
        ['登录注册'],
        ['邮件'],
        ['增删改查'],
        ['文件处理'],
      ]],
      ['实时应用'],
      ['安全',[20],[
        ['xss'],
        ['https'],
        ['csrf'],
      ]],
    ]
  } ,
  { title:'脚手架',
    y:320,
    left:[
      ['开发脚手架',[-30],[
        ['vue-cli'],
        ['cra'],
        ['umi'],
      ]],
      ['团队规范'],
      ['命令行交互',[30],[
        ['commander'],
        ['git-repo'],
        ['Inquirer'],
      ]],
    ],
    right:[
      ['工程化',[
        ['项目初始化'],
        ['开发'],
        ['联调'],
        ['部署'],
        ['监控'],
      ]],
    ]
  } ,
  { title:'微前端',
    y:220,
    left:[
      ['微前端特点',[-40],[
        ['独立部署'],
        ['技术栈无关'],
      ]],
      ['核心概念',[30],[
        ['应用加载器'],
        ['样式隔离'],
        ['JS沙箱'],
        ['应用通信'],
        ['部署'],
      ]],
    ],
    right:[
      ['single-spa'],
      ['qiankun'],
      ['garfish'],
      ['缺点'],
    ]
  } ,
{ title:'大型Node.js应用',
    y:220,
    left:[
      ['性能',[-30]],
      ['工程体系',[
        ['埋点'],
        ['线上监控'],
        ['报警'],
        ['压测'],
        ['服务降级'],
      ]]
    ],
    right:[
      ['保障体系'],
      ['高可用'],
    ]
  },{
    title:'热门业务场景',
    left:[
      ['基建'],
      ['CI/CD'],
      ['物料系统'],
    ],
    right:[
      ['中台'],
      ['serverless'],
      ['low code'],
    ]
  },
  { title:'书籍推荐', y:160,
    left:[
      ['深入浅出Nde.js'],
      ['Node.js实战'],
    ],right:[
      ['ddia'],
    ]
  } ,
  { title:'全栈能力',
  } 
]" />

## 文档
* [Node.js中文网](http://nodejs.cn/)
* [Egg.js官网](https://eggjs.org/zh-cn/intro/)
* [饿了么Node-interview](https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn)
* [如何正确的学习Node.js](https://github.com/i5ting/How-to-learn-node-correctly)
* [七天学会Node.js](http://nqdeng.github.io/7-days-nodejs/)
## 免费文章和教程
* [掘金| http缓存机制](https://juejin.cn/post/6844904116972421128)
* [掘金| 从0到1搭建前端异常监控系统](https://juejin.cn/post/6844904119136698381)
* [可视化Git](https://learngitbranching.js.org/?demo=&locale=zh_CN)
[掘金| 基于 qiankun 的微前端最佳实践（万字长文） - 从 0 到 1 篇](https://juejin.cn/post/6844904158085021704)
* [字节跳动是如何落地微前端的](https://juejin.cn/post/7016911648656982024)
* [知乎| 迈入现代 Web 开发](https://zhuanlan.zhihu.com/p/386607009)
## 书籍推荐

* [Node源码解析](https://11111-1252105172.cos.ap-shanghai.myqcloud.com/understand-nodejs%EF%BC%88%E5%B8%A6%E6%A0%87%E7%AD%BE%E7%89%88%EF%BC%89.pdf)
* [深入浅出Node.js(进阶)](https://book.douban.com/subject/25768396/)
* [设计数据密集型应用](https://book.douban.com/subject/30329536/)

## 免费视频

* [B站: 然叔天天造轮子-webpack](https://www.bilibili.com/video/BV1dV411p7gp?spm_id_from=333.999.0.0)
* [B站: 然叔天天造轮子-Vite](https://www.bilibili.com/video/BV1Df4y1n777?spm_id_from=333.999.0.0)
* [B站: 静态网站生成器smarty-press](https://www.bilibili.com/video/BV1Vb4y127RM?spm_id_from=333.999.0.0)
::: warning @todo
B站录制
:::
