const palindromes = function (phrase) {
let punctuation = /[\.,?! ]/g
newPhrase = phrase.replace(punctuation,"").toLowerCase()
reversePhrase = newPhrase.split("").reverse().join("")
if (newPhrase == reversePhrase){return true}
else{return false}
};
// Do not edit below this line
module.exports = palindromes;
