function printNumber(input) {
  const number = parseInt(input);
  if (!isNaN(number)) {
    console.log(`My number: ${number}`);
  } else {
    console.log('Not a number');
  }
}

printNumber(process.argv[2]);