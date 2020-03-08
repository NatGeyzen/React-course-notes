import React from 'react';   
// Person.css file renamed to 'Person.module.css' and import adjusted accordingly
import classes from './Person.module.css';

// styled-component StyledDiv styles removed

const person = (props) => {

    const rnd = Math.random();
    if (rnd > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}> 
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>  
    )
}

export default person;  
