import { combineReducers } from 'redux';
import usersReducer from './users-reducer';
import activeUserReducer from './active-user-reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    activeUser: activeUserReducer
});

export default rootReducer;
