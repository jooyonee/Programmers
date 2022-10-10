//최댓값 만들기(1)

function solution(numbers) {
    numbers = numbers.sort(function(a, b) {
        return b-a;
    })
    return numbers[0]*numbers[1];
}