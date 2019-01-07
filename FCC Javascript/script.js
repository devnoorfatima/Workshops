// Mutating const variable:
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  }
editInPlace();

// Arrow function with parameter
const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));