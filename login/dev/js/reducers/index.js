import { combineReducers } from 'redux';
import UserReducer from './LoginReducer';
const allReducers = combineReducers({
    users: UserReducer
});
export default allReducers

