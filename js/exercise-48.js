y=0;
x = {name:'ryan',
    fun: () => {y++}
}
a = {name: "ann",
    fun : x.fun
}
x.fun();
z = [x.fun];
z[0]();
a.fun();
console.log(y);
