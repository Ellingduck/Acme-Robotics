import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import configureStore from './baseplate/configureStore';
import history from './baseplate/history';

const initialState = {}; // Empty | LocalStorage | SessionStorage
const store = configureStore(initialState, history); // Redux store
const MOUNT_NODE = document.getElementById('root'); // Root node

// Render the app with the react virtual DOM.
ReactDOM.render(<Provider store={store}> <App /> </Provider>, MOUNT_NODE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
