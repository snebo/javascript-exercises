const palindromes = function (phrase) {
// take the string
// remove spaces
// reverse the string
// check if they match
newPhrase = phrase.replace(" ","")
reversePhrase = newPhrase.split("").reverse().join("")
if (newPhrase == reversePhrase){return true}
else{return false}
};

// Do not edit below this line
module.exports = palindromes;
