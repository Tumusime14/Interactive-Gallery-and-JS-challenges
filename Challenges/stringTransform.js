function transformString(str) {
    let len = str.length;
    let result = '';
    if (len % 3 === 0) {
        result = str.split('').reverse().join('');
    }
    if (len % 5 === 0) {
        result = str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
    if (len % 15 === 0) {
        result = str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }
    return result;
}
// write to id output
console.log(transformString('Hamburger') + '<br>');
console.log(transformString('Pizza') + '<br>');
console.log(transformString('Chocolate Chip Cookie') + '<br>');