"use strict";
const prompt = require ('prompt-sync')();

let birthyear = prompt("What's your birth year? ");

const d = new Date();
let year = d.getFullYear();

let age = year - birthyear;

console.log(year+"-"+birthyear+" = "+age+" years old!");
