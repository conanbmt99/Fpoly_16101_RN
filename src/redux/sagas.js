import {all, fork} from 'redux-saga/effects';
import UserSaga from '../components/users/redux/sagas';
import GrocerySaga from '../components/grocery/redux/sagas';


function* rootSaga() {
    yield all([UserSaga, GrocerySaga].map(fork));
}

export default rootSaga;