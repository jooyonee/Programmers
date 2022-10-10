//팩토리얼
var n = 2;
answer= 0;
for (var i = 1; i<=n; i++) {
        
    var multi = 1;
    for (var j = 1; j<= i; j++) {
        multi *= j;
    }
    if (multi >= n) {
        if (multi === n) {
            answer = i;
        } else {
            answer = i-1;
        }
        break;
    }
}
console.log(answer);