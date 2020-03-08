import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.module.css'

const Cockpit = (props) => {

  const toggleBtnRef = useRef(null); 
  
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  // }, [props.persons]);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    }
  });


    const assignedClasses = [];
    let btnClass = '';
    
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.big);
    }

    return(    
        <div className={classes.Cockpit}>
            <h1 className={assignedClasses.join(' ')}>{props.title}</h1>
            <button 
              ref={toggleBtnRef}
              className={btnClass}
              onClick={props.clicked}>
              Toggle Persons
            </button>
        </div>      
        
    );
};

export default React.memo(Cockpit);