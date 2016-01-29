//Tests don't work!
//when user clicks go stop watch starts
//to pause stopwatch user clicks pause
//to resume stopwatch user clicks resume
//to reset user clicks reset

//Test cases

test( "elapsed time is initialised at 0", function() {
  deepEqual(elapsed, [0,0,0]);
});


test( "the watch starts counting from 0", function() {
  startTimer();

  setTimeout(function(){
    stopTimer();
  }, 5000);

  setTimeout(function(){
    equal( elapsed[0], 0);
    equal( elapsed[1], 0);
    equal( elapsed[2]-5, 0);
  }, 5001);
});
/*
test( "the watch should stop ticking when stop is clicked", function() {
  startTimer();


  stopTimer();



    deepEqual( timeStopped, [0,0,0]);

});
/*
  xtest( "the watch resumes counting from a specific point", function() {
    watch.startTimer();

    setTimeout(function(){
      watch.stopTimer();
    }, 5000);

    setTimeout(function(){
      watch.startTimer();
    }, 5002);

    setTimeout(function(){
      watch.stopTimer();
    }, 5003);

    setTimeout(function(){
      equal( watch.elapsed[0], 0);
    });

});
/*
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

test("on clicking ´stop´ the time elapsed should be calculated", function(assert){
  //start watch

  var done = assert.async();
  watch.startTimer();
  setTimeout(function(){
    watch.stopTimer();
    console.log("stop"+watch.stopTime); done();
  }, 5000);


  console.log("elpased"+watch.elapsed);


    assert.equal(watch.elapsed, 5000);


});
*/
