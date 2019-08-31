const numbers = [];
for(let i=0;i<1000;i++)
{
    numbers[i] = i+1;
}
const newNumbers = numbers.map(function(number, index) {
    console.log("index: ", index, "original number: ", number, " incremented value: ", number+10);
    return number + 10;
  });