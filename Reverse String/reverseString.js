function reverseString(string) {
    let brokenString = string.split('')
    let reversed = brokenString.reverse()
    let newString = reversed.join('')
    return newString
}

module.exports = reverseString;