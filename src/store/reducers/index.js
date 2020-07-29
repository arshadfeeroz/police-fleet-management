import * as actions from '../actionTypes';

const initialState = {
  list: []
};

export const drivers = (state = initialState, action) => {
  switch (action.type) {
    
    case actions.GET_DRIVER_LIST:
      return state;
    case actions.GET_DRIVER_LIST_SUCCESS:
      return { ...state, list: action.drivers };
    case actions.GET_DRIVER_LIST_SUCCESS:
      return { ...state, list: [] };

    case actions.ADD_DRIVER_IN_LIST:
      return { ...state, list: [...state.list, action.driver] };
    
    default:
      return state;
  }
}