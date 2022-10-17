//문자열 계산하기

var my_string = "1 - 20000 + 100 - 100 - 20000 + 199";

var cal_arr = my_string.split(' ');
    
var sum = 0;
var minus = 0;

    for (var i = 0; i < cal_arr.length; i++) {
        if (cal_arr[i] != '+' && cal_arr[i] != '-') {
            sum += parseInt(cal_arr[i]);
        }
        if (cal_arr[i] === '-') {
            minus += parseInt(cal_arr[i+1]);
        }
    }
    console.log(sum - (2 * minus));