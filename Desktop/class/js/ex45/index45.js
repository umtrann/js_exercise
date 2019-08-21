let playerName = "Patric Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";
let go ;
playerName = playerName.slice(0,12);
teams = teams.slice(46,51);
go = message.slice(34,38);
message = message.slice(12,21);

console.log(playerName);
console.log(teams);
console.log(message);
console.log(go);
teams = teams.toUpperCase(teams.charAt(0));
playerName = playerName.toUpperCase();
console.log(`${playerName} is ${message}${teams}player${go} ${teams}!!`);