let message = "3.14 it's a great number but 42 it's the answer to life.";
let piText = message.substr(0,4);

let piFloat = parseFloat(piText);
console.log(typeof piFloat);

let answerToLife = message.slice(29, 31);
answerToLife = parseInt(answerToLife);
console.log(typeof answerToLife);
console.log(typeof pi);

let result = piFloat + answerToLife;
console.log(piFloat);
console.log(answerToLife);
console.log('result', result);
result = result.toString();
console.log(result);