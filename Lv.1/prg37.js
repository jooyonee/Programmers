//369게임
var order = 29423;

const mySet = new Set([3, 6, 9]);

console.log(String(order).split('')
                         .filter(n => mySet.has((n))));

