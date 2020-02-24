// Decelare a 'Human' super class
class Human {
    constructor() {
        this.gender = 'female'
    }

    printGender() {
        console.log(this.gender);
    }
}

// Declare a 'Person' subclass that inherits the properties and methods from the superclass
class Person extends Human {
    constructor() {
        super(); 
        this.name = 'Nat'
    }

    printMyName() {
        console.log(this.name);
    }
}

// Create a new instance of the Person class
const person = new Person;

// Call the methods from both classes on th new 'person' instance
person.printMyName();
person.printGender();