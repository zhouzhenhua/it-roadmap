# 计算机网络
<!-* ['❌','✅','🔥','⭐'] -->
网络协议就是计算机之前聊天唠嗑的工具，就像我们人聊天也需要双方都学过普通话一样，网络协议是分层的，我们访问一个浏览器页面，DNS协议负责找到这个域名的门牌号地址，IP协议负责根据门牌号找到机器，TCP负责数据的完整和有序，HTTP就是前端应用层的协议，负责缓存等等

<roadmap :data="[
  {title:'计算机网络',download:true,x:400,y:20},
  { title:'协议分类', 
    left:[
      ['IP'],
      ['TCP',[
        ['FTP'],
        ['ssh'],
        ['http'],
      ]],
    ],
    right:[
      ['UDP',[
        ['DNS']
      ]],
    ]
  } ,
    { title:'TCP', 
    left:[
      ['数据分包'],
      ['数据有序'],
      ['数据完整'],
      ['三次我收'],
    ],
    right:[
      ['流量控制',[
        ['慢启动'],
        ['滑动窗口'],
        ['快速重传'],
      ]],
    ]
  } , { title:'HTTP', 
    left:[
      ['methods'],
      ['url'],
      ['header'],
      ['body'],
    ],
    right:[
      ['缓存'],
      ['cookie'],
      ['https'],
    ]
  } ,
  {title:'计算机怎么唠嗑'}
]" />


## 精品文章

* [How Does the Internet Work?](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
* [掘金| 图解 HTTP 缓存](https://juejin.cn/post/6844904153043435533)
* [TCP 的那些事儿（上）](https://coolshell.cn/articles/11564.html)
* [TCP 的那些事儿（下）](https://coolshell.cn/articles/11609.html)

## 免费视频
* [B站| 互联网是如何运作的？](https://www.bilibili.com/video/BV1Rz4y197Jd)
## 书籍推荐

* [图解TCP/IP](https://book.douban.com/subject/24737674/)
* [图解HTTP](https://book.douban.com/subject/25863515/)
* [网络是怎样链接的](https://book.douban.com/subject/26941639/)
* [HTTP权威指南](https://book.douban.com/subject/10746113/)

## 付费教程

* [极客时间| 趣谈网络协议](http://gk.link/a/10Qcu)