//  function isEven(num){
// return num % 2 === 0;
//  }
 
// // factorial
// function factorial (num) {
// var result = 1;
// for(i = 2; i<=num; i++){
// result*=i
// }
// return result
// }

// replace characters 

function kebabToSnake(str){
  var   newStr = str.replace(/-/g, "_");
return newStr;
}