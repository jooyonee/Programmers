//한 번만 등장한 문자
var s = "abcabcadc";

var arr = s.split('');
    var answer = [];
    
    var s_arr = [...new Set(s.split(''))];
    for(var i = 0; i < s_arr.length; i++) {
        var count = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == s_arr[i]) {
                count++;
            }
        }
        if (count == 1) {
            answer.push(s_arr[i]);
        }
    }

    console.log(answer.sort().join(''));