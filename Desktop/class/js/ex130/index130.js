const mutants = ["Professor X", "Cyclops", "Iceman", "Angel", "Beast", "Phoenix"];
console.log("Original mutants list:", mutants);
const sortMutants = mutants.sort();
console.log("Sorted mutants list: ", sortMutants);
const reserveMutants = mutants.reverse();
const joinMutants = mutants.join(' * ');

console.log("Reserved mutants list: ", reserveMutants);
console.log("Mutants name separated by *: ",joinMutants );