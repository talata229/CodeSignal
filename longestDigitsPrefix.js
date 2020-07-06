function longestDigitsPrefix(inputString) {
    if (/\W/g.test(inputString))
        return "";
    var arr = inputString.match(/\d+/g);
    if (!arr)
        return ""
    return arr[0];
}
longestDigitsPrefix("1av122");