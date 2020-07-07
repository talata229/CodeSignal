function bishopAndPawn(bishop, pawn) {
    var charCodeB = bishop.split('')[0].charCodeAt();
    var indexB = +bishop.split('')[1];

    var charCodeP = pawn.split('')[0].charCodeAt();
    var indexP = +pawn.split('')[1];
    return Math.abs(charCodeB - charCodeP) == Math.abs(indexB - indexP);
}

bishopAndPawn('a1', 'c3')