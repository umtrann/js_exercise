let ingredients = ["pork","potato","chicken","lettuce","beef","carrots","cucumber"];
let vegetarian = [];
let j=0;
for(let i=0; i<ingredients.length;i++){
    if(ingredients[i] == "potato" || ingredients[i] == "lettuce" || ingredients[i] == "carrots" || ingredients[i] == "cucumber"){
        vegetarian[j] = ingredients[i];
        j++;
    }
}
console.log('vegetarian', vegetarian);