import userSelectActionsConstant from 'constants/actions/user-select-actions-constant';

export const userSelect = (user) => { 
    return {
        type: userSelectActionsConstant.USER_SELECT,
        user
    }
};
