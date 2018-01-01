import usersActionsConstant from 'constants/actions/users-actions-contant';

export const newUser = (user) => {
    return {
        type: usersActionsConstant.NEW_USER,
        user
    }
};
