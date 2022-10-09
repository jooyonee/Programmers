//배열 회전시키기

var numbers = [1, 2, 3];
var direction = "right";

if (direction == "right") {
    var last = numbers[numbers.length-1];
    for (var i = numbers.length-1; i>=0; i--) {
        numbers[i] = numbers[i-1];
    }
    numbers[0] = last;
}

if (direction == "left") {
    var first = numbers[0];
    for (var i = 0; i<numbers.length; i++) {
        numbers[i] = numbers[i+1];
    }
    numbers[numbers.length-1] = first;
}

console.log(numbers);