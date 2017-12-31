import usersActionsConstant from '../constants/actions/users-actions-contant';

const selectedUserReducer = (state = null, action) => {
    switch (action.type) {
        case usersActionsConstant.SELECT_USER: {
            return action.user;
        }
        default: {
            return state;
        }
    }
};

export default selectedUserReducer;
