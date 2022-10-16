//영어가 싫어요

var numbers = "onefourzerosixseven";
// var numbers = numbers.split('');

var num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = [];

    var i = 0;
    while (numbers.length != 0) {
        var ind = numbers.indexOf(num[i]);
        console.log(numbers);

        numbers = numbers.toString().split(',');

        if (ind != -1) {
            numbers.splice(ind, num[i].length);
            answer.push(i);
        }
        i++;
        numbers.join('');
        console.log(numbers);

    }
console.log(answer);
//     var ind = numbers.indexOf(num[1]);
//     var numbers = numbers.split('');
//     var arr = numbers.splice(ind, num[1].length);

    

// console.log(numbers);