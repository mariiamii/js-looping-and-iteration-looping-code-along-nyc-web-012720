// Code your solutions in this file
function writeCards(array, event) {
    const newArray = [];
    for(let i = 0; i < array.length; i++){
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    };
    return newArray;
};

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    };
};