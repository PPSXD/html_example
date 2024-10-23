const person = {"name" : "ryan Chung", age : 20};
console.log(person.name);
console.log(person['age']);
function a(){
    console.log("I am from function a");
}
person.age=a;
person.age();
