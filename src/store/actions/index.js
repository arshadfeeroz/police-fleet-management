import * as actions from '../actionTypes';
import axios from 'axios';

export const getDriversList = () => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_DRIVER_LIST });
    const response = await axios('./drivers.json');
    dispatch({ type: actions.GET_DRIVER_LIST_SUCCESS, drivers: response.data.data });
  } catch(error) {
    dispatch({ type: actions.GET_DRIVER_LIST_FAIL });
  } 
}

export const addNewDriver = (driver) => dispatch => {
  dispatch({ type: actions.ADD_DRIVER_IN_LIST, driver });
}

