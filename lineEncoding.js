function lineEncoding(s) {
    var arr = s.split('');
    var list = [];
    for (let i = 0; i < arr.length; i++) {
        count = 1;
        while (arr[i] == arr[i + 1] && i < arr.length) {
            i++;
            count++;
        }
        var obj = {};
        obj[arr[i]] = count;
        list.push(obj);

    }
    var str = '';
    list.forEach(obj => {
        var key = Object.keys(obj)[0];
        var value = obj[key];
        str += (value != 1 ? value : '') + key
    });
    return str;
}
console.log(lineEncoding('aabbbc'));