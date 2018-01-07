import userEditActionsConstant from 'constants/actions/user-edit-actions-constant';

export const userEdit = (user) => {
    return {
        type: userEditActionsConstant.USER_EDIT,
        user
    }
};
