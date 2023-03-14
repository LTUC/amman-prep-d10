'use strict';

//factorial 

function fact(n){
    let result=1
    for (let i = 1; i <= n; i++) {
        result*=i 
    }
    return result 
}

function factWithWhile(n){
    let res=1;
    let i =n;
    while(i !=1){
        res*=i;
        i--
    }
    return res
   
}

function factorialWithRecursion(n){
    if(n ==1 || n==0){
        return 1
    }else {
        return n*factorialWithRecursion(n-1)
    }
}



// console.log(factorialWithRecursion(4))//24



//summation 
function summation(n){
    //base case 
    if(n==1){
        return 1
    }else{
        return n+ summation(n-1);
    }
}
// console.log(summation(5));


//fibonacci 

function fibonacci(n){
    if (n==1 || n==0){
        return n
    }else{
        return  fibonacci(n-1) + fibonacci(n-2)
    }


}

console.log(fibonacci(5));


