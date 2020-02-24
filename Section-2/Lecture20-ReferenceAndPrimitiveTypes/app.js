// ***********************************
// PRIMITIVE TYPES (BY VALUE)
// ***********************************

const num1 = 1;
let num2 = num1;
num2 = 2;
console.log(num1);         // 1
console.log(num2);         // 2

// When a primitive variable is set to another primitive variable, a copy is made
// Changing the value of the copy does NOT change the value of the original


// ***********************************
// OBJECTS, ARRAYS (BY REFERENCE)
// ***********************************

const person1 = {
    name: 'John'
};
const person2 = person1;
person2.name = 'Jane';
console.log(person1);       // { name: 'Jane' }
console.log(person2);       // { name: 'Jane' }

// When an object/array variable is set to another object/array variable, a reference to memory is made (NOT a copy)
// Changing the value of the object/array pointing to the original object/array, changes the value of both

const person3 = {
    name: 'John'
};
const person4 = {
    ...person3
}
person4.name = 'Jane';
console.log(person3);       // { name: 'John' }
console.log(person4);       // { name: 'Jane' }

// Creating a new object and using the spread operator on the properties of the original object, DOES create a copy
// Changing the value of the copy does NOT change the value of the original