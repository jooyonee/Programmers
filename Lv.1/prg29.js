// 컨트롤 제트

var s = "10 Z 20 Z 1";

var answer = 0;

var s_arr = s.split(' ');
 

var i = 0;
while (i<s_arr.length) {
    if (s_arr[i+1] === 'Z') {
        s_arr.splice(i, 2);
        i = 0;
    }
    else {
        i ++;
    }
}

var answer = 0;
for (var i = 0; i<s_arr.length; i++) {
    answer += parseInt(s_arr[i]);
}

console.log(answer);


