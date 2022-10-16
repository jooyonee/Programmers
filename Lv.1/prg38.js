//영어가 싫어요

var numbers = "oneone";

var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    

    var answer = [];
    for(var i = 0; i < num.length; i++) {
        if ( numbers.indexOf(num[i]) != -1) {
            answer[numbers.indexOf(num[i])] = i;

        }
        
    }
    console.log(answer.join(''));


// //첫번째 풀이**
    var answer = [];
    var i = 0;
    while (numbers.length > 0) {
        var ind = numbers.indexOf(num[i]);
        // console.log(ind);
        numbers = numbers.toString().split('');
        // console.log('2번: ' + numbers);

        if (ind != -1) {
            var arr = numbers.splice(ind, num[i].length);
            console.log(arr); //삭제하는 녀석
            // console.log('3번: '+ numbers);
            answer.push(i);
        }
        i++;
        numbers = numbers.join('');
    }


    console.log(answer.join(''));


