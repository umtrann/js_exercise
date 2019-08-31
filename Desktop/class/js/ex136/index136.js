const mutants = ["Professor X","Cyclops","Iceman","Angel","Magneto","Beast","Phoenix","Logan","Gambit"];
let value = "";
mutants.forEach(function(mut,index) {
    if(mut =="Iceman" || mut =="Logan" || mut=="Phoenix")
    {
        value = value.concat(mut);
    }
});
console.log("generated string: ", value);