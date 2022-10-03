var array = [1, 2, 3, 3, 3, 4];

var arr = [...new Set(array)];
var count_arr = [];
for(var i = 0; i < arr.length; i++) {
    var count = 0;
    for (var j = 0; j < array.length; j++) {
        if (arr[i] === array[j]) {
            count++;
        }
    }
    count_arr.push(count);
}
var max = Math.max(...count_arr);
var j = count_arr.indexOf(max);

answer = arr[j];

for(var i = 0; i<arr.length; i++) {
    if (count_arr[i] === max && i != j) {
        answer = -1;
    }
}

console.log(answer);