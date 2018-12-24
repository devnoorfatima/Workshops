// ========>>> Local Variables 
//  function setWidth() {
//      var width = 25;
//      console.log(width);
//  }
//  setWidth();
//  console.log(width);

// =========>>>  Global variables

// var age = 40;
//   if (age > 10) {
//  const immunity = age / 4;
//  console.log (immunity);
// } 
// console.log(immunity);

// =======>>> Let vs Const

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

// =======>>> Arrow Functions =>
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
// Exercise - 2
// const items =Array.from(document.querySelectorAll("[data-time]"));
// debugger;
// console.log(items);
// const filtered = items.filter(item => item.textContent.includes('Flexbox'))
// .map(item => item.dataset.time)
// .map(timecode => {
//     const parts = timecode.split(":").map(part => parseFloat(part));
//     return (parts[0] * 60 ) + parts [1];
// }) 
// .reduce((totalTime, seconds) => totalTime + seconds,0);
// console.log(filtered); 

// const age = 25;
// const name = "Jerry";
// const sentence = ` My mouse ${name} is ${age} years old`;
// console.log(sentence);

// =======>>> Tagged Template Practice

// function highlight (strings, ...values){
//  let str = "";
//  strings.forEach((string , i) => { 
//     str += `${string} <span contenteditable class="hl">${values[i] || ""}</span>`;
//     });
// return str;
// }

// const age = 25;
// const name = "Jerry";
// const sentence = highlight` My mouse ${name} is ${age} years old`;
// document.body.innerHTML=sentence;
// console.log(sentence);

// const name = "Mickey";
// const profession = "Baker";
// const place = "Bakery"
// const items = {
//     Bread : "French" ,
//     Cookies :"Live baked",
//     Cakes  : "With lovely icing"
// }
// function addAbbreviation (strings,...values){
//     const abbreviated = values.map(value => {
//         if (items[value]) {
//             return `<abbr title = "${items[value]}">${value}</abbr>`
//         }
//         return value;
//     });
//     return strings.reduce((sentence,string,i)=>{
//         return `${sentence}${string}${abbreviated[i] || ""}`;
//     }, "");
// } 


// const sentence = addAbbreviation`${name} is a ${profession}, works in a ${place} makes ${"Bread"} ,${"Cookies"}, ${"Cakes"}. `;
// document.body.innerHTML=sentence;
// console.log(sentence);

// =====>>>> New String methods:
// const number = "02259696896" ;
// const course = "RFB2";
//  .startsWith()
//  .endsWith()
//  .includes()
//  .repeat()

// =======>>> Destructuring objects:
// const organisms = {
//     marine   :"vertebrates",
//     freshwater :"Planeria",
//     both  : "hydra"
// };

// const {marine,freshwater,both} = organisms;

// ======>>> Destructuring arrays:
// const earthlings= ["grass" , "goat" , "lion" , "man" , "hippo" , "crow"];
// const [producer , herbivore , carnivore , ...omnivore] = earthlings;

// ======>>> Swaping Variables:
// let kind = "Fatima";
// let benign = "Ayesha";
// console.log(kind);
// [kind,benign] = [benign,kind];
// console.log (kind);

// =======>>>  For of loop
// function addUpNumbers (){
// let total=0;
// for(num of arguments){
// total+=num    
// }
// console.log(total);
// return total;
// };
// addUpNumbers(1,2,5,3,6,66,89,54);

// const name = "Noor Fatima";
// for (char of name){
//     console.log(char); 
// };

// Numericals are not iterable
// const number = "twenty";
// for (char of number){
//     console.log(char);
// }

// ======>>> for in loop with objects
// const orange = {
//    color : "orange",
//    size :"large",
//    weight : 100,
//    citrus : "none"
// };
// for (const prop in orange){
//     const value= orange[prop];
//     console.log(value,prop);
// }

// ======>>> spread(...)
// const inventors = ["Aristotle","Socretes","Pluto"];
// const newInventors = ["Einstein","Newton"];
//  inventors.push(...newInventors);
//  console.log(inventors);

// Using spread in a function:
// const name = ["Noor ","Fatima"];
// function sayHi(first,last){
// alert(`Hey there ${first} ${last}.`);
// };
// sayHi(...name);

// ======>>>  Symbols:
// const classroom = {
//     [Symbol("Mark")] : {grade : 12, gender : "male"},
//     [Symbol("Prin")] : {grade : 11, gender : "male"},
//     [Symbol("Mark")] : {grade : 12, gender : "female"}
// }
// console.log(classroom);

// ======>>> Prototypal inheritance:
// function Dog (name,breed){
//     this.name = name;
//     this.breed = breed;
// }
// Dog.prototype.bark = function (){
//     console.log(`Woof! Woof! My name is ${this.name}.And my breed is ${this.breed}.`);
// }

// const fozzy = new Dog ("fozzy" , "mutt");
// const mozzet = new Dog ("mozzet" , "brat");

// ======>>> Class :
// class Dog {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     bark() {
//         console.log(`${this.name} is a ${this.breed} type of dog.`)
//     }
//     cuddle(){
//         console.log("I Love my owner")
//     }
// }

// const snickers = new Dog("snickers", "mutt");
// const sunny = new Dog("sunny", "brat");

// ======>>> Extending a class:
// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.thirst = 100;
//         this.belly = [];
//     }
//     drink(){
//         this.thirst -= 10;
//         return this.thirst;
//     }
//     eat(food){
//         this.belly.push(food);
//         return this.belly;
//     }
// }
//  class Cat extends Animal{
//      constructor(name,breed){
//          super(name);
//          this.breed = breed;
//      }
//       cuddle(){
//           console.log(`Blossom is a ${this.breed} cat.`)
//       }   
//     }
 

// const rhino = new Animal("rhino");
// const blossom = new Cat("blossom","Russian");

// ======>>> Generators:
// function* listPeople(){
//     yield "Dave";
//     yield "Ava";
//     yield "Mousie";
// }
// const people = listPeople(); 

// ======>>> Proxies:
// const person = {name:"Burger"};
// const personProxy = new Proxy ( person, {
// get(target,name){
//     return target[name].toUpperCase();
// }
// });
// personProxy.name = "Hamburger";

// const person = {name:"Tater"};
// const personProxy = new Proxy (person,{
//     get(target,name){
//         return target[name].toUpperCase();
//     }
// });
// personProxy.name ="Rusty";