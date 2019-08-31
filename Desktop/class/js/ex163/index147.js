const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',

}
function shouldOpenBatCave(user){
    if(user.username =='batman' && user.password =='Alfred1960ROCKS!')
    {
        return true;
    }
    else return false;

}

if(shouldOpenBatCave(user) == true)
{
    console.log("Welcome back batman");
}
else 
{
    console.log("soryy enter again");
}