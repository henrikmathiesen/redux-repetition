import usersActionsConstant from 'constants/actions/users-actions-contant';

export const userCreate = (user) => {
    return {
        type: usersActionsConstant.USER_CREATE,
        user
    }
};

export const userDelete = (id) => {
    return {
        type: usersActionsConstant.USER_DELETE,
        id
    }
}

export const userUpdate = (user) => {
    return {
        type: usersActionsConstant.USER_UPDATE,
        user
    }
}
