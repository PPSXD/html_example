const person = {"name" : "ryan Chung", age : 20};
console.log(person.name);
console.log(person['age']);
function a(){
    console.log("I am from function a");
}
person.age=a;
const p2 = {address : "prince house", floor: 8};
p2.floor = person.age;
p2['floor']();
function b(x){
    x() //死機
b(a());　//undefined
}
