
/*function spell(c,cool){
    console.log(c," is ",cool)
}
spell("c","cool")
spell("c",)
spell()
*/
const args = process.argv.slice(2);

if (args[0] && args[1]) {
  console.log(`${args[0]} is ${args[1]}`);
} else if (args[1]) {
  console.log(args[1]);
}else{
    console.log(args[0])
}
