import {
    FETCH_POD_REQUEST,
    FETCH_POD_FAILURE,
    FETCH_POD_SUCCESS,
  } from "../actionTypes";
  import {
    FetchPODRequest,
    FetchPODSuccess,
    FetchPODSuccessPayload,
    FetchPODFailure,
    FetchPODFailurePayload,
  } from "../type";
  
  export const fetchPODRequest = (): FetchPODRequest => ({
    type: FETCH_POD_REQUEST,
  });
  
  export const fetchPODSuccess = ( payload: FetchPODSuccessPayload ): FetchPODSuccess => ({
    type: FETCH_POD_SUCCESS,
    payload,
  });
  
  export const fetchPODFailure = ( payload: FetchPODFailurePayload ): FetchPODFailure => ({
    type: FETCH_POD_FAILURE,
    payload,
  });