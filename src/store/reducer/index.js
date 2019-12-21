import {combineReducers} from 'redux';
import userReducer from './root/user';

const rootReducer = combineReducers({
             set_user:userReducer
})
export default rootReducer;