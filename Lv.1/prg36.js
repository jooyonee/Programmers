//가까운 수
var array = [1, 100, 100, 100, 98]; //입출력 예
var n = 99;

var gap = [];
for (var i = 0; i<array.length; i++) {
    gap[i] = Math.abs(n - array[i]);
}

var same = [];
for (var i = 0; i<gap.length; i++) {
    if (Math.min(...gap) === gap[i]) {
        same.push(array[i]);
    }
} //처음부터 array를 오름차순으로 해주면 이 for문은 통으로 필요 없음..
console.log(Math.min(...same));

