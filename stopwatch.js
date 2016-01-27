//when user clicks go stop watch starts
//to pause stopwatch user clicks pause
//to resume stopwatch user clicks resume
//to reset user clicks reset


// Decalring a  Stopwatch func
function Stopwatch() {
  this.timeStarted = 0;
  this.startTime = 0;
  this.elapsed = 0;
  this.stopTime = 0;

  // Set start time to current time in miliseconds
  this.startTimer = function(){
      startTime = new Date().getTime();
    console.log(startTime);

  };

  // Set stop time to time stop btn cliecked and calculate the elapsed time in miliseconds
  this.stopTimer = function(){
    stopTime = new Date().getTime();
    elapsed += stopTime - startTime;
    console.log(elapsed);

    var sec = Math.floor(elapsed/1000);

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
