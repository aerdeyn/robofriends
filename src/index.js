import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger'; // logging middleware for redux
import thunk from 'redux-thunk';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, requestRobots } from './reducers';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
	// Provider wraps the App and passes down the store to all components in the tree
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register(); //CLL now running the service worker!
