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

companies.forEach((company)=> { 
    console.log(company.start);
    company.start++;
    console.log(company.start);
});
