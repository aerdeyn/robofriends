import { shallow, mount, render } from 'enzyme';
import React from 'react';	// needed to read JSX
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
	const mockProps ={
		onRequestRobots: jest.fn(), // just a simple func
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps}/>)
});

it ("expect MainPage to render", () => {
	expect(wrapper).toMatchSnapshot();
})

it ("expect MainPage to filter robots correctly", () => {

	const mockProps2 ={
		onRequestRobots: jest.fn(), // just a simple func
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'a',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>);
	expect(wrapper2.instance().filterRobots()).toEqual([]);
	expect(wrapper2.instance().filterRobots()).toEqual([]);
})

it ("expect MainPage to filter robots correctly 2", () => {

	const mockProps3 ={
		onRequestRobots: jest.fn(), // just a simple func
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		searchField: 'J',
		isPending: false
	}
	const wrapper3 = shallow(<MainPage {...mockProps3}/>);
	expect(wrapper3.instance().filterRobots()).toEqual([
		{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}]);
})

it ("expect MainPage to filter robots correctly 3", () => {

	const mockProps4 ={
		onRequestRobots: jest.fn(), // just a simple func
		robots: [],
		searchField: '',
		isPending: true
	}
	const wrapper4 = shallow(<MainPage {...mockProps4}/>);
	expect(wrapper4.instance().filterRobots()).toEqual([]);
})

	
