import {combineReducers} from 'redux';
import userReducer from './root/user';
import {reducer as formReducer} from 'redux-form'
import { documentReducer } from './root/document';

const rootReducer = combineReducers({
             set_user:userReducer,
             document:documentReducer,
             form:formReducer
})
export default rootReducer;