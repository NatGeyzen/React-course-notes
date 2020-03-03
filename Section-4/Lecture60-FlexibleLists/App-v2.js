import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import person from './Person/Person';

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
    // find the index of the person in which user typed a new name
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // create a copy of the person found above, instead of directly mutating the original persons object
    const person = {
      ...this.state.persons[personIndex]
    };

    // alternative to above code:
    // const person = Object.assign({this.state.persons[personIndex];});

    // store the user's input in the person's name property
    person.name = event.target.value;    

    // create a copy of the original array to mutate
    const persons = [...this.state.persons];

    // update the persons array with the updated person, in the right position within the array
    persons[personIndex] = person; 
    
    // set the new state to the mutated copy array
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
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              // added 'changed' attribute with 'nameChangedHandler' method
              changed={(event) => this.nameChangedHandler(event, person.id)} />
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
