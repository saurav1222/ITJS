let isOdd=[1,5,10,12,15,20,23];

const odds = [];

   isOdd.forEach(number =>{
       if(number%2!==0) {
       odds.push(number);
   }
   });

   console.log(odds);
