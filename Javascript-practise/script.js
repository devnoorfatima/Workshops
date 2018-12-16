// // // counting from -10 to 19
// var count = -10;
// while ( count <=19){
//     console.log("count is : " + count);
//     count++;
// }

// // // All even numbers between 10 and 40
// var even = 10;
// while ( even <= 40){
// console.log (even);
// even+=2 ;
// }

// // // All odd numbers betweeen 300 and 333
// var odd = 301;
// while(odd <= 333){
//     console.log(odd);
//     odd+=2;
// }

// // // Numbers that are divided by both 5 and 3
// var divisibles = 5;
// while (divisibles <=50){
//     if (divisibles % 5 === 0 && divisibles % 3 === 0){
//         console.log(divisibles);
//     }
// }

// // annoy o matic 

// var answer = prompt("Are we there yet ?");
// while( answer !== "yes" && answer !== "yeah"){
//     var answer = prompt("Are we there yet ?");
// }
// alert ("Yay we made it !!!!");


// // annoy o matic version 2:
// var answer = prompt ("Are we there yet ?");
// while( answer.indexOf("yes") === -1){
//     var answer = prompt ("Are we there yet ?");
// }
// alert ("Yay we made it !!!!");

// for loops

// numbers b/w  -10 and 19
for(i=-10; i<=19; i++){
console.log(i);
}

// even numbers b/w 10 and 40
for(e=10; e<=40; e+=2){
    console.log(e)
}

// odd numbers between 300 and 333
for(o=301; o <=333; o+=2){
    console.log(o)
}

// all numbers divisible by 5 and 3 b/w 5 and 50
for(d=5; d<=50; d++){
    if(d % 5 === 0 && d % 3 === 0){
    console.log(d)}
}