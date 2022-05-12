"use strict";
const prompt = require ('prompt-sync')();

function Neanderthals(){
let person ={
    name: prompt("Enter your name: "),
    height: prompt("Enter your height: "),
    weight: prompt ("Enter your weight: "),
    bodymass: function (){
        let x= this.weight/(this.height**this.height);
        return x;
    },
   
};
person.BMI=person.bodymass();
return person;
}
const n = new Neanderthals();
const s= new Neanderthals();
console.log (s);
console.log (n);

if (s.BMI>n.BMI){
    console.log(s.name+" BMI is greater than "+n.name);
}
else if (s.BMI==n.BMI){
    console.log(s.name+" BMI is equal to "+n.name);
}
else {
    console.log(n.name+" BMI is greater than "+s.name);

}

