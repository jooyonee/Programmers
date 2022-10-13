//컨트롤 제트

var s = "0 1 4 9 Z Z";

var answer = 0;

var s_arr = s.split(' ');
 
for (var i = 0; i<s_arr.length && s_arr != 'Z'; i++) {
    

    answer += s_arr[i];

    if(s_arr[i+1] === 'Z') {
        answer -= s_arr[i];
    }
}

console.log(answer);