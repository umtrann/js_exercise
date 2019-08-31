function showNumbers(start, end){
    if(typeof start != 'number' || typeof end!='number')
    {
        console.log('parameters that are not numbers');

    }
    else{
        if(start>end){
            for(let i=start; i>=end;i--){
                console.log(i);
            }
        }
        else if(start<end){
            for(let i=start; i<=end;i++){
                console.log(i);
            }
        }
        else console.log('start and end are the same numbers');
    }
}

showNumbers(2,20);
showNumbers(15,1);
showNumbers(8,8);