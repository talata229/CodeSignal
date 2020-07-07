function dayOfWeek(birthdayDate) {
    isContinue = true;
    var date = new Date(birthdayDate).getDay();
    if (birthdayDate.startsWith("02-29")) {
        for (let i = 4; i < 100; i = i + 4) {
            var newDate = new Date(new Date(birthdayDate).getFullYear() + i, new Date(birthdayDate).getMonth(), new Date(birthdayDate).getDate());
            if (newDate.getDay() == date && leapYear(newDate.getFullYear())) {
                return i;
            }
        }
        return -1;
    }
    for (let i = 1; i < 100; i++) {
        var newDate = new Date(new Date(birthdayDate).getFullYear() + i, new Date(birthdayDate).getMonth(), new Date(birthdayDate).getDate());
        if (newDate.getDay() == date) {
            return i;
        }
    }
    return -1;
}
function leapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}