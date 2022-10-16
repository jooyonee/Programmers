//369게임
var cipher = "dfjardstddetckdaccccdegk";
var code = 4;


var answer = [];
var arr = cipher.split('');

    for ( var i = 0; i<arr.length; i++) {
        if ((i+1) % code === 0) {
            answer.push(arr[i]);
        }
    }
console.log(answer.join(''));
