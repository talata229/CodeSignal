function removeArrayPart(inputArray, l, r) {
    var arr = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (i < l || i > r) {
            arr.push(inputArray[i]);
        }
    }
    return arr;
}
removeArrayPart([2, 3, 2, 3, 4, 5], 2, 4)