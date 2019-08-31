const arithmetic = {
    add: function(num1,num2){
        if(typeof num1 =='number' && typeof num2=='number')
        {
            console.log("add result:", num1 + num2);
        }
        else console.log("Error");
    },
    subtract: function(num1,num2){
        if(typeof num1 =='number' && typeof num2=='number')
        {
            console.log("add result:", num1 - num2);
        }
        else console.log("Error");
    },
    multiply: function(num1,num2){
        if(typeof num1 =='number' && typeof num2=='number')
        {
            console.log("add result:", num1*num2);
        }
        else console.log("Error");
    },
    divide: function(num1,num2){
        if(typeof num1 =='number' && typeof num2=='number')
        {
            console.log("add result:", num1/num2);
        }
        else console.log("Error");
    },
    remainder: function(num1,num2){
        if(typeof num1 =='number' && typeof num2=='number')
        {
            console.log("add result:", num1%num2);
        }
        else console.log("Error");
    },
}

arithmetic.add(2,10);
arithmetic.subtract(10,5);
arithmetic.multiply(3,100);
arithmetic.divide(40,2);
arithmetic.remainder(20,2);