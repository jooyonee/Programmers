// 하샤드 수

const arr = 10;

var ar = arr.toString();

var str_arr = Array.from(ar);

var sum = 0;
for ( i=0; i<str_arr.length; i++) {
	sum += parseInt(str_arr[i]);
}

if (arr % sum === 0) {
	answer = true;
}
else {
	answer = false;
}

