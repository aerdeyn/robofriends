import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../components/Header';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	// what state do I need to listen to
	// and send it down as props
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	// what propos do I listen to
	// that are actions that need to get dispatched
	return {
		onSearchChange: event => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => requestRobots(dispatch)
	}
}

class App extends Component {
	// constructor() {
	//	super();
	//	this.state = {
	//		robots: [] //,
	//		// searchfield: ''
	//	}
	// }

	componentDidMount() {
		// fetch('https://jsonplaceholder.typicode.com/users')
		//	.then(response=> response.json())
		//	.then(users => this.setState({robots: users}));
		
		// this.setState({robots: robots});
		this.props.onRequestRobots();
	}

	// onSearchChange = (event) => {
	//	this.setState({searchfield: event.target.value})
	// }

	render () {
		// const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPending } = this.props;
		
		// const filteredRobots = this.state.robots.filter(robot => {
		//	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if (isPending) {
			return <h2>Loading ...</h2>
		} else {
			return (
				<div className = "tc">
					<Header/>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// 'connect' is a higher order function (function that returns a function)