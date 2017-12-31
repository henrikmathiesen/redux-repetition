export const usersActions = {
    SELECT_USER: 'SELECT_USER'
};

export const selectUser = (user) => { 
    return {
        type: usersActions.SELECT_USER,
        user
    }
};
