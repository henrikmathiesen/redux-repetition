import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import selectedUserReducer from './selected-user-reducer';
import editUserReducer from './edit-user-reducer';

const allReducers = combineReducers({
    users: usersReducer,
    selectedUser: selectedUserReducer,
    userToEdit: editUserReducer
});

export default allReducers;
