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
        changeBadge()

    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      router.afterEach((to,from) => {
        if(to.hash){
          return 
        }
        if (from.path !== to.path) {
          changeBadge()
        }
      })
      onMounted(() => {
        changeBadge()
      })
    }
      function changeBadge() {
        if (location.hostname !== 'shengxinjing.cn') {
          badge.value = `https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${location.pathname}`
        }
      }

    return { badge }
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: right;
  position: relative;
  padding-right:40px;
  height: 12px;
}
.my-footer img {
  position: relative;
  top: -38px;
}
</style>