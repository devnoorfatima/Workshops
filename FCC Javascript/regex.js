//                             //    Regex 
// // Using test method                            
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// // Matching literal strings
// let DozzyIsHiding = "Somewhere Dozzy is hiding in this text.";
// let DozzyRegex = /Dozzy/; // Dozzy or Dozzy won't match.
// let result = DozzyRegex.test(DozzyIsHiding);

// // Matching literals with different possibilities
// let petString = "Alice has a pet dog.";
// let petRegex = /dog|cat|bird|fish/;  
// let result = petRegex.test(petString);

// // Ignore case while matching
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; 
// let result = fccRegex.test(myString);

// // Extract Matches
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = (/coding/);
// let result = extractStr.match(codingRegex);


// // Getting more than one value
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /Twinkle/gi; 
// let result = twinkleStar.match(starRegex);

// Wildcard period

// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; 
// let result = unRegex.test(exampleStr);

// // match single character with multiple possibilities
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig;
// let result = quoteSample.match(vowelRegex);

// // range of letters or numbers
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig; 
// let result = quoteSample.match(myRegex); 

// // character that we don't want to include
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/ig;
// let result = quoteSample.match(myRegex);

// // To get a character that is present more than once use(+)
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/ig; 
// let result = difficultSpelling.match(myRegex);

// // Character that occurs more than once use(*)
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; 
// let result = chewieQuote.match(chewieRegex);

// // To check if the first word is right returns true or false
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);

// // To check ending of the line
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;  
// let result = lastRegex.test(caboose);

// // To select all numbers and alphabets
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/ig; 
// let result = quoteSample.match(alphabetRegexV2).length;

// // To select everything other than numbers and alphabets
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/ig; 
// let result = quoteSample.match(nonAlphabetRegex).length;

// // To get digits
// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/ig;
// let result = numString.match(numRegex).length;

// for white space \s is used
// To match non-white space \S is used
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/ig; 
// let result = sample.match(countNonWhiteSpace);

// // Check for a doubted favWord(as in color and colour)
// let favWord = "favorite";
// let favRegex = /favou?rite/; 
// let result = favRegex.test(favWord);

// // DEBUGGING
// // Open your browser console
// let outputTwo = "This will print to the browser console 2 times";
// console.log(outputTwo);
// let outputOne = "Try to get this to log only once to the browser console";
// console.clear();
// console.log(outputOne);


// // Checking type of variables
// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Add your code below this line
// console.log(typeof seven);
// console.log(typeof three);

// // ========>>> Basic Data structures
// let yourArray = ["hello", 0, true, false, "hurrah!"];

// // pop and shift
// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
//   }
//   console.log(popShift(['challenge', 'is', 'not', 'complete']));

// //   splice function
//   function sumOfTen(arr) {
//     arr.splice(1,2);
//     return arr.reduce((a, b) => a + b);
//   }
//   console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

// //   Using splice in place of unshift
//   function htmlColorNames(arr) {
//     arr.splice(0,2 ,"DarkSalmon","BlanchedAlmond");
//     return arr;
//   } 
//   console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// //   slice function
//   function forecast(arr) { 
//     return arr.slice(2,4);
//   }
//   console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// //   Spread function
//   function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence= ['learning', ...fragment,'is','fun'] ;
//     return sentence;
//   }
//   console.log(spreadOut());

// //   Nested Arrays
//   let myNestedArray = [
//     ['unshift', false, 1, 2, 3, 'complex', 'nested'],
//     ['loop', 'shift', 6, 7, 1000, 'method'],
//     ['concat', false, true, 'spread', 'array',["deep"]],
//     ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]],
//     ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ]
//   ];

// //  Adding new key value pairs to a javascript object
//   let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28
//   };
//   foods ['bananas'] = 13;
//   foods ['grapes'] = 35;
//   foods ['strawberries'] = 27;
//   console.log(foods);


// //   Nested objects
//   let userActivity = {
//     id: 23894201352,
//     date: 'January 1, 2017',
//     data: {
//       totalUsers: 51,
//       online: 42
//     }
//   };
//   userActivity.data.online = 45;
//   console.log(userActivity);

// //   Delete items
//   let foods = {
//     apples: 25,
//     oranges: 32,
//     plums: 28,
//     bananas: 13,
//     grapes: 35,
//     strawberries: 27
//   };
//   delete foods.oranges;
//   delete foods.plums;
//   delete foods.strawberries;
//   console.log(foods);


// //   hasOwnProperty function
//   let users = {
//     Alan: {
//       age: 27,
//       online: true
//     },
//     Jeff: {
//       age: 32,
//       online: true
//     },
//     Sarah: {
//       age: 48,
//       online: true
//     },
//     Ryan: {
//       age: 19,
//       online: true
//     }
//   };
  
//   function isEveryoneHere(obj) {
//   if(users.hasOwnProperty( "Alan", "Jeff", "Sarah","Ryan")){
//     return true
//   }return false;
//   }
//   console.log(isEveryoneHere(users));

// BASIC ALGORITHMS:

// function convertToF(celsius) {
//     let fahrenheit = celsius * 9/5 + 32 ;
//     return fahrenheit;
//   }
  
//   convertToF(30);

//   function reverseString(str) {
//     const splitStr = str.split("");
//     const reverseStr = splitStr.reverse();
//     const joinStr = reverseStr.join("");
//      return joinStr;
//    }
   
//    reverseString("hello");

function findLongestWordLength(str) {
  var arr = str.split(' ');
  var max = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length > max){
      max = arr[i].length;
    }
  } 
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var i = 1; i < arr[n].length; i++) {
      if (arr[n][i] > largestNumber) {
        largestNumber = arr[n][i];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}



function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");



function repeatStringNumTimes(str, num) {
  // repeat after me
if(num <= 0){
  return "";
}
if(num === 1){
  return str;
}
else return str + repeatStringNumTimes(str, num -1);
}
repeatStringNumTimes("abc", 3);


function findElement(arr, func) {
  let num = 0;
  for(var i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num)) {
      return num;
    }
  } 
  return undefined;
}


function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);


function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}
titleCase("I'm a little tea pot");