x = ()=>{
    console.log("hello");
}
x();
y = x;
x = 1;
console.log(x);
x = y;
x();
