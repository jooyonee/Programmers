// 피자 나눠 먹기 (2)

const n = 4;

var i = 1;
while(true) {
    if(i%n === 0 && i%6 ===0) {
        var min_com = i;
        break;
    }
    i++;
}
console.log(min_com);
console.log(min_com / 6);
