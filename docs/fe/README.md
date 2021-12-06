# 介绍
<!-- ['❌','✅','🔥','⭐'] -->

## 关于这个图谱

你好，我是大圣，自由职业以后很多同学咨询我学编程路上的困惑，大部分都是方法不得要领，于是我就整理一下自己的知识体系，并且做成可以接受PR的思维导图，帮助你梳理正确的学习路线，减少编程路上的迷茫，先介绍这个图谱的特点和使用方法把, 

<roadmap :data="[
    {title:'大圣前端路线图',download:true,x:400,y:20},
    { title:'图谱特点',y:160,
    left:[
      ['完全开源',[-20],[
        ['托管Github']
      ]],
      ['数据驱动',[20],[
        ['组件渲染图标'],
        ['随时更新'],
      ]],
    ],
    right:[
      ['全员共建',[-20],[
        ['页面下方修改'],
        ['Github提PR'],
      ]],
      ['纯静态页面',[20],[
        ['不用关注'],
        ['不用登录'],
        ['✅没有套路'],
      ]],
    ],
  } ,
  { title:'学习难点',y:140,
    left:[
      ['入门方法不对',[
        ['实战优先']
      ]],
      ['成长满',[
        ['路线图构建'],
        ['🔥大厂知识体系']
      ]],
    ],
    right:[
      ['盲目追热点'],
      ['学习很孤独',[
        ['Github讨论区'],
        ['分享心得'],
        ['寻找队友'],
      ]],
      ['缺少软技能',[
        ['软硬都要抓',[20]]
      ]],
    ],
  } ,
  {title:'学习编程不迷路',y:100}
]" />

编程是一个非常有趣的技能，但是很多同学学习不得要领的原因如下

一个是你在入门阶段过于注重细节，编程和骑自行车一样是一个技能，我们如果刚开始学骑车的时候就买一本厚厚的《骑车权威指南》在家啃，哪怕你再有毅力，看完书也是不会骑车的，我们首先要做的就是拿到自行车后，掌握什么是车把和脚蹬子之后，先上去骑几圈，肯定会摔跤，这就是骑自行车入门最好的方式，编程亦是如此，入门阶段需要尽快实战演练，在练习中学习

第二个就是你入门之后，可能会被老板pua不停的做重复工作，成为了API工程师，导致很多年没有成长，尤其是很多同学还不是科班出身，没有经历过系统的计算机知识科班训练，我们这个时候需要学习需要知道大厂的解决方案，并且恶补计算机的科班知识，，如果以后写一个程序员修仙小说的话，算法数据结构、操作系统这些基础知识就是内力， 大厂的解决方案就是天级功法，这些都是升级必备的，我们需要学Typescript，单元测试，组件库等都是因为这个

第三个就是新手容易被眼花缭乱的新技术迷住，很多同学问我需不需要学Rust之类的问题，我统一的回复就是月薪低于40K先好好学Vue，React，算法这些内容，我把新手不需要追的热点技术整理在一起，以后工资高了再追

第四个就是自己学习是孤独的，很难坚持下去，我们提供了Gthub Discussions讨论社区，你可以在里面提问，找队友，记录自己的学习，也留下属于你的心路历程

第五个就是你已经掌握了大厂的技能，完全不愁工作，但是会被技术绑架自己，总觉得要和技术死磕到底，要知道骑车这件事入门很简单，但是想骑到奥运会，也是天赋和努力并存才可以，我们作为有技术特长的人，只要在努力建设这个国家就是好样的，职业生涯规划也是多样化的，我们这个时候需要注意软技能的训练啊，谈判、沟通、演讲、运营、产品、销售都是我们值得学习的技能

除了技术上的架构师道路，可以转技术管理，还可以去接单，去搞IT教育，去做开源都是很好的路线，职业生涯不一定只有增长，虽然现在国内互联网环境还存在35岁危机，大家不停的寻求晋升来摆脱焦虑，但我相信有一天国内也可以写一辈子代码，写代码产生用户价值本身就是一个伟大的事情

这个图谱每个系列也会分成好几部分，入门部分的目标就是能做出实际的产品，进阶的目标就是研究大厂解决方案，扩展视野，通用技能是所有程序员都需要掌握的技能，软技能，算法数据结构等，有些知识点我也会推荐质量比较高的专栏，我自己也会出一些付费的小课帮助你提高学习的效率，我后面的主要任务就是不断的在B站录制视频和写教程，让这个网站逐渐完善, 这也是我梳理自己技术体系的产出了

编程之路很有趣，愿大家都能找到自己的学习路线，实现可持续的职业成长，山底太挤，我们山顶见

2021-12-04 @ 北京

## 如何共建

文档是基于[Vuepress2](https://v2.vuepress.vuejs.org/)构建，图使用[Fabric.js](http://fabricjs.com/)绘制，通过Github Actions自动部署, 大家可以在右上角访问Github地址，或者访问每个页面下方的修改链接，随时通过PR的方式共建这个知识图谱，
Java，Python等岗位的知识图谱正在制作中，欢迎一起共建一个最好的计算机知识图谱

路线图的数据格式大家可以参考[docs/index.md](https://github.com/shengxinjing/it-roadmap/blob/main/docs/index.md)

这个网站会一直以静态的形式存在，不需要登录，不需要关注公众号，源码和文稿全部在Github，欢迎大家一起来提PR共建

文件夹docs下面就是全部的文档，roadmap组件负责渲染路线图，动态渲染 

免费的pdf资源正在收集中



<!-- [![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fshengxinjing%2Fit-roadmap%2Fbadge%3Fref%3Dmain&style=flat&label=%E9%83%A8%E7%BD%B2%E7%8A%B6%E6%80%81)](https://actions-badge.atrox.dev/shengxinjing/it-roadmap/goto?ref=main) -->

## 如何提问

大家直接去[![](https://img.shields.io/github/discussions/shengxinjing/it-roadmap?label=%E5%AD%A6%E4%B9%A0%E8%AE%A8%E8%AE%BA%E5%8C%BA&logo=github)](https://github.com/shengxinjing/it-roadmap/discussions)提问即可，或者加我微信 or 钉钉群讨论



<img src="/weixin.jpg" height="260">
<img src="/dingding.jpg" height="260" style="margin-left:100px;">

## 关于我

十年程序员，曾就职于百度，现在是自由职业，致力于做国内最好的IT讲师，正在计划带上媳妇和狗房车旅行，下面的视频可以更立体的了解我


[![Bilibili](https://img.shields.io/badge/dynamic/json?labelColor=FE7398&logo=bilibili&logoColor=white&label=B站&color=00aeec&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dbilibili%26queryKey%3D26995758)](https://space.bilibili.com/26995758)
[![Zhihu](https://img.shields.io/badge/dynamic/json?color=00aeec&labelColor=0066ff&logo=zhihu&logoColor=white&label=知乎&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dwoniuppp)](https://www.zhihu.com/people/woniuppp)
[![github follower](https://img.shields.io/github/followers/shengxinjing?style=social)](https://github.com/shengxinjing)










<iframe src="//player.bilibili.com/player.html?aid=415462414&bvid=BV1cV411Y77T&cid=260582709&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>


<iframe src="//player.bilibili.com/player.html?aid=890274095&bvid=BV1BP4y1a7WE&cid=401780485&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>