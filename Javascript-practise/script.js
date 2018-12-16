// // counting from -19 to 10
// var count = -10;
// while ( count <=19){
//     console.log("count is : " + count);
//     count++;
// }

// // All even numbers between 10 and 40
// var even = 10;
// while ( even <= 40){
// console.log (even);
// even+=2 ;
// }

// // All odd numbers betweeen 300 and 333
// var odd = 301;
// while(odd <= 333){
//     console.log(odd);
//     odd+=2;
// }

// // Numbers that are divided by both 5 and 3
// var divisibles = 5;
// while (divisibles <=50){
//     if (divisibles % 5 === 0 && divisibles % 3 === 0){
//         console.log(divisibles);
//     }
// }

// annoy o matic 

var answer = prompt("Are we there yet ?");
while( answer !== "yes" && answer !== "yeah"){
    var answer = prompt("Are we there yet ?");
}
alert ("Yay we made it !!!!");


// annoy o matic version 2:
var answer = prompt ("Are we there yet ?");
while( answer.indexOf("yes") === -1){
    var answer = prompt ("Are we there yet ?");
}
alert ("Yay we made it !!!!");