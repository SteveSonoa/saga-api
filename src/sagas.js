import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_API_DATA, fetchApiDataSuccess, fetchApiDataError } from './actions';
import { fetchData } from './api';

function* getApiData(action) {
    try {
		const data = yield call(fetchData);
		yield put(fetchApiDataSuccess(data));
    } catch(err) {
		console.log(err);
		yield put(fetchApiDataError(err));
    }
}

export default function* mySaga() {
    yield takeLatest(FETCH_API_DATA, getApiData);
}
