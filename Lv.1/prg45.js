//직사각형 넓이 구하기

function solution(dots) {
    var a = dots[0][0];
    for (var i = 0; i < dots.length; i++) {
        if (dots[i][0] != a) {
            var x = Math.abs(a - dots[i][0]);
        }
    }
    var b = dots[0][1];
    for (var i = 0; i < dots.length; i++) {
        if (dots[i][1] != b) {
            var y = Math.abs(b - dots[i][1]);
        }
    }
    return x * y;   
}