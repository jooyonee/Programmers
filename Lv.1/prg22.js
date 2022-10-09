//공 던지기

var numbers = [1, 2, 3, 4, 5];
var k = 7;


var answer= [];

var ball = 1;
for (var i = 1; i<=k; i++) {
    answer.push(ball);
    ball += 2;
    if (ball > numbers.length) {
        ball = ball % numbers.length;
    }
}

console.log(answer);

console.log(answer[answer.length-1]);
