//Test cases

test( "stopwatch should start at 0", function() {
equal( watch.startTime, 0);
});

test( "elapsed time is initialised at 0", function() {
equal( watch.elapsed, 0);
});

test( "stoptime time is initialised at 0", function() {
equal( watch.stopTime, 0);
});

test( "on clicking start the startTime variable is set to the current date in milliseconds", function() {
  var d = new Date().getTime();
  d = Math.round(d/100)*100;
  watch.startTimer();
  equal(Math.round(watch.startTime/100)*100, d);
});

//startTicker test here TO DO

test("when user click stop, set the stoptime var to the current time", function(){
  var current = new Date().getTime();
  current = Math.round(current/100)*100;
  watch.stopTimer();
  equal(Math.round(watch.stopTime/100)*100, current);
});

test("", function(){
  setTimeout(function(){ alert("Hello"); }, 3000);
  equal(watch.elapsed, diff);
});
