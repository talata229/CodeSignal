function electionsWinners(votes, k) {
    var max = Math.max(...votes);
    var isOnlyHasMaxValue = votes.filter(item => item == max).length <= 1;
    var count = 0;
    votes.forEach(element => {
        if ((element + k > max) || (element == max && isOnlyHasMaxValue)) {
            count++;
        }
    });
    return count;
}