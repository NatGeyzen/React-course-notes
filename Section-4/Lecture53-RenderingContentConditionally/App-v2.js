import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'John', age: 28},
      {name: 'Jane', age: 35},
      {name: 'Jim', age: 31}
    ],
    otherState: 'some other value'
    /* new Booelan property added to state, used to toggle between states */,
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

  /* new method that will toggle between hiding and showing the Person components */
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

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          /* method attached to onClick event changed */
          onClick={this.togglePersonHandler}
          >Toggle Persons</button>

        {/* div element added to wrap around the three person components, this div will be hidden or showing */}
        {/* div then enclosed in {} to render content dynamically */}
        {/* ternary operator added to check if 'showPersons' is true, if it is, it will display the div, if not, it will be set to 'null' */}
        { this.state.showPersons ?
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
        </div> : null
      }
        
      </div>
    );
  }
}

export default App;
