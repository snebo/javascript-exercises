const fibonacci = function(fib) {
// formula for the fibonacci is F(n) = F(n-1)+ F(n-2)
// create a fib sequence
// work with recursions or loops?
//check for negative no
    if (fib<0) return "OOPS"
    else if(fib<=1) return Number(fib)

    return fibonacci(fib-1)+fibonacci(fib-2)

    // using while loop
    // let a =0, b=1
    // while(b<fib){
        // a,b = b, a+b
    // }
    // return b
};

// Do not edit below this line
module.exports = fibonacci;
