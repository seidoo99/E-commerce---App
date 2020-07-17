import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import allReducers from './reducers/index'
import Cookie from 'js-cookie';

const cartItems = Cookie.getJSON("cartItems") || [];
const initialState = { cart: { cartItems } };
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers, initialState, composeEnhancer(applyMiddleware(thunk)));
  

  export default store;