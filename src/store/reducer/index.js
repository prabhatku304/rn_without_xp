import {combineReducers} from 'redux';
import userReducer from './root/user';
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
             set_user:userReducer,
             form:formReducer
})
export default rootReducer;