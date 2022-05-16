function Street(name,size){
    this.name = name;
    this.size = size;   
}

function Park(name,totl_trees,age,area){
    this.name=name;
    this.totl_trees= totl_trees;
    this.age=age;
    this.area=area;

   this.density= function(){
        let x = this.totl_trees/this.area;
        return x;
        
    } 
    
  this.density();
}

let street1 = new Street('Esters',47 );
let street2 = new Street('Beltline',77 );
let street3 = new Street('Washington',84 );
let street4 = new Street('Arlington',56 );

let park1= new Park('George',2000,45,10);
let park2 = new Park('John',40,50,60);
let park3 = new Park('Smith', 70, 80,89);

console.log(park1.density());
console.log(park2.density());
console.log(park3.density());

 let average_age = (park1.age+ park2.age+park3.age)/3;
 let total_length = (street1.size+street2.size+street3.size+street1.size);
 let average_length = total_length/4

 console.log(average_age);
 console.log (total_length);
 console.log (average_length);

 let parks= [
  {name:'George', total_trees:2000, age:45, area:10},
  {name:'John', total_trees:4000, age:50, area:60},
  {name:'Smith', total_trees:70, age:80, area:89}
 
];

for (let i=0; i<parks.length;i++){
  let p = parks[i];

  if (p.area>=80){
      console.log(" huge")
  }
  else if (p.area>=70){
    console.log(" big")
}
  else if (p.area>=60){
    console.log(" small")
}
  else {
      console.log(" tiny")
  }
}



for (let i=0; i<=parks.length;i++){
  let p= parks[i];
  if (p.total_trees>1000){
    console.log(p.name);
  }
}



