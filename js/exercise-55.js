const people = [
    {name:"john", age:60},
    {name:"ryan", age:25},
    {name:"ann", age:18},
    {name:"anna", age: 22}];
const totalAge = people.reduce((accumulator,person)=>{
    return accumulator + person.age;
},0);
console.log(totalAge);

