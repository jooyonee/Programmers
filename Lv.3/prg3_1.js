var lighthouse = [[1, 2], [1, 3], [1, 4], [1, 5], [5, 6], [5, 7], [5, 8]];

var new_arr = [];
for (var i = 0; i < lighthouse.length; i++) {
    new_arr.push(lighthouse[i][0]);
    new_arr.push(lighthouse[i][1]);
}

var light_arr = [...new Set (new_arr)].sort((a, b) => {
    return a - b;
});

var bridge1 = [];
for (var i = 0; i < light_arr.length; i++) {
    var count = new_arr.filter(n => n === light_arr[i]).length;   // 다리가 하나만 연결된 등대 추출
    
    if (count === 1) {
        bridge1.push(i+1);
    }
}


var arr = [];
for (var i = 0; i < bridge1.length; i++) {
    for (var j = 0; j < lighthouse.length; j++) {
        if (lighthouse[j].includes(bridge1[i])) {
            arr.push((lighthouse[j].filter(n => n != bridge1[i])[0]));
        }
    }
}
console.log([...new Set (arr)].length);



