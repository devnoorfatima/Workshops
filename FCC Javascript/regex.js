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

// function findLongestWordLength(str) {
//   var arr = str.split(' ');
//   var max = 0;
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i].length > max){
//       max = arr[i].length;
//     }
//   } 
//   return max;
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");


// function largestOfFour(arr) {
//   var results = [];
//   for (var n = 0; n < arr.length; n++) {
//     var largestNumber = arr[n][0];
//     for (var i = 1; i < arr[n].length; i++) {
//       if (arr[n][i] > largestNumber) {
//         largestNumber = arr[n][i];
//       }
//     }

//     results[n] = largestNumber;
//   }

//   return results;
// }



// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

// confirmEnding("Bastian", "n");



// function repeatStringNumTimes(str, num) {
//   // repeat after me
// if(num <= 0){
//   return "";
// }
// if(num === 1){
//   return str;
// }
// else return str + repeatStringNumTimes(str, num -1);
// }
// repeatStringNumTimes("abc", 3);


// function findElement(arr, func) {
//   let num = 0;
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   } 
//   return undefined;
// }


// function booWho(bool) {
//   return typeof bool === 'boolean';
// }

// // test here
// booWho(null);


// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function(val){
//       return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }
// titleCase("I'm a little tea pot");


// function bouncer(arr) {
//   return arr.filter(Boolean);
// }
// bouncer([7, "ate", "", false, 9]);``



// function getIndexToIns(arr, num) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });

//   for (var a = 0; a < arr.length; a++) {
//     if (arr[a] >= num)
//       return a;
//   }

//   return arr.length;
// }

// function mutation(arr) {
//   var test = arr[1].toLowerCase();
//   var target = arr[0].toLowerCase();
//   for (var i=0;i<test.length;i++) {
//     if (target.indexOf(test[i]) < 0)
//       return false;
//   }
//   return true;
//  }


//  function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var arr2 = [];
//   for (var i = 0; i < arr.length; i+=size) {
//   arr2.push(arr.slice(i , i+size));
//   }
//   return arr2;
// }


//  Object-oriented-Programming:
// function Dog() {
//   this.name = "Rupert";
//   this.color = "brown";
//   this.numLegs = 4;
// }
// let hound = new Dog();


// function Dog(name,color) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = 4;
// }
// let terrier = new Dog("spot","black");

// function House(numBedrooms) {
//   this.numBedrooms = numBedrooms;
// }
// let myHouse = new House(5);
// myHouse instanceof House;


// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];
// for (let property in canary) {
//   if(canary.hasOwnProperty(property)) {
//     ownProps.push(property);
//   }
// }
// console.log(ownProps);

// function Dog(name) {
//   this.name = name;
// }
// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = []; 
// for (let property in beagle) {
//   if(beagle.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }


// function Dog(name) {
//   this.name = name;
// }
// function joinDogFraternity(candidate) {
//    if (candidate.constructor === Dog) {
//     return true;
//   } else {
//     return false;
//   }
// }



// function Dog(name) {
//   this.name = name; 
// }

// Dog.prototype = {
//    numLegs: 4, 
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name);
//   }
// };


// function Dog(name) {
//   this.name = name;
// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);
// function Dog(name) {
//   this.name = name;
// }
// let beagle = new Dog("Snoopy");
// Dog.prototype.isPrototypeOf(beagle);  // => true
// Object.prototype.isPrototypeOf(Dog.prototype);

// function Animal() { }

// Animal.prototype = {
//   constructor: Animal,
//   eat: function() {
//     console.log("nom nom nom");
//   }
// };

// function Dog() { }
// Dog.prototype = Object.create(Animal.prototype);

// let beagle = new Dog();
// beagle.eat();  


// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();


// function Animal() { }
// Animal.prototype.eat = function() { console.log("nom nom nom"); };
// function Dog() { }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.eat = function() {
//   console.log("nom nom nom");
// };

// Dog.prototype.bark = function() {
//   console.log("Woof!");
// };
// let beagle = new Dog();
// beagle.eat(); 
// beagle.bark(); 


// function Bird() { }

