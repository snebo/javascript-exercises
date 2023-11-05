const removeFromArray = function(Arr, ...args) {
    for(let i = Arr.length-1; i >=0; i--){
        let value=0

        while(value < args.length){
            if(Arr[i] === args[value]){
                Arr.splice(i,1)
            }
            value++
        }
        // it seems after splicing, it rearranges the index and skips the next index
    }
    return Arr
};

// Do not edit below this line
module.exports = removeFromArray;
