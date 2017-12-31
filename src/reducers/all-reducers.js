import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import selectedUserReducer from './selected-user-reducer';

const allReducers = combineReducers({
    users: usersReducer,
    selectedUser: selectedUserReducer
});

export default allReducers;
