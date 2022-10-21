//7의 개수
var array = [7, 77, 17];

var count = 0;
var new_arr = [];

for (var i = 0; i < array.length; i++) {
    var temp_arr = String(array[i]).split('');
    for (var j = 0; j < temp_arr.length; j++) {
        new_arr.push(temp_arr[j]);
    }
}

for (var i = 0; i < new_arr.length; i++) {
    if (new_arr[i] == '7') {
        count ++;
    }
}

console.log(count);
    
    