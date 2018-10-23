export const FETCH_API_DATA = 'FETCH_API_DATA';
export const FETCH_API_DATA_SUCCESS = 'FETCH_API_DATA_SUCCESS';
export const FETCH_API_DATA_ERROR = 'FETCH_API_DATA_ERROR';

export const fetchApiData = () => ({ type: FETCH_API_DATA });
export const fetchApiDataSuccess = data => ({ type: FETCH_API_DATA_SUCCESS, data });
export const fetchApiDataError = error => ({ type: FETCH_API_DATA_ERROR, error });
