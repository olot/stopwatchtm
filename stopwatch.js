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

  // Set start time to current time in miliseconds
  this.startTimer = function(){
    self.startTime = new Date().getTime();
    console.log(self.startTime);
  };

  this.startTicker = function(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    document.getElementById("timer").innerHTML = h + ":" + m + ":" + s;
    setTimeout(function(){this.startTicker(); }, 500);
  };

  // Set stop time to time stop btn cliecked and calculate the elapsed time in miliseconds
  this.stopTimer = function(){
    self.stopTime = new Date().getTime();
    self.elapsed += self.stopTime - self.startTime;
    console.log(self.elapsed);

    var sec = Math.floor(self.elapsed/1000);

    /*seconds*/
    var s = sec%60;

    /*hours*/
    var hr = Math.floor(sec/3600);

    /*mins*/
    var min = sec%3600;
    var m= Math.floor(min/60);
    console.log([hr,m,s]);

  };

  this.resetTimer = function(){
    startTime = 0;
    elapsed = 0;
    stopTime = 0;
    console.log(startTime, elapsed, stopTime);
  };

}


// Create new Stopwatch
var watch = new Stopwatch();
