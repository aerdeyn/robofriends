import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor (props) {
		super (props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({hasError: true});
	}

	render() {
		if (this.state.hasError) {
			return <h1>Massive Error!!!</h1> // render the error msg, or ...
		}
		return this.props.children // render whatever is the child of ErrorBoundary
	}
}

export default ErrorBoundary;