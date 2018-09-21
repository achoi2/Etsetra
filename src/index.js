import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


let intialState = {
    products: [],
    categories: [],
    cartItems: []
};


let reducer = (oldState, action) => {
    if (action.type === '') {
        return oldState + action.ProductsList;
    } else {
        return oldState;
    }
};

let store = createStore(
    reducer,
    intialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let app = <Provider store={store}>
    <div>
        <Router />
    </div> 
</Provider>


ReactDOM.render(app, document.getElementById('root'));