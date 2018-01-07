import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import userSelectedReducer from './user-selected-reducer';
import userToEditReducer from './user-to-edit-reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    userSelected: userSelectedReducer,
    userToEdit: userToEditReducer
});

export default rootReducer;
