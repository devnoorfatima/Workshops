// Local Variables 
 function setWidth() {
     var width = 25;
     console.log(width);
 }
 setWidth();
 console.log(width);

// //  Global variables

var age = 40;
  if (age > 10) {
 const immunity = age / 4;
 console.log (immunity);
} 
console.log(immunity);

// // Let vs Const

let points = 550;
let winner = false;
if(points > 400){
let winner = true;
console.log(winner);
}
console.log(winner);
points = 600;

// Const can't be changed however it's values can be changed for instance:

const person = {
    name : "Noor",
    age : 17
} ;
person.age = 20;  
// age changed

// Arrow Functions =>
var names = ["max" , "dom" , "fats"];
const fullName = names.map(function(name){
return (name + "well");
});
// this is an arrow function
var names = ["max" , "dom" , "fats"];
const fullName = names.map(name => {
return (name + "well");
}); 