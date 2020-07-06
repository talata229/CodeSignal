function countArr(inputString) {
    var arrCharacter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var arr = [...inputString];
    var map = arr.reduce((obj, cur) => { obj[cur] = ++obj[cur] || 1; return obj }, {})
    arrCharacter.forEach(element => {
        if (typeof map[element] == 'undefined') {
            map[element] = 0;
        }
    });
    const sortObject = Object.keys(map).sort().reduce((r, k) => (r[k] = map[k], r), {})
    var values = Object.keys(sortObject).map(key => sortObject[key]);
    for (let index = 0; index < values.length - 1; index++) {
        if (values[index] < values[index + 1])
            return false;
    }
    return true;

}
countArr('bbbaa')