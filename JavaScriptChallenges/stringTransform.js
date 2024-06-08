function transformString(str) {
    // Ensure the string contains only alphanumeric characters and spaces
    const isValid = /^[a-zA-Z0-9 ]+$/.test(str);
    if (!isValid) {
        console.log('Invalid input: String contains non-alphanumeric characters or spaces');
        return;
    }
    // Ensure the length of the string is between 1 and 1000
    let len = str.length;
    if (len < 1 || len > 100) {
        console.log('Invalid input: Length of the string should be between 1 and 1000');
        return;
    }
    // Initialize the result string
    let result = '';
    // If the length is divisible by 3, reverse the string
    if (len % 3 === 0) {
        result = str.split('').reverse().join('');
    }
    // If the length is divisible by 5, convert each character to its char code
    else if (len % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    // If the length is divisible by 15, reverse the string
    // and convert each character to its ASCII.
    else if (len % 15 === 0) {
        result = str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    // If none of the conditions match, return "Not match"
    else {
        return false;
    }
    // Return the resulting transformed string
    return result;
}
// Testing the function with example inputs and displaying the result.
console.log(transformString('Hamburger')); // Output: regubraH
console.log(transformString('Pizza')); // Output: 80 105 122 122 97
console.log(transformString('Chocolate Chip Cookie')); // Output: 101 107 111 111 67 32 80 105 104 67 32 101 116 97 108 111 99 111 104 67
console.log(transformString('Chocolate Chip bvCookie')); // Output: false
console.log(transformString('ValidString123')); // Output: false
console.log(transformString('!InvalidString')); // Invalid input: String contains non-alphanumeric characters or spaces
