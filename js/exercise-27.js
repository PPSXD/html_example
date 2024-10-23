let a = 11;
// && is higher precedance than ||
if((a <= 10) && (a >= 12) || (a == 11)){
   console.log("a is false");
}else{
    console.log("a is true");
}

let b = 11;

if((b <= 10) || (b >= 12) && (b == 11)){
   console.log("b is false");
}else{
    console.log("b is true");
}
