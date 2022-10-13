// 문자열 정렬하기

var my_string = "p2o4i8gj2";
var str_arr = my_string.split('');

for(var i = 0; i<str_arr.length; i++) {
    str_arr[i] = Number(str_arr[i]);
}
var num_arr = str_arr.filter(n => isNaN(n) === false);
