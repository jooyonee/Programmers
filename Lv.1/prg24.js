//합성수 찾기

var n = 10;
var answer = [];
for (var i = 1; i <= n; i++) {
        var count = 0;
        for (var j = 0; j <= i; j++) {
            if (i % j == 0) {
                count ++;
            }
        }
    if (count >= 3) {
        answer.push(i);
        }
    }

    console.log(answer);


    
