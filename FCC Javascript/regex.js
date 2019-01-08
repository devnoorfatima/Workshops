                            //    Regex 
// Using test method                            
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Matching literal strings
let DozzyIsHiding = "Somewhere Dozzy is hiding in this text.";
let DozzyRegex = /Dozzy/; // Dozzy or Dozzy won't match.
let result = DozzyRegex.test(DozzyIsHiding);

// Matching literals with different possibilities
let petString = "Alice has a pet dog.";
let petRegex = /dog|cat|bird|fish/;  
let result = petRegex.test(petString);

// Ignore case while matching
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result = fccRegex.test(myString);

// Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = (/coding/);
let result = extractStr.match(codingRegex);


// Getting more than one value
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex);