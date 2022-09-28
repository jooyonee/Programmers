// 문자열 내 p와 y의 개수
var s = "pPoooyY";
var s2 = s.toUpperCase();
let arr = Array.from(s2);

let p_arr = [];
let y_arr = [];

for (var i = 0; i < arr.length; i++) {
	if (arr[i] === 'P') {
		p_arr.push(arr[i]);
	}
	if (arr[i] === 'Y') {
		y_arr.push(arr[i]);
	}
}
if (p_arr.length === y_arr.length) {
	answer = 'True';
}

if (p_arr.length === 0 && y_arr.length === 0) {
	answer = 'False';
}

else {
	answer = 'False';
}