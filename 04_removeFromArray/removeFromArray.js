const removeFromArray = function(Arr, ...args) {
    for(let i = Arr.length-1; i >=0; i--){
        let value=0
        // loops through the arrary
        console.log("arrary: "+Arr[i])

        while(value < args.length){
            console.log(args[value]);
            if(Arr[i] === args[value]){
                console.log("match")
                Arr.splice(i,1)
            }
            value++
        }
        // it seems after splicing, it rearranges the index and skips the next index
    }
    return Arr
};
console.log(removeFromArray([1,2,3,4],2, 1))

// Do not edit below this line
module.exports = removeFromArray;
