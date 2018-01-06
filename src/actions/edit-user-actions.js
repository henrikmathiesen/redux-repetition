import editUserActionsConstant from 'constants/actions/edit-user-actions-constant';

export const editUser = (user) => {
    return {
        type: editUserActionsConstant.EDIT_USER,
        user
    }
};
