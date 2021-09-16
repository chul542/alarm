function showTime(){
  let i = 1;
  timeID = setInterval(showTime1,1000)
  function showTime1 () {
    i++
    console.log(i);
    if (i == 10){
      console.log('outoutout');
      clearInterval(timeID);
    }
  }
}

showTime()