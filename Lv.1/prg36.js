//가까운 수
var array = [1, 100, 100, 100, 98]; //입출력 예
var n = 99;

var gap = [];
for (var i = 0; i<array.length; i++) {
    gap[i] = Math.abs(n - array[i]);
}
console.log(gap);
var same = [];
for (var i = 0; i<gap.length; i++) {
    if (Math.min(...gap) === gap[i]) {
        same.push(array[i]);
    }
}
console.log(Math.min(...same));

