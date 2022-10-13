//컨트롤 제트

var s = "0 1 4 9 Z Z 3";

var answer = 0;

var s_arr = s.split(' ');
 
for (var i = 0; i<s_arr.length; i++) {
    if (s_arr[i+1] === 'Z') {
        s_arr.splice(i, 2);
        i = 0;
    }
}
var answer = 0;
for (var i = 0; i<s_arr.length; i++) {
    answer += parseInt(s_arr[i]);
}

console.log(answer);