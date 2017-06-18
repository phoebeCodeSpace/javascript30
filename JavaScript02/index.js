  const secHand = document.querySelector('.sec-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  let timer = null;
  let secondDeg = 0, minDeg = 0, hourDeg = 0;

  initDate();
  start();

  function initDate(){
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    //console.log(`hour:${hour}, min:${min}, sec:${sec}` );

    secondDeg = (360 / 60) * sec - 90;
    minDeg = (360 / 60) * min + (360 / 60 / 60) * sec - 90;
    hourDeg = (360 / 12) * hour + (360 / 12 / 60) * min + (360 / 12 / 60 / 60) * sec  - 90;
    setDate(secondDeg,minDeg,hourDeg);

  }

  function updateDate() {
    secondDeg += 360 / 60 ;
  	minDeg += 360 / 60 / 60;
  	hourDeg += 360 / 12 / 60 / 60 ;
    setDate(secondDeg,minDeg,hourDeg);
    start()
  }

  function setDate(secondDeg,minDeg,hourDeg){
    secHand.style.transform = `rotate(${ secondDeg}deg)`;
  	minsHand.style.transform = `rotate(${ minDeg }deg)`;
  	hourHand.style.transform = `rotate(${ hourDeg }deg)`;
  }

  function start(){
    timer = setTimeout(function(){
      updateDate()
    },1000)
  }
