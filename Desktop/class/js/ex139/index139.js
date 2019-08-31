const numbers = [];
for(let i=0; i<1000;i++){
    numbers[i] = i+1;
}
const evenNumbers = numbers.filter(function(number){
    if(number%2 ==0)
    {
        return number;
    }
    else return null;
});
const oddNumbers = numbers.filter(function(number){
    if(number%2 !=0)
    {
        return number;
    }
    else return null;
});

for(let i=0;i<20;i++){
    console.log("even number:", evenNumbers[i]);
}
for(let i=oddNumbers.length-1; i>oddNumbers.length -11;i--)
{
    console.log("odd number:", oddNumbers[i]);

}