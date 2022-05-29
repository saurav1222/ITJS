function addAll(...args){
    return args.reduce(function (acc, cur){
        return acc+cur;
    })
}
console.log(addAll(1,2));
console.log(addAll(10,10,30,40));