import React, {Component} from 'react';   
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

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
                {/* added ternatory operator, which uses the attribute passed down to Person inside 'Person.js' */}
                {this.props.isAuth ? <p>Authenticated!</p> : <p>Please log in.</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />           
            </Aux>
        )    
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);  
