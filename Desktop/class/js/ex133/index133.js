const mutants = ["Professor X","Cyclops","Iceman","Angel","Magneto","Beast","Phoenix","Logan","Gambit"];
let position;

for(let i=0; i<mutants.length;i++){
    if(mutants[i] == "Magneto")
    {
        position =i;
        break;
    }
}

mutants.splice(position, 1);
for(let i=0;i<mutants.length;i++)
{
    console.log(mutants[i].toUpperCase());
}