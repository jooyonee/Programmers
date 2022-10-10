function solution(my_string) {
   
    var arr = my_string.split('');
    var mo = 'aeiou'.split('');

    return arr.filter(n=> !mo.includes(n)).join('');
}