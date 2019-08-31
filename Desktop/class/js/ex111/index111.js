function identifyEven(number1){
    if(number1%2 ==0){
        console.log(`${number1} is even`);
        return true;
    }
    else         {
        console.log(`${number1} is odd`);
        return false;
    }

}
identifyEven(3);
identifyEven(4);