//잘라서 배열로 저장하기

var my_str = "abc1Addfggg4556b";
var n = 4;

my_str = my_str.split('');

var answer = [];
    var num = parseInt(my_str.length / n);
    
    console.log(my_str.length);

    for (i = 0; i < my_str.length; i+=n) {
        console.log(i+ '/' + my_str.splice(i, n).join(''));
    }  //왜 안 되지? -> splice가 삭제를 해버린다.

    // console.log(answer);