// styled-component inport removed from imports
import React, { Component } from 'react';  
// importing css file now done by importing classes in App.module.css (previously App.css)
import classes from './App.module.css';
import Person from './Person/Person';

// removed StyledButton component and moved code into App.css file

class App extends Component {
  state = {
    persons: [
      {id: 'vsfg2', name: 'Jane', age: 35},
      {id: 'uire9', name: 'Jim', age: 31},
      {id: 'idna7', name: 'John', age: 28},
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;    
    const persons = [...this.state.persons];
    persons[personIndex] = person; 
    this.setState({ persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  
  render() {

    let persons = null;

    // new variable declared, which is an array of the Button classes
    let btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
            })} 
        </div>
      );
      // styling for button when persons are showing re-added with CSS modules syntax
      btnClass.push(classes.Red);
    }

    

    // classes variable renamed to assignedClasses to avoid name conflicts
    const assignedClasses = [];

    // variable names adjusted to fit new variable name
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.big);
    }

    // <StyledComponent> replaced by regular HTML button element, alt attribute replaced by className
    // classes now called as properties of classes object
    // the btnClass array is turned into a string of classes to insert as className
    return (
        <div className={classes.App}>
          <h1 className={assignedClasses.join(' ')}>Hi, I'm a React App</h1>
          <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      )
  }
}

export default App;   
