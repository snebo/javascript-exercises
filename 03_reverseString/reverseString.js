const reverseString = function(word) {
    let newWord=""
    for (i= word.length-1; i>=0; i--){
        newWord+= word[i]
    }
    return newWord;
};
// Do not edit below this line
module.exports = reverseString;
