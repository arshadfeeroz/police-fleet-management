import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { drivers } from './reducers';
import { counter } from './reducers/counter';
 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  drivers,
  counter,
});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
