//진료순서 정하기

var emergency = [3, 76, 24];

var arr2 = emergency.slice();


//오름차순으로 arr2변형
var arr = arr2.sort(function(a, b) {
    a-b;
});

console.log(arr);

