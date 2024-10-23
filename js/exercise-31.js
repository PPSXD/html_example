let x = 0;
while(true){
    if (x >= 10){
        break;
    }
    if(x == 3){
        x++;
        continue; // Because that has a continue that here of the output have no 3.
    }
    console.log(x); 
    x++;
}
