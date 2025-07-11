const count = parseInt(process.argv[2]);
let i = 0;

while (isNaN(count)) {
        console.log('Missing number of occurrences');
        break;
    }
while (i < count) {
    console.log('C is fun');
    i++;
    
}
