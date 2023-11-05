const leapYears = function(year) {
// two conditions for leap leapYears
// the year is divisible by four
// years divisible by 100 are only leap years if they are also dviisible by 400
if (year%100 == 0 && year%400 == 0){
    return true
}
else if(year%100==0 && !(year%400==0)){return false}
if (year%4==0 ){
    return true
}
else return false;
};

// Do not edit below this line
module.exports = leapYears;
