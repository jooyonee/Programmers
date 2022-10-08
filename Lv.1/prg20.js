var balls = 8;
var share = 4;





var son = 1;
    for (var i = balls; i>share; i--) {
        son *= i;
    }
    console.log(son);

var mom = 1;
    for (var i = 1; i<=share; i++) {
        mom *= i;
    }
    console.log(mom);
    console.log(parseInt(son / mom));