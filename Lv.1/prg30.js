//삼각형의 완성조건(1)
var sides = [500, 999, 500];
var answer = ' ';


var max = sides[0];
for(var i = 0; i<sides.length; i++) {
    if(max < sides[i]) {
        max = sides[i];
    }
}
var max_i = sides.indexOf(max);
sides.splice(max_i, 1);

console.log(sides);

if (sides[0] + sides[1] > max) {
    answer =  1;
}
else {
    answer = 2;
}
console.log(answer);