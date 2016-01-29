
  var elapsed=[0,0,0];
  var lastElapsed=[0,0,0];
  var nextStart=[0,0,0];
  var tick = "";

function startTimer() {
    document.getElementById("start").disabled = true;
    tick=setInterval(function(){
      var h = elapsed[0];
      var m = elapsed[1];
      var s = elapsed[2];

      var hDisplay = h;
      var mDisplay = m;
      var sDisplay = s;

        if (h <= 9) {
          hDisplay = "0" + h;
        }
        if (m <= 9) {
          mDisplay = "0" + m;
        }
         if (s <= 9) {
          sDisplay = "0" + s;
        }

        if(m >= 59 && s >= 59){
          h ++;
          m = 0;
          s = 0;
        }

        else if(s >= 59) {
          m++;
          s=0;
        } else {
          s++;
        }

      elapsed=[h,m,s];

      document.getElementById("timer").innerHTML = hDisplay + ":" + mDisplay + ":" + sDisplay;
    }, 1000);
}

  function stopTimer(){
    nextStart=elapsed;
    clearInterval(tick);
    document.getElementById("start").disabled = false;
}

  function resetTimer(){
    elapsed = [0, 0, 0];
    document.getElementById("timer").innerHTML = "00:00:00";
}
