import React, {Component} from 'react';   
import Aux from '../../../hoc/aux';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering ...')
        return (
            // <div className={classes.Person}> 
            // [
            //     <p key="item1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>,
            //     <p key="item2">{this.props.children}</p>,
            //     <input key="item3" type="text" onChange={this.props.changed} value={this.props.name}></input>,
            // ]
            // </div>  
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}></input>              
            </Aux>
        )    
    }
    
}

export default Person;  
