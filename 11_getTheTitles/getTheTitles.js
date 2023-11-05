const getTheTitles = function(library) {
let book_section= []
    for (let i = 0; i<library.length;i++){
        book_section.push(library[i].title)
    }
    return book_section
};

// Do not edit below this line
module.exports = getTheTitles;
