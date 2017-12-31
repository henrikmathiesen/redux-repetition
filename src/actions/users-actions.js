import usersActionsConstant from '../constants/actions/users-actions-contant';

export const selectUser = (user) => { 
    return {
        type: usersActionsConstant.SELECT_USER,
        user
    }
};
