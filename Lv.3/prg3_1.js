//등대

function binarySearch (target, dataArray) {  
    let low = 0;  
    let high = dataArray.length - 1;
    let index = 0;  
    while (low <= high) {    
        let mid = Math.floor((high + low) / 2);    
        let guess = dataArray[mid];     
        if (guess.includes(target)) {      
            return guess;
            } else if (guess > target) {      
                high = mid - 1;    
            } else {      
                low = mid + 1;    
            }    
            index++;    
        }  
        } //이진탐색



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
console.log(bridge1);



