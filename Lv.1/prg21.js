//2차원으로 만들기

var num_list = [100, 95, 2, 4, 5, 6, 18, 33, 948];
var n = 3;

var answer = [];

console.log(num_list.length/n);

var index = 0;
for(var i = 0; i<num_list.length/n; i++) {
    answer.push(num_list.slice(index, index+(n)));
    index = index+n;
}

console.log(answer);