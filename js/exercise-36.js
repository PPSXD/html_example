function a(x,y){
    // x = b, y = c
    console.log("I am from function a!", "with" + x(y));
}

const b = function(y){
    // y = y =c
    console.log("I am from expression " + y()());
}
const c = () => {
    console.log("I am from arrow function!");
    const d = () =>{
        console.log("I am from inner function")
    }
    return d;
}

a(b,c);

