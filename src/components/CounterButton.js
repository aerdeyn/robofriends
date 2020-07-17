import React, { Component } from 'react';

class CounterButton extends Component {
	constructor(){
		super();
		this.state = {
			count: 0
		}
	}
	
	shouldComponentUpdate (nextProps, nextState) {
		// controls whether the component updates or not
		if (this.state.count !== nextState.count) {
			// only updates if the state changes
		return true;
		}
		return false;
	}

	updateCount = () => {
		// done this way to avoid issues with asynchronous behaviour
		this.setState(state => {
				return {count: state.count + 1}
		})
	}

	render () {
		return (
			<button
				id = 'counter'
				color={this.props.color}
				onClick={this.updateCount}>
				Click Count: {this.state.count}
			</button>
		);
	}
}

export default CounterButton;