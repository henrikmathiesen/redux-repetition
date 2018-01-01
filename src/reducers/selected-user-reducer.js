import selectUserActionsConstant from 'constants/actions/select-user-actions-constant';

const selectedUserReducer = (state = null, action) => {
    switch (action.type) {
        case selectUserActionsConstant.SELECT_USER: {
            return action.user;
        }
        default: {
            return state;
        }
    }
};

export default selectedUserReducer;
