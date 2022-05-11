let person = {
    firstName: 'Saurav',
    lastName: 'Dahal',
    age: 27,
    skills:['React','JavaScript','MongoDb','JASON']   
}

let education = {
    institute_name:'Texas Womans University',
    year:'2021',
    degree:'Comp.Sci degree'
}

let experience={
    company:'Algorizin',
    title:'Intern',
    years_active:'<1yrs'
}

let address={
    present_address:"3726 Esters Rd,Irving",
    permanent_address: "Shrijananagar,Bhaktpur"
}


let info = `
Name:        ${person.firstName} ${person.lastName}

Age:         ${person.age}

Education:   ${education.institute_name} 
             ${education.year} 
             ${education.degree}

Experience:  ${experience.company} 
             ${experience.title} 
             ${experience.years_active}

Address:     temp- ${address.present_address} 
             perm- ${address.permanent_address}

Skills:      ${person.skills}
           `;
console.log(info);
console.log(`Hi, my name is ${person.firstName} ${person.lastName}. 
I am  ${person.age} years old.
My present address is ${address.present_address}. 
I took my ${education.degree} from ${education.institute_name}. 
I am currently working in ${experience.company} as a ${experience.title}.`)