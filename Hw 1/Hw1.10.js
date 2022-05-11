"use strict";
const prompt = require ('prompt-sync')();

let height = prompt("What's your height(in meters)? ");
let weight = prompt("What's your weight(in kg)? ");

let mass = weight/(height*height);

console.log ("Your BMI is: "+mass);