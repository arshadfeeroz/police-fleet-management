import * as actions from '../actionTypes';

const initialCount = 0

export const counter = (state = initialCount, action) => {
  switch (action.type) {
    
    case actions.INCREMENT_COUNTER:
      return state + 1;
  
    default:
      return state;
  }
}