import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js';

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	// the reducer is a PURE FUNCTION that comverts
	// the action to a change in state and returns it to the store
	// console.log(action.type);
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			// copy 'action.payload' to the same field in the 'state' object
			// and return it to the store
			return Object.assign({}, state,{searchField: action.payload});
		default:
			// no change to state
			return state;
	}
}

const initialStateRobots = {
	isPending: false,
	robots: [],
	error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
	// the reducer is a PURE FUNCTION that comverts
	// the action to a change in state and returns it to the store
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return Object.assign ({}, state, { isPending: true});
		case REQUEST_ROBOTS_SUCCESS:
			return Object.assign ({}, state, { robots: action.payload, isPending: false})
		case REQUEST_ROBOTS_FAILED:
			return Object.assign ({}, state, { error: action.payload, isPending: false})
		default:
			return state;
	}
}