const sumAll = function(min, n) {
// take two parameters, min and n
// create a sum variable
// while min is < n, we add the min to sum and increament min
// return sum
let sum = 0;
if((typeof min) != "number" || (typeof n) !="number"){
    return "ERROR"
}
else if(min<0 || n<0){return "ERROR"}
if(min>n){
    let _ = min
    min = n
    n = _
}
while(min <= n){
    sum+=min
    min++
}
return sum
};

// Do not edit below this line
module.exports = sumAll;
