let x = 0;
while(true){
    if (x >= 10){
        break;
    }
    if(x === '3'){
        x++;
        continue; // Because that 3 is a string ,so the result has a 3.
    }
    console.log(x); 
    x++;
}
