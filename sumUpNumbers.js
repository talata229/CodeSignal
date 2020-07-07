function sumUpNumbers(inputString) {
    var arr = inputString.match(/\d+/g)
    if (arr == null) return 0;
    arr = arr.map(item => +item);
    return arr.reduce((pre, cur) => pre + cur);
}