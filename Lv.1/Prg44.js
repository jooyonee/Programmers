//잘라서 배열로 저장하기

var my_str = "abc1Addfggg4556b";
var n = 1;


var answer = [];
    var num = parseInt(my_str.length / n);
    
    for (i = 0; i <= num; i++) {
        
        var ele = [];
        for (j = 0; j < n; j++) {
            ele.push(my_str[i*n + j]);
        }
        ele = ele.filter(n => n != undefined);
        answer.push(ele.join(''));
        answer = answer.filter(n => n != '');
    }

    console.log(answer);