import usersActionsConstant from 'constants/actions/users-actions-contant';
import seedUsers from 'utils/seed-users';

const usersReducer = (users = seedUsers(), action) => {

    switch (action.type) {
        case usersActionsConstant.USER_CREATE: {
            const newUser = Object.assign({}, action.user);
            const latestUser = users[users.length - 1];

            newUser.id = latestUser ? (latestUser.id + 1) : 1;
            newUser.age = parseInt(newUser.age, 10);

            return [
                ...users, newUser
            ];
        }
        case usersActionsConstant.USER_DELETE: {
            return users.filter(user => user.id !== action.id);
        }
        case usersActionsConstant.USER_UPDATE: {
            const updatedUser = Object.assign({}, action.user);
            const newState = [...users];

            newState.forEach((user, i, arr) => {
                if (user.id === updatedUser.id) {
                    arr[i] = updatedUser;
                }
            });

            return newState;
        }
        default: {
            return users;
        }
    }


};

export default usersReducer;
