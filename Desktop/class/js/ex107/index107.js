function biggerNumber(para1, para2){
    if(typeof para1 != 'number' ||  typeof para2 != 'number')
    {
        

            console.log('have to be numbers');
    }
    else 
    {
        if(para1 > para2)
        {
            console.log(`Number ${para1} is bigger than ${para2}`);
        }
        else if(para1 < para2)
        {
            console.log(`Number ${para2} is bigger than ${para1}`);

        }
        else
            console.log('both numbers are equal');
    }
}
biggerNumber(3,5);
biggerNumber(6,2);
biggerNumber(2,2);
