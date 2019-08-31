function revert(myText){
    let newText ="";
    for(let i=myText.length-1; i>=0; i-- )
    {
        newText = newText + myText[i];
        console.log('temp', newText);
    }
    console.log('reverse value', newText);
}
revert("hello");