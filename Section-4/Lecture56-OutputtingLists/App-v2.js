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

    let persons = null;

    if (person.state.showPersons) {
      persons = (
        <div>
          {/* use 'maps()' to loop over the state's 'persons' array and return valid JSX */} 
          {this.state.persons.map(person => {
            return <Person
              name={person.name}
              age={persons.age}/>
            })} 
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
        {persons}
      </div>
      )
  }
}

export default App;
