const removeFromArray = function(Arr, ...args) {
    for(let i=0; i < Arr.length; i++){
        let value=0
        // loops through the arrary
        console.log("arrary: "+Arr[i])

        while(value < args.length){
            console.log(args[value]);
            if(Arr[i] === args[value]){
                Arr.splice(i, 1)
                // to fix the skipped index, we check again
                if(Arr[i] === (args[value])){
                    Arr.splice(i,1)
                }
            }
            value++
        }
        // for(let j=0; j<args.length; j++){
        //     console.log("value: "+args[j])
        //     if (Arr[i] === args[j]){
        //         Arr.splice(i,1)
        //     }
        // }
    }
    return Arr
};
console.log(removeFromArray([1,2,3,4],2, 1))

// Do not edit below this line
module.exports = removeFromArray;
