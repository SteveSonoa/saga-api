import { FETCH_API_DATA_SUCCESS, FETCH_API_DATA_ERROR, FETCH_API_DATA } from '../actions';

export default ( state = {loading: true}, { type, data, error }) => {
    switch (type) {
        case FETCH_API_DATA:
            return {loading: true, ...state}
        case FETCH_API_DATA_SUCCESS:
            return {loading: false, ...data};
        case FETCH_API_DATA_ERROR:
            return {loading: false, ...error};
        default:
            return state;
    }
};
