a = (1 || false);
console.log(a + " is the truthy value");

b = (0 || undefined);
console.log(b + " is the false value");

c = (0 || 1 || undefined);
console.log(c + " is the truthy value");

d = (0 || '' || undefined || null || false || NaN);// falsy value
console.log(d + "is the falsy value");

e = (0 || '' || undefined || null || false || NaN);
if(!0){
console.log("TRUE");
}

f = (0 || '' || undefined || null || false || NaN);
deault_city = "KN";
city = '';
f = city || console.log("input city") || deault_city;
console.log(f);

g = (0 || '' || undefined || null || false || NaN);
deault_city = "HK";
city = '';
g = city ||1-1 ||console.log("1+1") || deault_city;
console.log(g);



