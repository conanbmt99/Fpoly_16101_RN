
import {call, put, takeLatest} from 'redux-saga/effects';
import types from './types';
import actions from './actions';
// import instance from '../../../utilities/axios';
import { postAPI } from '../../../utilities/axios';

// const endpoint = '/users';

function* signIn(params) {
    const {data:{username, password}} = params;
    const o = {username, password}
    const res = yield postAPI(o, `/api/users/login`);
    yield put(actions.signIn(res.users));
}

const REQUEST = '_REQUEST';

function* userSaga() {
    yield takeLatest(`${types.SIGN_IN}${REQUEST}`, signIn);
}

export default userSaga;

