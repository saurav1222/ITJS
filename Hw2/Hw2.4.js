let students = [
    {
        name: 'George', marks: 88
    },
    {
        name: 'Lincoln', marks:85
    },
    {
        name: 'John', marks:81
    },
    {
        name: 'Thomas', marks: 92
    },
    {
        name: 'Benjamin', marks: 96
    }
];


   


for (let i=0; i<students.length;i++){
    let student = students[i];

    if (student.marks>=95){
        console.log(student.name +" got A+")
    }
    else if (student.marks>=90){
        console.log(student.name +" got A")
    }
    else if (student.marks>=85){
        console.log(student.name +" got B+")
    }
    else if (student.marks>=80){
        console.log(student.name +" got B")
    }
}

    

