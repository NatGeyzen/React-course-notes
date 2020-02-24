// THIS IS AN ES7 VERSION OF THE CODE FROM LECTURE 16: CLASSES

class Human {
    // constructor no longer necessary
    gender = 'female';

    // function statement is turned into arrow function
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
    name = 'Nat';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person;

person.printMyName();
person.printGender();