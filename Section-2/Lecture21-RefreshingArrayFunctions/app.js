const numbers = [1, 2, 3];

// Loop over an array with map(), which returns an entirely new array and therefor doesn't affect the original array
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);               // [1, 2, 3]
console.log(doubleNumArray);        // [2, 4, 6]