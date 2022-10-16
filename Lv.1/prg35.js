//대문자와 소문자

var my_string = "cccCCC";

// my_string[i] = my_string[i].toUpperCase() -> 그냥 이렇게 하는건 기존 my_string배열에 변화가 가해지지 않음.
// 기본형에는 변화를 가해도 origin 에는 변화가 적용되지 않음!

var new_arr = [];

for (var i = 0; i<my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
        new_arr.push(my_string[i].toLowerCase());

    }
    else if (my_string[i] === my_string[i].toLowerCase()) {
        new_arr.push(my_string[i].toUpperCase());
        
    }
}

console.log(new_arr.join(''));