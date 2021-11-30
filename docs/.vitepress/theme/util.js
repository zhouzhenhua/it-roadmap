import {fabric} from 'fabric'
export const RECT = {
  w:120,
  h:40,
  bgColor:['#78c386','#e48484','#c28976'],// 语雀绘图的配色  绿=》红=》棕
  lineColor:'#69b1e4',
  textColor:'white',
  fontSize:16,
  origin:'center'
}


export function drawMap(dom, data){
  const rects = []
  const lines = []
  let lastRect

  for (let i = 1; i < data.length; i++) {
     data[i].x = data[i-1].x+(data[i].x||0)
     data[i].y = data[i-1].y+(data[i].y||100)
  }
  let canvas = new fabric.Canvas(dom,{
    containerClass:'roadmap-container',
    hoverCursor:'pointer',
    interactive:false, //禁止交互
    selection:false
  })
  data.forEach(item=>{
    const rect = drawRect(item)
    rect.link = item.link
    rects.push(rect)

    if(lastRect){
      lines.push(drawLine(lastRect,rect))
    }

    lastRect = rect

    const {left,right} = item
    traverse(rect,left,'left',1)
    traverse(rect,right,'right',1)

    function traverse(parent,children,direction,depth){
      if(!children) return 
      children = children.map(child=>c(...child))
      const len = children.length
      const isEven = !(len&1) //是不是偶数
      children.filter(v=>v).forEach((child,i)=>{
        if(direction=='left'){
          child.x = parent.left+child.x-250+depth*50

        }else{
          console.log(1,child)

          child.x = parent.left+child.x+150+depth*50

        }
        let y = child.y || (parent.top - (Math.floor(len/2)-i) *(RECT.h+10) )
        y+= isEven?RECT.h/2:0
        const subRect = drawRect({...child,y,depth})

        rects.push(subRect)
        const l = direction=='left' ? drawSubline(subRect,parent):drawSubline(parent,subRect)
        lines.push(l)
        if(child.children){
          // traverse(subRect,child.children,direction,depth+1)
        }
      })
    }

  })

  rects.forEach(rect=>canvas.add(rect))
  lines.forEach(line=>canvas.add(line))
  return canvas
}

function drawSubline(r1,r2){
  // 两个rect的连线
  const sx = r1.left + r1.width
  const sy = r1.top + r1.height / 2
  let dx, dy
  if(r1.left > r2.left){
    dx = r2.left - (r1.left-r2.left)/2
    dy = r1.top + (r2.top - r1.top) / 2
  }else{
    dx = r1.left + (r2.left+r1.width-r1.left)/2
    dy = r1.top + (r2.top - r1.top) / 2
  }

  const ex = r2.left
  const ey = r2.top + RECT.h / 2

  const line = new fabric.Path(`M ${sx} ${sy} Q ${dx},${dy},${ex},${ey}`,{
    fill: '',
    stroke: RECT.lineColor,
    strokeWidth: 2,
    strokeDashArray:[5,5]
  })
  return line
}
function drawRect(item){
  const {title,x,y,depth=0} = item
  const width = item.w?item.w : RECT.w-depth*15
  const height = item.h?item.h:RECT.h
  const {textColor,bgColor,fontSize,origin} = RECT
  const rect = new fabric.Rect({
    fill:bgColor[depth],
    originX:origin,
    originY:origin,
    rx:'5',
    shadow:'rgba(0,0,0,.2) 2px 2px 2px',
    width,
    height,
  })
  if(!title){
    console.log(123,item)
  }
  const text = new fabric.Text(title,{
    fill:textColor,
    originY:origin,
    originX:origin,
    fontWeight:'500',
    fontSize,
  })
  const group = new fabric.Group([rect,text],{
    left:x,
    top:y,
    lockMovementX:true,
    lockMovementY:true
  })
  if(item.link){
    group.link = item.link
  }
  return group
}
let lineDirection = 'left'

function drawLine(r1,r2){
  // 两个rect的连线
  const sx = r1.left + RECT.w / 2
  const sy = r1.top + RECT.h / 2

  const dx = lineDirection === 'left' ? r1.left-RECT.w/3 : r1.left+RECT.w
  const dy = r1.top + (r2.top - r1.top) / 2

  const ex = r2.left + RECT.w / 2
  const ey = r2.top + RECT.h / 2

  const line = new fabric.Path(`M ${sx} ${sy} Q ${dx},${dy},${ex},${ey}`, {
    fill: '',
    stroke: RECT.lineColor,
    strokeWidth: 3
  })
  lineDirection = lineDirection === 'left' ? 'right' : 'left'
  line.globalCompositeOperation = 'destination-over'
  return line
}
export function c(title,options,children){

  // [x,w,h]
  if(!options){
    // only title
    options = []
    children = []
  }else if(!children){
    if(typeof options[0]=='number'){
      // title any options
      children = []
    }else{
      // title and children
      children = options
      options = []
    }

  }

  const [x=0,w=120,h=40] = options
  const {bgColor, textColor} = RECT
  const ret = {
    title, x, w, h, bgColor, textColor,children
  }
  if(title=="选择器"){
    console.log(12344,ret)
  }
  return ret
}