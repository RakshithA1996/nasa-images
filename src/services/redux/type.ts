import {
    FETCH_POD_REQUEST,
    FETCH_POD_SUCCESS,
    FETCH_POD_FAILURE,
  } from "./actionTypes";
  
  export interface IPicture {
    date: string | null;
    explanation: string | null,
    hdurl: string | null,
    media_type: string | null,
    service_version: string | null,
    title: string | null,
    url: string | null,
  }
  
  export interface PODState {
    pending: boolean;
    pictureOfDay: IPicture[];
    error: string | null;
  }
  
  export interface FetchPODSuccessPayload {
    pictureOfDay: IPicture[];
  }
  
  export interface FetchPODFailurePayload {
    error: string;
  }
  
  export interface FetchPODRequest {
    type: typeof FETCH_POD_REQUEST;
  }
  
  export type FetchPODSuccess = {
    type: typeof FETCH_POD_SUCCESS;
    payload: FetchPODSuccessPayload;
  };
  
  export type FetchPODFailure = {
    type: typeof FETCH_POD_FAILURE;
    payload: FetchPODFailurePayload;
  };
  
  export type PODActions =
    | FetchPODRequest
    | FetchPODSuccess
    | FetchPODFailure;