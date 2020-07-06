function isMAC48Address(inputString) {
    return inputString.split('-').some(x => !/^[1-9A-F]$/g.test(x));
}