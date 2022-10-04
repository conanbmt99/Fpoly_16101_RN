import {combineReducers} from 'redux';
import UserReducer from '../components/users/redux/reducers';
import GroceryReducer from '../components/grocery/redux/reducers';


const rootReducer = combineReducers({
    UserReducer,
    GroceryReducer
});

export default rootReducer;