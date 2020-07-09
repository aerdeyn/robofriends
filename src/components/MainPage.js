import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../components/Header';
import './MainPage.css';


class MainPage extends Component {

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

	filterRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
		})
	}

	render () {
		// const { robots } = this.state;
		const { onSearchChange, robots, isPending } = this.props;
		
		// const filteredRobots = this.state.robots.filter(robot => {
		//	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		// })

		if (isPending) {
			return <h2>Loading ...</h2>
		} else {
			return (
				<div className = "tc">
					<Header/>
					<SearchBox searchChange={onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={this.filterRobots()}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default MainPage;