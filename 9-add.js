const count = parseInt(process.argv[2]);
while (isNaN(count)) {
    console.log('Not a number');
    break;
}
function add(a, b) {
    return a + b;
}
console.log(add(2,3));