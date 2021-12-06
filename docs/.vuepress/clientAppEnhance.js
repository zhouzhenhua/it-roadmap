
import { defineClientAppEnhance } from '@vuepress/client'

import RoadMap from './roadmap/RoadMap.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('roadmap', RoadMap)

  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ccf55dfd2764cf3ebf43d6b3c9da9b20";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  
    router.afterEach(function (to) {
      _hmt.push(['_trackPageview', to.fullPath])
    })
  }

})