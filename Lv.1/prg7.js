// 자연수 뒤집어 배열로 만들기

var n = 12345;
var str = String(n);
var arr = Array.from(str);
	arr = arr.reverse();

for (var i = 0; i<arr.length; i++) {
	arr[i] = parseInt(arr[i]);
}
console.log(arr);
