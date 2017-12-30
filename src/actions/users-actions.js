export const usersActions = {
    SELECT_USER: 'SELECT_USER'
};

export const selectUser = (user) => { 
    console.log('You clicked on: ', user.first);
    return {
        type: usersActions.SELECT_USER,
        user
    }
};
