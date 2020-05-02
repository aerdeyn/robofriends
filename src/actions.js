import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

export const setSearchField = (text) => {
	// return an object with the following properties
	return {
		type: CHANGE_SEARCH_FIELD, // constant
		payload: text
	}
}


export const requestRobots = (dispatch) => {
	dispatch({ type: REQUEST_ROBOTS_PENDING});
	// fetch the users asynchronously from the remote API
	// then return the 
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data})) // dispatch the data from the API
		.catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error}))
}