<template>
  <Layout>
    <template #page-bottom>

      <p class="copyright">
        <img :src="badge" alt /> | Copyright © 京ICP备18000331号-1
      </p> 
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
  components: {
    Layout,
  },
  setup() {
    let badge = ref('')
    // const router = useRouter()
        // changeBadge()
// process.env.NODE_ENV === 'production' && 
    // if (typeof window !== 'undefined') {
    //   router.afterEach((to,from) => {
    //     if(to.hash){
    //       return 
    //     }
    //     if (from.path !== to.path) {
    //       changeBadge()
    //     }
    //   })
    //   changeBadge()
    // }
    function changeBadge() {
      // if (location.hostname === 'shengxinjing.cn') {
        badge.value = `https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${location.pathname}`
      // }
    }

    return { badge }
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: right;
  position: relative;
  padding-right:3px;
  height: 0;
  max-width: var(--content-width);
  margin: 0 auto;

}
.my-footer img {
  position: relative;
  top: -38px;
}
.copyright{
  text-align: center;
  line-height: 1;
  font-size:14px;
  margin:0;
}
.copyright img{
  vertical-align: middle;
}
</style>