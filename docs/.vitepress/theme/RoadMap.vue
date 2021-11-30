<template>
  <canvas ref="canvasRef" :height="height" width="900"  />
</template>

<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
import {drawMap,c} from './util'
const props = defineProps({
  height:Number
})
let canvasRef = ref()

let all = [
  { title:'编程学习之路',x:400,y:50 },
  {title:'HTML',y:200} ,
  { 
    title:'CSS', link:'/fe/css',
    x:100,
    left:[
        ['布局算法'],
        ['css架构']
    ],
    right:[
        ['选择器',[-50,50]],
        // ['选择器',[-50,50,20]],
        ['预编译']
    ]
    // children:[
    //   [
    //     c('布局算法',200],
    //     c('css架构',200),
    //   ],
      // [
      //   c('选择器',600),
      //   c('预编译',600,{},[
      //       c('sass',750),
      //       c('less',750),
      //       c('stylus',750),
      //       c('sass',750),
      //       c('sass',750)
      //   ])
      // ]
    // ]
  }
]
function canvasClick(e){
  console.log(e.target.link)

  if(e.target && e.target.link){

    location.href = e.target.link
  }
}
onMounted(()=>{
  const canvas = drawMap(canvasRef.value,all)
  canvas.on("mouse:down", canvasClick)

})
onUnmounted(()=>{
  canvas.off("mouse:down", canvasClick)
})

</script>

<style>
.roadmap-container {
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  position: relative;
  /* background-color: #8c8c8c; */
  padding-top: 60px;
}
</style>
