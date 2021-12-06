<template>
  <div class="map-container">
    <button class="download-btn" @click="downloadCanvas">导出图片</button>
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
  if(e.target){
    if(e.target.download){
      downloadCanvas()
    }
    if(e.target.link){
      location.href = e.target.link
    }
  }
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
  link.download = `${canvas.title}-${Date.now()}.png`;
  link.href = dataURL;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
onMounted(() => {
  const canvas = drawMap(canvasRef.value, props.data)
  console.log(canvas)
  canvas.on("mouse:down", canvasClick)
})
// onUnmounted(()=>{
//   canvas.off("mouse:down", canvasClick)
// })

</script>

<style>
.map-container{
  position: relative;
}
h1{
  text-align: center;
}
.download-btn{
  position: absolute;
  right:39px;
  top:-20px;
  display: inline-block;
  margin-left:36px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: 0;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-color: transparent;
  color: #409eff;
  background: 0 0;
  padding-left: 0;
  padding-right: 0;
}
</style>

