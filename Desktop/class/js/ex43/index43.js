let myVar = 'game of thrones';
let firstChar;
let secondChar;
let thirdChar;
firstChar = myVar.charAt(0);
secondChar = myVar.charAt(5);
thirdChar = myVar.charAt(8);
let name = firstChar.concat(secondChar.concat(thirdChar));
name = name.toUpperCase();
console.log("name: ", name);

