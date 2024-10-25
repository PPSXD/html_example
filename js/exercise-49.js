a = [5,8,6,10,9];
max_value = (a,b)=>(a>b?a:b);
function max_squence(a){
    let result = a[0];
    for (let e of a){
        result = max_value(result,e);
        
    }
    return result
}
console.log(max_squence(a));

