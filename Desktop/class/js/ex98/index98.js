let result =0;
for(let i=0; i<1000; i++){
    result = result + i;
    if(result >400)
    {
        break;
    }
}
console.log('result is ', result);