const pets = [
    {type: 'dog', name:'john', age:6},
    {type: 'cat', name:'jack', age:2},
    {type: 'dog', name:'jackie', age:8},
    {type: 'cat', name:'peter', age:10}
];
const groupedPets = pets.reduce((temp, i)=>{
    const variable = i.type;
    if(!temp[variable]){
        temp[variable]=[];
    }
    temp[variable].push(i.name);
    return temp;
},{})
console.log(groupedPets);

