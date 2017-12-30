import { usersActions } from '../actions/users-actions';

const activeUserReducer = (state = null, action) => {
    switch (action.type) {
        case usersActions.SELECT_USER: {
            return action.user;
        }
        default: {
            return state;
        }
    }
};

export default activeUserReducer;
