// 모스부호(1)

var letter = ".... . .-.. .-.. ---"; //예시

var letter_arr = letter.split(' ');
var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

var obj = {};
for (var i = 0; i<morse.length; i++) {
    obj[morse[i]] = alpha[i];
}

var answer = [];
for (var i = 0; i<letter_arr.length; i++) {
    for (var j = 0; j<morse.length; j++) {
        if (letter_arr[i] === Object.keys(obj)[j]) {
            answer.push(obj[Object.keys(obj)[j]]);
        }    
    }
}
console.log(answer);