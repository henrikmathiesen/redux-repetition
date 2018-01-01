import usersActionsConstant from 'constants/actions/users-actions-contant';
import seedUsers from 'utils/seedUsers';

const usersReducer = (state = seedUsers(), action) => {

    switch(action.type) {
        case usersActionsConstant.NEW_USER: {
            const newUser = Object.assign({}, action.user);
            newUser.id = state[state.length - 1].id + 1;
            newUser.age = parseInt(newUser.age, 10);

            return [
                ...state, newUser
            ];
        }
        case usersActionsConstant.DELETE_USER: {
            return state.filter(u => u.id !== action.id);
        }
        default: {
            return state;
        }
    }

    
};

export default usersReducer;
