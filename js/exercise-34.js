function a(){
    console.log("I am from function a!");
}
const b = function(){
    console.log("I am from expression");
}
const c = () => {
    console.log("I am from arrow function!");
}
a([1,2,3]);
b();
c();
