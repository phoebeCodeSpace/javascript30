const keys = Array.from(document.querySelectorAll('.key'));
//监听按键事件
window.addEventListener('keydown',playSound);
//监听transition 结束事件
keys.forEach((key)=>{
  key.addEventListener('transitionend',removePlaying);
})


function playSound(event){
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if(!audio) return;    //处理无效按键事件

  key.classList.add('playing');
  audio.currentTime=0;    //音频进度归零
  audio.play();
}

function removePlaying(event){
  /* if (event.propertyName !== 'transform') return; */ // 这句话不要了
  event.target.classList.remove('playing')
}
