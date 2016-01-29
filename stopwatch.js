//initilise variables
  var elapsed=[0,0,0];
  var lastElapsed=[0,0,0];
  var nextStart=[0,0,0];
  var tick = "";

function startTimer() {

    //disable start button once clicked
    document.getElementById("start").disabled = true;
    //create tick function so that time updates every 1000ms (1 second)
      //h stands for hours. Set h to the first item of the elapsed array
      //m stands for minutes. Set m to the second item of the elapsed array
      //s stands for seconds. Set s to the third item of the elapsed array
    tick=setInterval(function(){
      var h = elapsed[0];
      var m = elapsed[1];
      var s = elapsed[2];

      var hDisplay = h;
      var mDisplay = m;
      var sDisplay = s;

      //hours, mins and secs should be prefixed with 0 if less than 10
        if (h <= 9) {
          hDisplay = "0" + h;
        }
        if (m <= 9) {
          mDisplay = "0" + m;
        }
         if (s <= 9) {
          sDisplay = "0" + s;
        }
      //increment hour when mins >=59
        if(m >= 59 && s >= 59){
          h ++;
          m = 0;
          s = 0;
        }
        //increment mins when secs >=59
        else if(s >= 59) {
          m++;
          s=0;
        } else {
          s++;
        }

      //update elpased time
      elapsed=[h,m,s];

      //update html with new values for hours, mins, secs
      document.getElementById("timer").innerHTML = hDisplay + ":" + mDisplay + ":" + sDisplay;
    }, 1000);
}

  function stopTimer(){
    //stop ticking
    nextStart=elapsed;
    console.log(nextStart);
    clearInterval(tick);
    document.getElementById("start").disabled = false;
}

  //rest clock to 00:00:00. Reset elapsed array to [0,0,0]
  function resetTimer(){
    elapsed = [0, 0, 0];
    document.getElementById("timer").innerHTML = "00:00:00";
}
