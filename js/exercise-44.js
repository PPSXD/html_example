let companys;
const companies = [
    {name: "company one", category: "retails", start: 1992, end: 2024},
    {name: "company two", category: "finance", start: 1971, end: 2020},
    {name: "company three", category: "wholeSales", start: 1988, end: 1999},
    {name: "company four", category: "wholeSales", start: 1996, end: 2010},
    {name: "company five", category: "retails", start: 1960, end: 2004},
    {name: "company six", category: "finance", start: 1992, end: 2011},
    {name: "company seven", category: "finance", start: 1986, end: 2009},
    {name: "company eight", category: "retails", start: 1977, end: 2012},
    {name: "company nine", category: "retails", start: 1992, end: 2006},
    {name: "company ten", category: "wholeSales", start: 1992, end: 1997}
];

const ages = [33,12,45,77,60,23,7,80,55,67,29,16];

// companies.forEach((company)=> { 
//     console.log(company.start);
//     company.start++;
//     console.log(company.start);
// });
// array foreach
// ages.forEach((age,index)=>{
//     if(index % 2){
//         console.log(age);
//     age = age / 2;
//     console.log(age);
//     ages[index]=age;
//     }
//     });
// for each example 2
// total = 0;
// ages.forEach(age =>{
//     total = total + age;
// });
// console.log(total);
// filter example 3
let adult = [];
for(let i=0; i < ages.length; i++){
    if (ages[i] >= 18){
        adult.push(ages[i]);
    }
}
console.log(adult);
let adult1 = ages.filter(age=>{
    if(age >= 18 ) return true;
});
console.log(adult1);
