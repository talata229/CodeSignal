function deleteDigit(n) {
    var arr = Array.from(String(n), Number);
    // var temArr = Array.from(String(n), Number);
    var list = [];
    for (let i = 0; i < arr.length; i++) {
        temp = copyArr(arr);
        temp.splice(i, 1)
        list.push(+temp.join(''));
    }
    return Math.max(...list)
}
function copyArr(arr) {
    return arr.map(item => item);
}

deleteDigit(222219)