//캐릭터의 좌표

var keyinput = ["down", "down", "up", "up", "up", "down", "down"];
var board = [5, 5];

    var x = 0;
    var y = 0;

var limit_x = parseInt(board[0] / 2);
var limit_y = parseInt(board[1] / 2);
console.log(limit_x);
console.log(limit_y);
    
for (var i = 0; i < keyinput.length; i++) {

    if (keyinput[i] === "left") {
        if (Math.abs(x) >= limit_x) {
            x++;
        }
        x--;
        console.log('왼쪽');
    }
    if (keyinput[i] === "right") {
        if (Math.abs(x) >= limit_x) {
            x--;
        }
        x++;
        console.log('오른쪽');
    }
    if (keyinput[i] === "up") {
        if (Math.abs(y) >= limit_y) {
            y--;
        }
        y++;
        console.log('위로');
    }
    if (keyinput[i] === "down") {
        if (Math.abs(y) >= limit_y) {
            y++;
        }
        y--;
        console.log('아래로');
    }
    console.log([x, y]);
    
}

// if (Math.abs(x) > board[0] / 2) {
//     console.log('넘어감');
//     var x1 = x;
//     x = parseInt(board[0] / 2);
//     if ( x1 < 0) {
//         x *= -1;
//     }
// }
// if (Math.abs(y) > board[0] / 2) {
//     console.log('넘어감');
//     var y1 = y;
//     y = parseInt(board[1] / 2);
//     if ( y1 < 0) {
//         y *= -1;
//     }
// }

console.log('결과는', [x, y]);

