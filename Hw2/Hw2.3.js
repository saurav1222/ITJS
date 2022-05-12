let students = [
    {
        name: 'George', marks: [75, 85, 95]
    },
    {
        name: 'Lincoln', marks: [95, 90, 85] 
    },
    {
        name: 'John', marks: [82, 73, 78] 
    },
    {
        name: 'Thomas', marks: [98, 85, 95] 
    },
    {
        name: 'Benjamin', marks: [93, 94, 99] 
    }
];

let highest_name;
let highest_mark=0;
for (let i=0; i<students.length;i++ ){
    let student = students[i];
    let total_mark=0;
    for(let j=0;j<student.marks.length;j++){
        total_mark = total_mark+student.marks[j];
    }
    let average_mark= total_mark/student.marks.length;
 
    if (average_mark>highest_mark){
        highest_mark= average_mark;
        highest_name= student.name;
    }
}
console.log(highest_name+" is the brighest student")


