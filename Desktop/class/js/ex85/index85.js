let temp=0;
let a=0;
let b=1;
let n=10;
let i=0;
console.log("fibonacci: ", a);
console.log("fibonacci: ", b);
do{
    //  console.log("fibonacci: ", f);
  
    //  f = f1+f2;
   //   f1=f2;
     // f2=f;
     temp = b;
     b=a+b;
     a = temp;
      console.log("fibonacci: ", b);
      i++;
      
  }
while(i<=n)



