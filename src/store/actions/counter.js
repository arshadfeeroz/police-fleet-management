import * as actions from '../actionTypes';


export const incrementCounter = () => async (dispatch) => {
  dispatch({ type: actions.INCREMENT_COUNTER });
}

