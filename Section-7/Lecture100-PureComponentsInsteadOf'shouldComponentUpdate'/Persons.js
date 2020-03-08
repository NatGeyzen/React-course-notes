import React, {PureComponent} from 'react';
import Person from './Person/Person'

// PureComponent is the equivalent of shouldComponentUpdate with all properties included
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');

    //     /* NOTES:
    //         -> added 2 more checks inside if statement so it doesn't only update when changes to persons array were made,
    //             but also when person is deleted or name is changed 
    //         -> mostly used when a couple, but not all of the properties should trigger a rerender */

    //     if (
    //         nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true; 
    //     } else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};       
    }

    componentDidUpdate(prevProps, nextProps, snapshot) {
        console.log('[Persons.js] componentDidUpdate');   
        console.log(snapshot);
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering ...')
        return this.props.persons.map((person, index) => {
            return <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} />
            })
    }
    
}

export default Persons;