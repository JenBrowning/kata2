// add
function add(x,y) {
    console.log(x + y);
}
add(2,4)

// multiply
function multiply(a,b) {
    let result = 0;
    for (let i = 0; i < a; i++) {
    result = result + b;
}

return result;
}
console.log(multiply(6,8))

// power
function power(a,b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = multiply(result, a)
    }
    return result;
}
console.log(power(2,8))

// factorial
/*function factorial(n) {  
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  console.log(factorial(4));*/

  function factorial(e) {
    let result = 1;
    for (let i = 1; i < e; i++){
    result = multiply(result,i)
    }  
 
    return result;
   }
 
 console.log(factorial(5));

 // fibonacci

 /*function fibonacci() {
     let result = 1;
     for (let i = 1; i < ?; i++) {
         result = 
     }

 }
 console.log(fibonacci(8))*/

var fibonacci_series= function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(7));
 
