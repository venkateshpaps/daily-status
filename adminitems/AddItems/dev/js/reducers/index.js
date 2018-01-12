import { combineReducers } from 'redux';
import itemReducer from './ItemReducer';
import ActiveItemReducer from './activeItemReducer';
const allReducers = combineReducers({
    items: itemReducer,
    activeItem: ActiveItemReducer 
});
export default allReducers

