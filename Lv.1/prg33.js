//최댓값 만들기(2)
var numbers = [0, -31, 24, 10, 1, 9];

var arr = numbers.sort((a, b) => {
    return b - a;
});

var max = arr[0] * arr[1];
var max2 = arr[arr.length-1] * arr[arr.length-2];

if (max >= max2) {
    console.log(max);
}
if (max2 >= max) {
    console.log(max2);
}
