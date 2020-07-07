function findEmailDomain(address) {
    return address.split('@').pop()
}
findEmailDomain('John.Smith@example.com')

address => address.substring(address.indexOf('@') + 1)