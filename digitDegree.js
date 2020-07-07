function digitDegree(n) {
    var arr = n.split("")
    lengthOfSumArr([1, 2, 3, 4])
}

function lengthOfSumArr(arr) {
    var total = arr.reduce((pre, curr) => pre + curr);
    return (total + "").length;
}

digitDegree(100)