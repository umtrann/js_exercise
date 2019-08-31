const mutants = ["Professor X","Cyclops","Iceman","Angel","Magneto","Beast","Phoenix","Logan","Gambit"];

const filterMutants = mutants.filter(function(name){
    if(name == "Magneto" || name=="Iceman" || name == "Gambit")
    {
        return null;
    }
    else
        return name;
    
});
console.log("filter list: ", filterMutants);