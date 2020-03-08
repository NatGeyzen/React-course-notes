import React from 'react';
import Radium from 'radium';       // Radium imported 
import './Person.css';

const person = (props) => {

    // new style defined with media query
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
  
    // style attribute added to div
    return (
        <div className="Person" style={style}>      
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default Radium(person);  // export turned into function wrapping around component
