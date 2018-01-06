import editUserActionsConstant from 'constants/actions/edit-user-actions-constant';

const editUserReducer = (state = null, action) => { 
    switch (action.type) {
        case editUserActionsConstant.EDIT_USER: {
            return action.user;
        }
        default: {
            return state;
        }
    }
};

export default editUserReducer;
