import userEditActionsConstant from 'constants/actions/user-edit-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

const userToEditReducer = (userToEdit = null, action) => {
    switch (action.type) {
        case userEditActionsConstant.USER_EDIT: {
            return action.user;
        }
        case usersActionsConstant.USER_DELETE: {
            const thereIsAUserToEdit = () => userToEdit !== null;
            const deletedUserIsUserToEdit = () => userToEdit.id === action.id;

            if (thereIsAUserToEdit() && deletedUserIsUserToEdit()) {
                userToEdit = null;
            }

            return userToEdit;
        }
        default: {
            return userToEdit;
        }
    }
};

export default userToEditReducer;
