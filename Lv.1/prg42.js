//OX퀴즈

var quiz = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"];

var answer= [];
    
    for (var i = 0; i < quiz.length; i++) {
        var arr = quiz[i].split(' ');
        
        if (arr[1] == "-") {
            answer.push(parseInt(arr[0]) - parseInt(arr[2]) == parseInt(arr[4]));
        }
        else if (arr[1] == "+") {
            answer.push(parseInt(arr[0]) + parseInt(arr[2]) == parseInt(arr[4]));
        }
    }
    
    for (var i = 0; i < arr.length; i++) {
        if (answer[i] == true) {
            answer[i] = "O";
        }
        else if (answer[i] == false) {
            answer[i] = "X";
        }
    }
console.log answer;