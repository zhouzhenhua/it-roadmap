<template>
  <Layout>
    <template #page-bottom>
      <div class="my-footer">
        <img :src="badge" alt="">
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import {ref,onMounted} from 'vue'
export default {
  components: {
    Layout,
  },
  setup(){
    let badge = ref('')

    onMounted(()=>{
      if(location.hostname==='shengxinjing.cn'){
        console.log(badge)
        badge.value = `https://visitor-badge.glitch.me/badge?page_id=shengxinjing-cn.${location.pathname}`
      }
    })
    return {badge}
  }
}
</script>

<style lang="css">
.my-footer {
  text-align: center;
  position: relative;
  height:0px;
}
.my-footer img{
  position: relative;
  top:-38px;
}
</style>