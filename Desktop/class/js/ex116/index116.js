function getHexaColor(color){
    let returnValue;
    if(color == 'white')
    {
        returnValue = "#FFFFFF";
    }
    else if(color == 'black')
    {
        returnValue = '#000000';
    }
    else if(color == 'blue')
    {
        returnValue = '#0b24fb';
    }
    else if (color = 'yello')
    {
        returnValue = '#fffd38'
    }
    else if(color == 'pink')
    {
        returnValue = '#fec1cc';
    }
    return returnValue;
}

console.log(getHexaColor("blue"));