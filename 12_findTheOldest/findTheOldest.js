const findTheOldest = function(people_data) {

    let age=0
    let oldest=0, index=0
    for (let i = 0; i<people_data.length;i++){
        age= people_data[i].yearOfDeath - people_data[i].yearOfBirth

        if (typeof people_data[i].yearOfDeath === "undefined"){
            let current_Date = new Date()
            let yearLiving = current_Date.getFullYear()
            age=yearLiving-people_data[i].yearOfBirth
        }

        if(oldest < age){
            oldest =age
            index =i
        } 
    }
    return people_data[index]
};

// Do not edit below this line
module.exports = findTheOldest;
