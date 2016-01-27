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
    elapsed = stopTime - startTime;
    console.log(elapsed);
  };


}

// Create new Stopwatch
var watch = new Stopwatch();
