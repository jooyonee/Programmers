var denum1 = 1;
var num1 = 2;
var denum2 = 3;
var num2 = 4;

    var answer = [];
    
    //분모 최소공배수(x) 구하기

	var i = 1;
    while(true){
      if((i % num1 === 0) && (i % num2 === 0)){
        break;
      }
      i++;
      var mom = i;
    }
    
    var son = denum1*(mom/num1) + denum2*(mom/num2);

    //분모와 분자의 최대공약수(y) 구하기

    var i = 1;
    while(i <= mom && i <= son) {
        if (mom % i === 0 && son % i === 0) {
            var y = i;
        }
        i++;
    }
    
    son = son / y;
    mom = mom / y;

    
answer.push(son);
answer.push(mom);    
    
    console.log(answer);