const count = parseInt(process.argv[2]);
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

while (isNaN(count)) {
    console.log('Not a number');
    break;
}
function add(a, b) {
    return a+b;
}
console.log(add(a,b))