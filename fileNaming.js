function fileNaming(names) {
    var result = [];
    names.forEach(element => {
        name = generateFileName(element, result)
        result.push(name);
    });
    return result;
}

function generateFileName(name, arr) {
    var num = "";
    while (arr.indexOf(name) > -1) {
        var tempNum = name.match(/\d+/g);
        if (tempNum == null) {
            num = 1;
        } else {

            num = tempNum[tempNum.length - 1];
        }
        name = name + '(' + num + ')';
        arr.push(name);
        break;
    }
    return name;
}

fileNaming(["doc",
    "doc",
    "image",
    "doc(1)",
    "doc"])