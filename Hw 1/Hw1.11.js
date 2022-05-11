"use strict";
const prompt = require ('prompt-sync')();

let number = parseInt(prompt("Please enter positive number: "));
let isPrime = true;

if (number===1){
    console.log("The number number is neither prime nor composite.")
}
else if (number>1){
    for (let i=2; i<number; i++){
        if (number%i ==0){
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
    


