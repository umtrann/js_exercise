function sort(number1, number2, number3, hightoLow){
    let lowest;
    let secondLowest;
    let greatest;
    if(number1 < number2)
    {
        if(number2 < number3)
        {
            lowest = number1;
            secondLowest = number2;
            greatest =number3;
        }
        else
        {
            if(number1 > number3)
            {
                lowest = number3;
                secondLowest = number1;
                greatest = number2
            }
        }
        
    }
    else
    {
        if(number1 < number3)
        {
            lowest = number2;
            secondLowest = number1;
            greatest = number3;
        }
        else
        {
            if(number2> number3)
            {
                lowest = number3;
                secondLowest= number2;
                greatest = number1;

            }
        }
    }
    if(hightoLow)
    {
        console.log('hight to low:',greatest, secondLowest,lowest);
    }
    else
    console.log('order: ', lowest, secondLowest, greatest);
}
sort(10,8,25, false);
sort(99,88,77, true);
