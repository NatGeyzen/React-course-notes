import React from 'react';   
// Person.css file renamed to 'Person.module.css' and import adjusted accordingly
import classes from './Person.module.css';

// styled-component StyledDiv styles removed

const person = (props) => {

    // StyledDiv replaced by regular HTML/JSX div
    return (
        <div className={classes.Person}> 
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>  
    )
}

export default person;  
