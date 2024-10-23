function a(){
    console.log("I am from function a");
    return b;
}
function b(){
    console.log("I am from function b !");
    return a;
}
a()()()()()();
