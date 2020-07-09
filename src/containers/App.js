import React, {Component} from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';
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
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	render () {
		return <MainPage { ...this.props }/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// 'connect' is a higher order function (function that returns a function)