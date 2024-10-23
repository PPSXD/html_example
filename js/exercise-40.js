x = function(z){
    // z =y
    z();
    console.log("I am from expression !")
}
y = function(){
    console.log("I am from second function expression !")
}
x(y);
