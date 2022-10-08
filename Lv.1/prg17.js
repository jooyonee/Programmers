// 외계행성의 나이
function solution(age) {

	var age_arr = Array.from(String(age));
    var alp = [...'abcdefghij'];

    var answer= [];
    for (var i = 0; i<age_arr.length; i++) {
        for (var j = 0; j<alp.length; j++) {
            if (parseInt(age_arr[i]) === j) {
				answer.push(alp[j]);
			    }
            }
        }
    return answer.join('');
}