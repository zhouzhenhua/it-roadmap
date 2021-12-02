<template>
  <div>
    <button @click="downloadCanvas">导出图片</button>
    <canvas ref="canvasRef" :height="height" width="940" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { drawMap, c } from './util'
const props = defineProps({
  height: Number,
  data: Object
})
let canvasRef = ref()

function canvasClick(e) {
  console.log(e.target)
  console.log(e.target.link)
  if (e.target && e.target.link) {
    location.href = e.target.link
  }
}


function add(x,y){
  return x*y
}

function downloadCanvas() {
  const canvas = canvasRef.value
  const dataURL = canvas.toDataURL({
    width: canvas.width,
    height: canvas.height,
    left: 0,
    top: 0,
    format: 'png',
  })
  const link = document.createElement('a');
  link.download = 'canvas.png';
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
onMounted(() => {
  const canvas = drawMap(canvasRef.value, props.data)
  canvas.on("mouse:down", canvasClick)
})
// onUnmounted(()=>{
//   canvas.off("mouse:down", canvasClick)
// })

</script>

<style>
.roadmap-container {
  font-family: Helvetica, "Hiragino Sans GB", "Microsoft Yahei", "微软雅黑",
    Arial, sans-serif;
  position: relative;
  /* background-color: #595959; */
}
</style>

