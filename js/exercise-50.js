aa = [2,33];
max_value = (a,b)=>(a>b?a:b);
function max_squence(aa){
    let result = aa[0];
    for (let e of aa){
        result = max_value(result,e);
    }
    return result;
}
console.log(max_squence(aa));

// case 2
min_value = (a,b) => (a < b ? a:b);
function min_sequence(aa) {
    let result = aa[0];
    for (let e of aa) {
        result = min_value(result,e);
    }
    return result;
}
console.log(min_sequence(aa));

// case 3
function reduce(fn, aa) {
    if (aa.length === 0){
        return console.log("can't compute empty array !")
    }
    if (aa.length === 1){
        return aa[0];
    }
    if(aa.length > 1){
        let result = aa[0];
        for (let x = 1; x < aa.length; x++) {
            result = fn(result,aa[x]);
    }
        return result;
    }
}
console.log(reduce(max_value, aa));
console.log(reduce(min_value, aa));
console.log(reduce((a,b)=>a+b, aa));
