import editUserActionsConstant from 'constants/actions/edit-user-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

const editUserReducer = (state = null, action) => {
    switch (action.type) {
        case editUserActionsConstant.EDIT_USER: {
            return action.user;
        }
        case usersActionsConstant.DELETE_USER: {
            const thereIsAUserToEdit = () => state !== null;
            const deletedUserIsUserToEdit = () => state.id === action.id;

            if (thereIsAUserToEdit() && deletedUserIsUserToEdit()) {
                state = null;
            }

            return state;
        }
        default: {
            return state;
        }
    }
};

export default editUserReducer;
