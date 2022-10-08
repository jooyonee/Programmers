//진료순서 정하기

var emergency = [3, 76, 24];

var arr2 = emergency.slice();


//오름차순으로 arr2변형
var arr = arr2.sort(function(a, b) {
    return a-b;
});

var answer = [];
for (var i = 0; i<arr.length; i++) {
    for (var j = 0; j<arr.length; j++) {
        if (emergency[i] === arr[j]) {
            answer.push(j+1);
        }
    }
}
console.log(answer);
