const inputs = document.querySelectorAll('.controls input');
inputs.forEach((item)=>{
  item.addEventListener('change',updateView);     //监听input值改变
  item.addEventListener('mousemove',updateView);  //监听鼠标移动
})
function updateView(){
  console.log(this.dataset);
  const suffix = this.dataset.suffix || ''; //获取后缀值
  document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}
