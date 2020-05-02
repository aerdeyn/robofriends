import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
	shouldComponentUpdate (nextProps, nextState) {
		// controls whether the component updates or not
		return false;
	}
	
	render () {
		return (
			<div>
			<h1 className = "ba bg-washed-blue shadow-1">RoboFriends</h1>
			<CounterButton color={'red'}/>
			</div>
		);
	}
}

export default Header;