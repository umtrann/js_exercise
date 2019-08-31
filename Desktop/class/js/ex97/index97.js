let count =0;
console.log(10000);
for(let i=9999; i >=0; i--){
    count++;
    if(count %10 ==0){
        console.log('***', i, '***');
        count =0;
    }
    else
    console.log(i);
}