import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

// use * to import everything from the folder
import * as reducers from './reducers';

describe('searchRobots', () => {
	
	const initialStateSearch = {
		searchField: ''
	}

	it ('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
	})

	it ('should handle CHANGE_SEARCH_FIELD action', () => {
		expect(reducers.searchRobots(initialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({
			searchField: 'abc'
		})
	})
})


describe('requestRobots', () => {
	
	const initialStateRobots = {
		error: '',
		robots: [],
		isPending: false
	}

	const foundRobots = {
		error: '',
		robots: [{
			id: 3,
			name: 'John',
			email: 'john@gmail.com'
		}],
		isPending: false
	}

	it ('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
	})

	it ('should handle REQUEST_ROBOTS_PENDING action', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_PENDING,	
		})).toEqual({
			robots: [],
			isPending: true
		})
	})

	it ('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: {
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}
		})).toEqual({
			error: ''
			robots: [{
				id: 3,
				name: 'John',
				email: 'john@gmail.com'
			}],
			isPending: false,
		})
	})

	it ('should handle REQUEST_ROBOTS_FAILED', () => {
		expect(reducers.requestRobots(initialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: 'Error!'
		})).toEqual({
			error: 'Error!',
			robots: [],
			isPending: false
		})
	})
})