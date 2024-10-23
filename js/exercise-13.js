function a(){
let x;
    function b(){
         x = 1;
    }
    b();
}
a();
let x;
{
    let y = 1;
    {
    console.log(y);
    }
}
console.log(y);
