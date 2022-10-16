//인덱스 바꾸기

var my_string = "hello";
var num1 = 1;
var num2 = 2;

var str_arr = Array.from(my_string);
var box = str_arr[num1];
str_arr[num1] = str_arr[num2];
str_arr[num2] = box;

console.log(str_arr.join(''));