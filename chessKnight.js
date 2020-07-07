function chessKnight(params) {
    var arr = params.split('');
    var row = arr[0].charCodeAt();
    var col = +arr[1];
    var count = 0;
    for (let i = row - 2; i >= 95 && i <= 104 && i <= row + 2; i++) {
        for (let j = col - 2; j >= -1 && j <= 8 && j <= col + 2; j++) {
            var rowD = i - row;
            var colD = j - col;
            if (Math.abs(rowD * colD) == 2 && j > 0 && i >= 97) {
                console.log(i, j);
                count++;
            }
        }
    }
    return count;
}

chessKnight('a1')