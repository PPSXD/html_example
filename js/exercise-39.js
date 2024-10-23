x = () =>{
    x = 1;
    y = 2;
    console.log("I am inside arrow function");
    return [[x,y],[y,x]];
}

[a,b] = x();
console.log(a,b);
