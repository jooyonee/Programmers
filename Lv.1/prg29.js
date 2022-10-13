//컨트롤 제트

var s = "0 1 4 9 Z Z";

var answer = 0;

var s_arr = s.split(' ');
 
for (var i = 0; i<s_arr.length; i++) {
    
    var j = 0;
    while(s_arr[i] != 'Z' && j<s_arr.length) {
        answer += parseInt(s_arr[i]);

        if(s_arr[i+1] === 'Z') {
            answer -= parseInt(s_arr[i]);
        }
        j++;
    }
    
}

console.log(answer);