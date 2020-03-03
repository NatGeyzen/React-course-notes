import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 28},
      {name: 'Jane', age: 35},
      {name: 'Jim', age: 31}
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 28},
        {name: 'Jane', age: 35},
        {name: 'Jim', age: 31}
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'John', age: 28},
        {name: event.target.value, age: 35},
        {name: 'Jim', age: 31}
      ]
    });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    // new variable declared within render method
    let persons = null;

    /* new if statement that checks the value of 'showPersons,
       if true, the JSX code for the div is stored in the 'persons' variable */
    if (person.state.showPersons) {
      persons = (
        <div>       
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          >My Hobbies: Coding</Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind('this', 'John!')}
            changed={this.nameChangedHandler}
          >
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />    
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={this.togglePersonHandler}
          >Toggle Persons</button>

        {/* ternary operator and siv with Person components removed from return function */}
        {/* replaced by a reference to the 'persons' variable, which is either null or the JSX code */}
        {persons}
      </div>
    );
  }
}

export default App;
