x = (callback) =>{
    // let callback = y
    // z =y
    callback();
    console.log("I am from expression !")
}
y = () => {
    console.log("I am from second function expression !")
}
x(y);
