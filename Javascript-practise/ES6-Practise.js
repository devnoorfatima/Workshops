// // Local Variables 
//  function setWidth() {
//      var width = 25;
//      console.log(width);
//  }
//  setWidth();
//  console.log(width);

// // //  Global variables

// var age = 40;
//   if (age > 10) {
//  const immunity = age / 4;
//  console.log (immunity);
// } 
// console.log(immunity);

// // // Let vs Const

// let points = 550;
// let winner = false;
// if(points > 400){
// let winner = true;
// console.log(winner);
// }
// console.log(winner);
// points = 600;

// // Const can't be changed however it's values can be changed for instance:

// const person = {
//     name : "Noor",
//     age : 17
// } ;
// person.age = 20;  
// // age changed

// // Arrow Functions =>
// var names = ["max" , "dom" , "fats"];
// const fullName = names.map(function(name){
// return (name + "well");
// });
// // this is an arrow function
// var names = ["max" , "dom" , "fats"];
// const fullName = names.map(name => {
// return (name + "well");
// }); 

// var age = [22,45,69,88,45,66,100,47];
// const old = age.filter( age => age >= 60 );

// function calculateBill(total, tax = 0.13, tip = 0.15){
//     return total + (total * tax ) + (total * tip );
// }
// const totalBill = calculateBill (100 , undefined ,0.15);
// console.log(totalBill);

// const numbers = [3,62,234,7,23,74,23,76,92];
// const num = numbers.filter (numbers => numbers >= 70);
// console.log(num);

const items =Array.from(document.querySelectorAll("[data-time]"));
console.log(items);

const filtered = items.filter(item => item.textContent.includes('Flexbox'))

.map(item => item.dataset.time)
.map(timecode => {
    const parts = timecode.split(":").map(part => parseFloat(part));
    return (parts[0] * 60 ) + parts [1];
}) 

.reduce((totalTime, seconds) => totalTime + seconds,0)

console.log(filtered);

