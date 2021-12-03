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
.map-container{
  position: relative;
}
h1{
  text-align: center;
}
.download-btn{
  position: absolute;
  right:39px;
  top:-55px;
  margin-left:30px;
    display: inline-block;
    margin-left:36px;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #83afdb;
    border: 1px solid #dcdfe6;
    color: #fff;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
</style>

