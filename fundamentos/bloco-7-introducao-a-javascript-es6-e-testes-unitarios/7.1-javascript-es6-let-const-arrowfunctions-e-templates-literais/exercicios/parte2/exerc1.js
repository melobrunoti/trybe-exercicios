
/* const factorial = number => { 
  let result = 1

  for( let i =  number; i > 1; i -= 1){
    result *= i;
  }
return result
}

console.log(factorial(4)); 
 */
const factorial = num => num > 1 ? num * factorial(num - 1) : num * 1;

console.log(factorial(4))