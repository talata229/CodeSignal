function digitsProduct(product) {
    for (let i = 1; i < 10000; i++) {
        var arr = Array.from(i.toString(), Number);
        var total = arr.reduce((pre, cur) => pre * cur, 1);
        if (total == product) {
            return i;
        }
    }
    return -1;
}