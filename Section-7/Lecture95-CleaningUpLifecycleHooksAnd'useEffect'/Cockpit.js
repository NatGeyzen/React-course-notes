import React, {useEffect} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  // }, [props.persons]);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);


    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.big);
    }

    return(    
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>      
        
    );
};

export default Cockpit;