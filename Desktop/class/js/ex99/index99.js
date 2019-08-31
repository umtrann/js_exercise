let count =0;
let result =0;
for(let i=0; i<=1000; i = i+2){
    count++;
    result = result +i;
    if (count ==20){
        break;

    }
}
console.log('count is ', count, 'result is ', result);