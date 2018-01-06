import usersActionsConstant from 'constants/actions/users-actions-contant';
import seedUsers from 'utils/seedUsers';

const usersReducer = (state = seedUsers(), action) => {

    switch (action.type) {
        case usersActionsConstant.NEW_USER: {
            const newUser = Object.assign({}, action.user);
            const latestUser = state[state.length - 1];

            newUser.id = latestUser ? (latestUser.id + 1) : 1;
            newUser.age = parseInt(newUser.age, 10);

            return [
                ...state, newUser
            ];
        }
        case usersActionsConstant.DELETE_USER: {
            return state.filter(user => user.id !== action.id);
        }
        case usersActionsConstant.UPDATE_USER: {
            const updatedUser = Object.assign({}, action.user);
            const newState = [...state];

            newState.forEach((user, i, arr) => {
                if (user.id === updatedUser.id) {
                    arr[i] = updatedUser;
                }
            });

            return newState;
        }
        default: {
            return state;
        }
    }


};

export default usersReducer;
