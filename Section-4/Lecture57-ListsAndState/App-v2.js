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

  // 'switchNameHandler' function removed since it is no longer called

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

  // new function added with a parameter representing the index of the array ite
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* index parameter added to 'map()' function */}
          {this.state.persons.map((person, index) => {
            return <Person
              // click prop added to Person component
              // ES6 arrow function to pass index argument into the Handler
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}/>
            })} 
        </div>
      );
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
