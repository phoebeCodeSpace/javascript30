//创建绘画环境：
const canvas = document.getElementById('draw');
const ctx = canvas.getContext("2d");

//调色盘
ctx.strokeStyle="hsl(0, 100%, 50%)";    //线条颜色
ctx.lineCap="round";          //笔触形状
ctx.lineJoin="round";         //线条相交形状
ctx.lineWidth=50;             //线条宽度

//笔触初始位置
let lastX=0,
    lastY=0;
//绘画状态标记，初始为false
let isDrawing=false;
//初始色值
let hsl = 0;
//控制线条粗细,true加粗，false变细
let direction = true;

//绘画
function draw(e){
  if(!isDrawing) return false;

  //颜色渐变
  ctx.strokeStyle = `hsl(${hsl},100%,50%)`
  hsl++;
  if(hsl>360){
    hsl=0;
  }
  //线条粗细渐变
  if(ctx.lineWidth>=80 || ctx.lineWidth <= 20){ //最粗80，最细20
    direction = !direction
  }
  if(direction){
    ctx.lineWidth++
  }else{
    ctx.lineWidth--
  }

  //绘制过程
  ctx.beginPath();
  ctx.moveTo(lastX,lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //笔触位置
  [lastX,lastY] = [e.offsetX,e.offsetY];
}


//监听鼠标移动时的绘画
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e)=>{
  isDrawing=true;
  [lastX,lastY] = [e.offsetX,e.offsetY];
});
canvas.addEventListener('mouseup', ()=>{
  isDrawing=false;
});
canvas.addEventListener('mouseout', ()=>{
  isDrawing=false;
});
