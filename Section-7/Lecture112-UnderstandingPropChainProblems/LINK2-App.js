import React, { Component } from 'react';  
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 'vsfg2', name: 'Jane', age: 35},
      {id: 'uire9', name: 'Jim', age: 31},
      {id: 'idna7', name: 'John', age: 28},
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    // new property added to the state, used inside the newly created 'loginHandler'
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate'); 
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate'); 
  }

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

    // this.setState({ persons: persons});

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
    console.log(this.state.changeCounter);
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

  // event handler added, referenced inside the Cockpit's attributes at the bottom of this file
loginHandler = () => {
  this.setState({authenticated: true});
}

  render() {
    console.log('[App.js] render');

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            // new attribute added with the newly created state property as its value 
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
        <Aux>
          <button
            onClick={() => this.setState({showCockpit: false})}
          >Remove cockpit</button>
          {this.state.showCockpit ? (
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
            // login attribute added, referenced as prop inside Cockpit.js
            login={this.loginHandler}
          /> 
          ) : null}
          {persons}
        </Aux>
      )
  }
}

export default withClass(App, classes.App);   
