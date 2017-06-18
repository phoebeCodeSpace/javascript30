var panels = document.querySelectorAll('.panel');   //获取panel的NodeList

panels.forEach(panel=>{panel.addEventListener('click',toggelClass)});  //监听点击事件

function toggelClass(){
  let siblings = [].filter.call(this.parentNode.children,child=>child!==this);   //获取兄弟元素
  siblings.forEach(item=>item.classList.remove('open'));
  this.classList.add('open');
}
