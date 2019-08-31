function getShapePerimiter(base, height){
   let perimeter =0;
    if(base == height){
        perimeter = base*height;
    }
    else
    {
        perimeter = (base +height)*2;
    }
    return perimeter;
}
console.log(getShapePerimiter(2,5));
console.log(getShapePerimiter(10,10));