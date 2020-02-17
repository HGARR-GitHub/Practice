const arNumbers = [1,1,2,4,5,32,10,3,7,1,2]
//count sum of the even numbers that are multiplied by there position in the array

//Compacked
/* const sumEven = arNumbers
  .filter((number) => number%2===0)
  .map((number,index)=> number*index)
  .reduce((num1, num2) => num1+num2);
*/

//Split to see the logging
  const arEven = arNumbers
  .filter((number) => number%2===0);

  const arPosition = arEven
  .map((number,index)=> number*(index+1));
  
  const sumEven = arPosition
  .reduce((num1, num2) => num1+num2);

console.log (arEven)
console.log (arPosition)
console.log (sumEven)
