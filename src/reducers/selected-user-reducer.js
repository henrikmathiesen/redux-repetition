import selectUserActionsConstant from 'constants/actions/select-user-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

const selectedUserReducer = (state = null, action) => {
    switch (action.type) {
        case selectUserActionsConstant.SELECT_USER: {
            return action.user;
        }
        case usersActionsConstant.DELETE_USER: {
            const thereIsASelectedUser = () => state !== null;
            const deletedUserIsSelectedUser = () => state.id === action.id;

            if(thereIsASelectedUser() && deletedUserIsSelectedUser()) {
                state = null;
            }

            return state;
        }
        case usersActionsConstant.UPDATE_USER: {
            const thereIsASelectedUser = () => state !== null;
            const updatedUserIsSelectedUser = () => state.id === action.user.id;

            if(thereIsASelectedUser() && updatedUserIsSelectedUser()) {
                state = Object.assign({}, action.user);
            }

            return state;
        }
        default: {
            return state;
        }
    }
};

export default selectedUserReducer;
