import userSelectActionsConstant from 'constants/actions/user-select-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

const userSelectedReducer = (userSelected = null, action) => {
    switch (action.type) {
        case userSelectActionsConstant.USER_SELECT: {
            return action.user;
        }
        case usersActionsConstant.USER_DELETE: {
            const thereIsASelectedUser = () => userSelected !== null;
            const deletedUserIsSelectedUser = () => userSelected.id === action.id;

            if(thereIsASelectedUser() && deletedUserIsSelectedUser()) {
                userSelected = null;
            }

            return userSelected;
        }
        case usersActionsConstant.USER_UPDATE: {
            const thereIsASelectedUser = () => userSelected !== null;
            const updatedUserIsSelectedUser = () => userSelected.id === action.user.id;

            if(thereIsASelectedUser() && updatedUserIsSelectedUser()) {
                userSelected = Object.assign({}, action.user);
            }

            return userSelected;
        }
        default: {
            return userSelected;
        }
    }
};

export default userSelectedReducer;
