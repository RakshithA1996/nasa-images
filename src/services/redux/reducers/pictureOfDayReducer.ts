import {
    FETCH_POD_REQUEST,
    FETCH_POD_SUCCESS,
    FETCH_POD_FAILURE,
  } from "../actionTypes";
  
  import { PODActions, PODState } from "../type";
  
  const initialState: PODState = {
    pending: false,
    pictureOfDay: [],
    error: null,
  };
  
  export default (state = initialState, action: PODActions) => {
    switch (action.type) {
      case FETCH_POD_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_POD_SUCCESS:
        return {
          ...state,
          pending: false,
          pictureOfDay: action.payload.pictureOfDay,
          error: null,
        };
      case FETCH_POD_FAILURE:
        return {
          ...state,
          pending: false,
          pictureOfDay: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };