import React from 'react';
//imports de redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxPromise from 'redux-promise';

export default ({children, initialState = {purchases: ['eee']}}) => {
    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (<Provider store={store}>
        { children }
    </Provider>)
}