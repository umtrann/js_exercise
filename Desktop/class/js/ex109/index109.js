function validateUser(username, password){
    if(username == 'nacho' && password =='Nerd1979')
    {
        console.log(`Welcome ${username}, nite to see you`);
        return true;
    }
    else if(username == 'pedro' && password == 'Batman0217')
    {
        console.log(`Welcome ${username}, nite to see you`);

        return true;
    }
    else if(username == ' marta' && password =='Mother2312')
    {
        console.log(`Welcome ${username}, nite to see you`);

        return true;
    }
    else 
    {
        console.log(`please input valid credential`);

        return false;
    }
}

validateUser('naho', 'Nerd1979');
