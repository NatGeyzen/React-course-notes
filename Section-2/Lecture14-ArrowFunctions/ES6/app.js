// **********
// SYNTAX
// **********

// Basic arrow function
const printMyName1 = (name) => {
    console.log(name);
};

printMyName1('Nat');

// Parameter parentheses can be omitted if there is only ONE parameter
const printMyName2 = name => {
    console.log(name);
};

printMyName2('Nat');

// Empty parentheses HAVE to be specified if there are NO parameters
const printMyName3 = () => {
    console.log('Nat');
};

printMyName3();

// Parentheses HAVE to be specified if there is MORE THAN ONE parameter
const printMyName4 = (name, age) => {
    console.log(name, age);
};

printMyName4('Nat', 28);

// **********
// RETURN
// **********

// return statements inside arrow function
const multiply1 = number => {
    return number * 2;
};

console.log(multiply1(3));

// shorthand version
const multiply2 = number => number * 2;

console.log(multiply2(3));