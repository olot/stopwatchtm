//when user clicks go stop watch starts
//to pause stopwatch user clicks pause
//to resume stopwatch user clicks resume
//to reset user clicks reset

// Decalring a  Stopwatch func
function Stopwatch() {
  var self = this;
  this.startTime = 0;
  this.elapsed = 0;
  this.stopTime = 0;
  this.tmp=[00,00,00];
  this.tick = "";


  // Set start time to current time in miliseconds
  this.startTimer = function(){


    self.tick=setInterval(function(){
      var h = self.tmp[0];
      var m = self.tmp[1]; //tmp.getMinutes();
      var s = self.tmp[2];

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
      self.tmp=[h,m,s];

      document.getElementById("timer").innerHTML = hDisplay + ":" + mDisplay + ":" + sDisplay;
    }, 1000);
  };


  // Set stop time to time stop btn cliecked and calculate the elapsed time in miliseconds
  this.stopTimer = function(){
    clearInterval(self.tick);
  };

  this.resetTimer = function(){
    self.tmp = [0, 0, 0];
      document.getElementById("timer").innerHTML = 0 + ":" + 0 + ":" + 0;
  };

}


// Create new Stopwatch
var watch = new Stopwatch();