// Bird.prototype.fly = function() { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;
// Penguin.prototype.fly = function() {
//   return "Alas, this is a flightless bird.";
// };
// let penguin = new Penguin();
// console.log(penguin.fly());


// let bird = {
//   name: "Donald",
//   numLegs: 2
// };
// let boat = {
//   name: "Warrior",
//   type: "race-boat"
// };
// let glideMixin = function(obj) {
//   obj.glide = function() {
//     console.log("Gliding, wooosh!");
//   }
// };
// glideMixin(bird);
// glideMixin(boat);


// function Bird() {
//   let weight = 15;
//   this.getWeight = function() { 
//    return weight;
//  }; 
// }

// // IIFE:
// (function() {
//   console.log("A cozy nest is ready");
// })(); 



// let isCuteMixin = function(obj) {
//   obj.isCute = function() {
//     return true;
//   };
// };
// let singMixin = function(obj) {
//   obj.sing = function() {
//     console.log("Singing to an awesome tune");
//   };
// };
// let funModule = (function () {
//   return {
//     isCuteMixin: function (obj) {
//       obj.glide = function() {
//         console.log("Gliding on the water");
//       };
//     },
//     singMixin: function(obj) {
//       obj.fly = function() {
//         console.log("Flying, wooosh!");
//       };
//     }
//   }
// }) (); 


// =======>>>Functional Programming
// /**
//  * A long process to prepare tea.
//  * @return {string} A cup of tea.
//  **/
// const prepareTea = () => 'greenTea';

// /**
//  * Get given number of cups of tea.
//  * @param {number} numOfCups Number of required cups of tea.
//  * @return {Array<string>} Given amount of tea cups.
//  **/
// const getTea = (numOfCups) => {
//   const teaCups = [];
  
//   for(let cups = 1; cups <= numOfCups; cups += 1) {
//     const teaCup = prepareTea();
//     teaCups.push(teaCup);
//   }

//   return teaCups;
// };

// // Add your code below this line

// const tea4TeamFCC = getTea(40); // :(

// // Add your code above this line

// console.log(tea4TeamFCC);

// // tabs is an array of titles of each site open within the window
// var Window = function(tabs) {
//   this.tabs = tabs; // we keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//   this.tabs = this.tabs.concat(otherWindow.tabs);
//   return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//   this.tabs.push('new tab'); // let's open a new tab for now
//   return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {
//   var tabsBeforeIndex = this.tabs.splice(0, index); // get the tabs before the tab
//   var tabsAfterIndex = this.tabs.splice(index); // get the tabs after the tab

//   this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // join them together 
//   return this;
//  };

// // Let's create three browser windows
// var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
// var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
// var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
// var finalTabs = socialWindow
// .tabOpen() 
// .join(videoWindow) 
// .join(workWindow.tabOpen());

// alert(finalTabs.tabs);

// // the global variable
// var fixedValue = 4;

// function incrementer () {
//   // Add your code below this line
//  return fixedValue +1;
  
//   // Add your code above this line
// }

