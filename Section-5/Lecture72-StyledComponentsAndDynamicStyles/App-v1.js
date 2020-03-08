// Any Radium code removed from file
import React, { Component } from 'react';
import styled from 'styled-components';     // new import for styled-components library
import './App.css';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: green;
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    &:hover {
      background-color: lightgreen;
      color: black;
    }
`;

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
    const style = {
      
    };

    let persons = null;

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
      
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('big');
    }

    return (
        <div className="App">
          <h1 className={classes.join(' ')}>Hi, I'm a React App</h1>
          <StyledButton 
            onClick={this.togglePersonHandler}
            >Toggle Persons</StyledButton>
          {persons}
        </div>
      )
  }
}

export default App;   
