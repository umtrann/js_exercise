const femaleStudents = ["leslie","angela","mary","danele","shannon"];
const maleStudents = ["ronaldo","messi","neymar","rooney","zidane"];
const students = femaleStudents.concat(maleStudents);
let i=0;
students.sort();
console.log("Female students:\n", femaleStudents[0],'\n', femaleStudents[1],'\n', femaleStudents[2],'\n',femaleStudents[3],'\n', femaleStudents[4],'\n');
console.log("Male students:");
while(i<maleStudents.length)
{
    console.log(maleStudents[i]);
    i++;
}
console.log("Students:");

for(let i=0; i<students.length;i++){
    console.log(students[i]);
}
