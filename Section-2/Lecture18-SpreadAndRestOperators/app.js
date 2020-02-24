// **********
// SPREAD
// **********

// used to split up array alements
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4 , 5]; 
    // any numbers in the 'numbers' array plus 4 and 5
console.log(newNumbers);


// used to split up object properties
const person = {
    name: 'Nat'
};

const newPerson = {
    ...person,
        // any property in the 'person' object
    age: 28
};

console.log(newPerson)

// **********
// REST
// **********

// used to merge a list of function arguments into an array
const filter = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filter(1, 2, 3));