// var newValue = incrementer(); // Should equal 5
// console.log(fixedValue); // Should print 4

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (value) {
  return value + 1;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4


// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

/* This function should add a book to the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function add (list,bookName) {
  return [...list, bookName];
}


/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line

// function remove (list,bookName) {
//   if (list.indexOf(bookName) >= 0) {
//     return list.filter((item) => item !== bookName);
//     }
// }
// var newBookList = add(bookList, 'A Brief History of Time');
// var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
// var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

// console.log(bookList);


// // the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(a => newArray.push(callback(a)));
//   // Add your code above this line
//   return newArray;

// };

// var new_s = s.myMap(function(item){
//   return item * 2;
// });

// // practising filter
// var filteredList = watchList.map(function(e) {
//     return {title: e["Title"], rating: e["imdbRating"]}
//   }).filter((e) => e.rating >= 8);



// the global Array
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback){
//   var newArray = [];
//   // Add your code below this line
//   this.forEach(function(x) {
//     if (callback(x) == true) {
//       newArray.push(x);
//     }
//   })
//   // Add your code above this line
//   return newArray;

// };

// var new_s = s.myFilter(function(item){
//   return item % 2 === 1;
// });



// function sliceArray(anim, beginSlice, endSlice) {
//     // Add your code below this line
    
//      return anim.slice(beginSlice, endSlice);
//     // Add your code above this line
//   }
//   var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
//   sliceArray(inputAnim, 1, 3);


//   function nonMutatingConcat(original, attach) {
//     // Add your code below this line
//       return original.concat(attach); 
    
//     // Add your code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingConcat(first, second);



//   function nonMutatingPush(original, newItem) {
//     // Add your code below this line
//     return original.concat(newItem);
//     // Add your code above this line
//   }
//   var first = [1, 2, 3];
//   var second = [4, 5];
//   nonMutatingPush(first, second);




//   var averageRating;
// var averageRating = watchList.filter(x => x.Director === "Christopher Nolan").map(x => Number(x.imdbRating)).reduce((x1, x2) => x1 + x2) / watchList.filter(x => x.Director === "Christopher Nolan").length;


// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   // Add your code below this line
// return [].concat(arr).sort(function(a, b) {
//     return a - b;
//   });  
//   // Add your code above this line
// }
// nonMutatingSort(globalArray);



// function splitify(str) {
//     // Add your code below this line
//      return str.split(/\W/);
    
//     // Add your code above this line
//   }
//   splitify("Hello World,I-am code");



//   // the global variable
// var globalTitle = "Winter Is Coming";

// // Add your code below this line
// function urlSlug(title) {
// return title.split(/\W/).filter((obj)=>{
//     return obj !=='';
//   }).join('-').toLowerCase();
  
// }
// // Add your code above this line

// var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"




// function checkPositive(arr) {
//     // Add your code below this line
     
//     return arr.every(val => val > 0);
    
//     // Add your code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);


//   function checkPositive(arr) {
//     // Add your code below this line
//      return arr.some((elem) => elem > 0);
    
//     // Add your code above this line
//   }
//   checkPositive([1, 2, 3, -4, 5]);


//   function add(x) {
//     // Add your code below this line
//     return function(y) {
//       return function(z) {
//         return x + y + z;
//       }
//     }  
//     // Add your code above this line
//   }
//   add(10)(20)(30);

// Intermediate  Algorithms
// function diffArray(arr1, arr2) {
//   return arr1
//   .concat(arr2)
//   .filter(
//     item => !arr1.includes(item) || !arr2.includes(item)
//   )
//   // Same, same; but different.

// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


// const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));


// destroyer([1, 2, 3, 1, 2, 3], 2, 3);





// function whatIsInAName(collection, source) {
//   // What's in a name?
//   var arr = [];
//   // Only change code below this line
//     var srcKeys = Object.keys(source);
//   return collection.filter(function (obj) {
//     return srcKeys.every(function (key) {
//       return obj.hasOwnProperty(key) && obj[key] === source[key];
//     });
//   });
// }
//   // Only change code above this line
// whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//   return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
// }

// spinalCase('This Is Spinal Tap');



// function myReplace(str, before, after) {
//   // Find index where before is on string
//   var index = str.indexOf(before);
//   // Check to see if the first letter is uppercase or not
//   if (str[index] === str[index].toUpperCase()) {
//     // Change the after word to be capitalized before we use it.
//     after = after.charAt(0).toUpperCase() + after.slice(1);
//   }
//   // Now replace the original str with the edited one.
//   str = str.replace(before, after);

//   return str;
// }

// // test here
// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// function pairElement(str) {
//   // Return each strand as an array of two elements, the original and the pair.
//   var paired = [];

//   // Function to check with strand to pair.
//   var search = function(char) {
//     switch (char) {
//       case 'A':
//         paired.push(['A', 'T']);
//         break;
//       case 'T':
//         paired.push(['T', 'A']);
//         break;
//       case 'C':
//         paired.push(['C', 'G']);
//         break;
//       case 'G':
//         paired.push(['G', 'C']);
//         break;
//     }
//   };

//   // Loops through the input and pair.
//   for (var i = 0; i < str.length; i++) {
//     search(str[i]);
//   }

//   return paired;
// }

// // test here
// pairElement("GCG");




// function uniteUnique(arr1, arr2, arr3) {
//   // Creates an empty array to store our final result.
//   var finalArray = [];

//   // Loop through the arguments object to truly made the program work with two or more arrays
//   // instead of 3.
//   for (var i = 0; i < arguments.length; i++) {
//     var arrayArguments = arguments[i];

//     // Loops through the array at hand
//     for (var j = 0; j < arrayArguments.length; j++) {
//       var indexValue = arrayArguments[j];

//       // Checks if the value is already on the final array.
//       if (finalArray.indexOf(indexValue) < 0) {
//         finalArray.push(indexValue);
//       }
//     }
//   }

//   return finalArray;
// }

// // test here
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// function convertHTML(str) {
//   // Split by character to avoid problems.

//   var temp = str.split('');

//   // Since we are only checking for a few HTML elements I used a switch

//   for (var i = 0; i < temp.length; i++) {
//     switch (temp[i]) {
//       case '<':
//         temp[i] = '&lt;';
//         break;
//       case '&':
//         temp[i] = '&amp;';
//         break;
//       case '>':
//         temp[i] = '&gt;';
//         break;
//       case '"':
//         temp[i] = '&quot;';
//         break;
//       case "'":
//         temp[i] = "&apos;";
//         break;
//     }
//   }

//   temp = temp.join('');
//   return temp;
// }

// //test here
// convertHTML("Dolce & Gabbana");



// function sumFibs(num) {
//   var prevNumber = 0;
//   var currNumber = 1;
//   var result = 0;
//   while (currNumber <= num) {
//       if (currNumber % 2 !== 0) {
//           result += currNumber;
//       }

//       currNumber += prevNumber;
//       prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

// // test here
// sumFibs(4);




// function sumPrimes(num) {
//   var res = 0;
//  function getPrimes(max) {
//     var sieve = [];
//     var i;
//     var j;
//     var primes = [];
//     for (i = 2; i <= max; ++i) {
//       if (!sieve[i]) {
//         primes.push(i);
//         for (j = i << 1; j <= max; j += i) {
//           sieve[j] = true;
//         }
//       }
//     }

//     return primes;
//   }
//  var primes = getPrimes(num);
//   for (var p = 0; p < primes.length; p++) {
//     res += primes[p];
//   }

//   return res;
// }

// // test here
// sumPrimes(10);





// function smallestCommons(arr) {
//   arr.sort(function(a, b) {
//     return b - a;
//   });

//   var newArr = [];
//   for (var i = arr[0]; i >= arr[1]; i--) {
//     newArr.push(i);
//   }

//   var quot = 0;
//   var loop = 1;
//   var n;
//   do {
//     quot = newArr[0] * loop * newArr[1];
//     for (n = 2; n < newArr.length; n++) {
//       if (quot % newArr[n] !== 0) {
//         break;
//       }
//     }

//     loop++;
//   } while (n !== newArr.length);

//   return quot;
// }

// // test here
// smallestCommons([1,5]);




function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})




function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];
  for(i=0;i < biString.length;i++){
  uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  return uniString.join('');
  }
  
      // test here
      binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");




      function binaryAgent(str) {
        return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
      }
  
      // test here
      binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");



      function truthCheck(collection, pre) {
        return collection.every(function (element) {
          return element.hasOwnProperty(pre) && Boolean(element[pre]);
        });
      }
      
      // test here
      truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");



      function addTogether() {
        var checkNum = function(num) {
          if (typeof num !== 'number') {
            return undefined;
          } else
            return num;
        };
        if (arguments.length > 1) {
          var a = checkNum(arguments[0]);
          var b = checkNum(arguments[1]);
          if (a === undefined || b === undefined) {
            return undefined;
          } else {
            return a + b;
          }
        } else {
          var c = arguments[0];
          if (checkNum(c)) {
            return function(arg2) {
              if (c === undefined || checkNum(arg2) === undefined) {
                return undefined;
              } else {
                return c + arg2;
              }
            };
          }
        }
      }
  
      // test here
      addTogether(2,3);