function digitDegree(n) {
    c = 0;
    while (n.toString().length > 1) {
        n = n.toString().split("").reduce((x, y) => Number(x) + Number(y))
        c++;
    }
    return c;
}