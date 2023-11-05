const findTheOldest = function(people_data) {
// take the multidimensional arrary
// itrate through them 
// sum minus their death from their birth
// check if it is older than the next iteration
// return the oldest value
    let age=0
    let oldest=0, index=0
    for (let i = 0; i<people_data.length;i++){
        age= people_data[i].yearOfDeath - people_data[i].yearOfBirth
        if(oldest < age){
            oldest =age
            index =i
        } 
    }
    return people_data[index]
};

// Do not edit below this line
module.exports = findTheOldest;
