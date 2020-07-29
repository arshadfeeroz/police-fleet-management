import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { drivers } from './reducers';
 
const rootReducer = combineReducers({
  drivers
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
