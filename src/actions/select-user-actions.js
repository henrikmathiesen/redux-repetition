import selectUserActionsConstant from 'constants/actions/select-user-actions-constant';

export const selectUser = (user) => { 
    return {
        type: selectUserActionsConstant.SELECT_USER,
        user
    }
};
