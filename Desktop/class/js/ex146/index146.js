const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!',
    shouldOpenBatCave: function(username, password){
        if(username =='batman' && password =='Alfred1960KPO!')
        {
            return true;
        }
        else return false;
    
    },

}

if(user.shouldOpenBatCave("batman", "Alfred1960KPO!") == true)
{
    console.log("Welcome back batman");
}
else console.log("soryy enter again");