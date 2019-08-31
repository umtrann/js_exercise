const mutants = ["Professor X","Cyclops","Iceman","Angel","Magneto","Beast","Phoenix","Logan","Gambit"];
const newMutants = mutants.map(function(name, index){
    if (name =="Professor X" || name == "Logan" || name == "Phoenix" || name == "Gambit") {
        return "<3" + name;
    }
    return name;
}
);

console.log("original:", mutants);
console.log("updated mutant:", newMutants);
