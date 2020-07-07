function buildPalindrome(st) {
    var reversed = st.split("").reverse().join('');
    var result = st;
    var i = 1;
    while (!isPalindrome(result)) {
        result = st + reversed.substring(reversed.length - i, reversed.length);
        i++;
    }

    return result;
}


function isPalindrome(str) {
    return str == str.split("").reverse().join('');
}

console.log(buildPalindrome('abb'));