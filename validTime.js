function validTime(time) {
    var hour = time.split(':')[0];
    var minute = time.split(':')[1];
    return hour <= 23 && minute <= 59
}