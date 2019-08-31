function getUserID()
{
    return 10;

}
function isUserValid(){
    let value = getUserID();
    if(value >30)
    {
        return true;
   }
    else
    {
        return false;
    }
}

if(isUserValid())
{
    console.log("user valid");
}
else
    console.log("user not valid");
