// 다항식 더하기   --고려해야 할 사항이 많았음. **자료형의 중요성
// 1. x계수가 생략됐을 때
// 2. 상수가 0 일때
// 3. 다 계산했더니 x 계수가 0일때
// 4. x계수가 두자릿수 일때


var polynomial = '1 + 0 + x';

var arr = polynomial.split(' + ');
console.log(arr);

var x_arr = [];
var num_arr = [];
    
    for (var i = 0; i < arr.length; i++) {
        if(arr[i].includes('x') === true) {
            x_arr.push(arr[i]);
            } else {
                num_arr.push(arr[i]);
            }
        }

    //계수    
    var x_num = 0;
    for ( var i = 0; i < x_arr.length; i++) {
        if (x_arr[i] === 'x') {
            x_num += 1;
        } else {
        x_arr[i] = x_arr[i].replace('x', "")
        x_num += parseInt(x_arr[i]);
        }
    }

    //상수
    var num = 0;
    for (i = 0; i < num_arr.length; i++) {
        num += parseInt(num_arr[i]);
    }

    
    var answer = '';
    if (x_num != 1) { 
    answer = x_num + 'x' + ' + ' + num;
        if (num === 0) {
            answer = x_num + 'x';
        }
        if (x_num === 0) {
            answer = num;
        }
    } else {
        answer = 'x' + ' + ' + num;
        if (num === 0) {
            answer = 'x';
        }
    }
    console.log(String(answer));

    
    
    


