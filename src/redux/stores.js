import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

function configeStore() {
    return createStore(rootReducer, applyMiddleware(...middlewares))
}

const store = configeStore();
sagaMiddleware.run(rootSaga);

export default store;
