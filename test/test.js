//Test cases

test( "stopwatch should start at 0", function() {
equal( T.timeStarted, 0);
});

test( "stopwatch should start from a specific point", function() {
equal( T.startTimer, 5);
});
