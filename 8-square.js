const count = parseInt(process.argv[2]);
while (!isNaN(count)) {
    console.log('Missing number of occurrences');
    break;
}
for (i = 0; i < count; i++) {
    let row = '';
    for (j = 0; j < count; j++) {
        row += 'X';
    }
    console.log(row);
}