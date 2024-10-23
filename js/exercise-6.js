function a(){
    console.log("I am from a")
    return undefined;
}
b = [1, "John", a]
console.log(b[0], b[1], b[2]());
// console.log(1, 'john', a());
// console.log(1, 'john', undefined);