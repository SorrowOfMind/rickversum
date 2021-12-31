import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import mainReducer from './reducers/mainReducer';

const middleware = [thunk];
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(mainReducer, withDevTools(applyMiddleware(...middleware)));

export default store;
