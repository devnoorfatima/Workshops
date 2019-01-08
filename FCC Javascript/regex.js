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

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result = unRegex.test(exampleStr);

// match single character with multiple possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig;
let result = quoteSample.match(vowelRegex);

// range of letters or numbers
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; 
let result = quoteSample.match(myRegex); 

// character that we don't want to include
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/ig;
let result = quoteSample.match(myRegex);

// To get a character that is present more than once use(+)
let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; 
let result = difficultSpelling.match(myRegex);

// Character that occurs more than once use(*)
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; 
let result = chewieQuote.match(chewieRegex);

// To check if the first word is right returns true or false
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// To check ending of the line
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;  
let result = lastRegex.test(caboose);

// To select all numbers and alphabets
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/ig; 
let result = quoteSample.match(alphabetRegexV2).length;

// To select everything other than numbers and alphabets
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/ig; 
let result = quoteSample.match(nonAlphabetRegex).length;

// To get digits
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/ig; // Change this line
let result = numString.match(numRegex).length;