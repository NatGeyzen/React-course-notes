import React, {Component} from 'react';

class ErrorBoundary extends Component {
    // set state to reflect no error
    state = {
        hasError: false,
        errorMessage: ''
    }

    // update state if there is an error
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error})
    }

    // render content based on error or not
    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;