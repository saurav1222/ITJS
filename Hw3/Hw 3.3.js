const students= [
    {name:'John', score:80, attendance:50},
    {name:'Alice', score:20, attendance:90},
    {name:'Bob', score:50, attendance:90},
    {name:'Rob', score:70, attendance:65},
    {name:'Drake', score:60, attendance:90}
]

const filteredItems = students.filter((item)=> {
    return item.score >50
})
const filterItems = students.filter((item)=> {
    return item.attendance >50
})
console.log(filterItems)
console.log(filteredItems)