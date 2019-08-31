let temp=0;
let a=0;
let b=1;
let n=10;
let i=0;
console.log("fibonacci: ", a);
console.log("fibonacci: ", b);

for(i=0;i<=n; i++){
    temp = b;
    b=a+b;
    a = temp;
     console.log("fibonacci: ", b);
     
}

