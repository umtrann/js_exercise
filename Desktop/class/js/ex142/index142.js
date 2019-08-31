const firstPerson =["neil","tran","loyola",31];
const  secondPerson =["neil","tran","loyola",31];
const valueFirstPerson = firstPerson.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
});
const valueSecondPerson = secondPerson.reduce(function(accumulator,currentValue){
    return accumulator+currentValue;
});

if(valueFirstPerson == valueSecondPerson)
{
    console.log("two person are the same");

}else console.log("two person are different");