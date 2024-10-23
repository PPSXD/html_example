k = 0;
x = (callback) =>{
    // let callback = y

    console.log("I am from expression !");
    return callback();
}
y = () => {
    console.log("I am from second function expression !");
    return 1;
}
w = () =>{
    console.log("I am from third function expression !");
    return 2;
}
if(k ==0 ){a = x(y);} else {a = x(w);}
// a = k == 0 ? x(y) : x(w);
console.log(a);
