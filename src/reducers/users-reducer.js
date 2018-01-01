import usersActionsConstant from 'constants/actions/users-actions-contant';
import seedUsers from 'utils/seedUsers';

const usersReducer = (state = seedUsers(), action) => {

    switch(action.type) {
        case usersActionsConstant.NEW_USER: {
            const newUser = Object.assign({}, action.user);
            newUser.id = state[state.length - 1].id + 1;

            return [
                ...state, newUser
            ];
        }
        default: {
            return state;
        }
    }

    
};

export default usersReducer;
