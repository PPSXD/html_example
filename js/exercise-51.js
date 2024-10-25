a = [5,8,6,10,9];
max_value = (a, b) => (a > b ? a : b);
sum = (a, b) => a + b;
min_value = (a, b) =>(a<b?a:b);
function reduce(fn, a){ //fn = sum, a=a
let result = a[0];
    for (let i = 1; i < a.length;i++){
        console.log(i++)
        result = fn(result, a[i]);
        console.log(result);
    }
    return result;
}
console.log(reduce(sum,a));

