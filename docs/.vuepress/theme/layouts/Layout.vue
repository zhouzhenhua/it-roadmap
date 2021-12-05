<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">
        <img :src="badge" alt />
      </div>
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
    const router = useRouter()
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      router.afterEach((to,from) => {
        if(to.hash){
          return 
        }
        if (from.path !== to.path) {
          changeBadge()
        }
      })
      function changeBadge() {
        if (location.hostname === 'shengxinjing.cn') {
          badge.value = `https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${location.pathname}`
        }
      }
      onMounted(() => {
        changeBadge()
      })
    }


    return { badge }
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
  position: relative;
  height: 0px;
}
.my-footer img {
  position: relative;
  top: -38px;
}
</style>