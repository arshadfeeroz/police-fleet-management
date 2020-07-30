import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { VehicleListAssignedReducer, VehicleListAllocatedReducer } from './reducers/vehicleListReducer/vehicleListAll';
const rootReducer = combineReducers({
    VehicleListAssignedReducer, VehicleListAllocatedReducer
});
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
