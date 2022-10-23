//다항식 더하기
var polynomial = 'x + x + x';


var arr = polynomial.split(' + ');

var sangsu = 0;
var gyesu = 0;

for (var i = 0; i < arr.length; i++) {
    var new_arr = arr[i].split('');
    console.log(new_arr);
    
    if (new_arr[1] === 'x' && new_arr[0] != 0) {
        gyesu += parseInt(new_arr[0]);
    }
    if (new_arr[0] === 'x') {
        gyesu ++;
    }
    if (new_arr[0] != 'x' && new_arr[1] != 'x') {
        sangsu += parseInt(new_arr[0]);
    }
}


console.log(sangsu);
console.log(gyesu);



