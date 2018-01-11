import userToEditReducer from './user-to-edit-reducer';
import userEditActionsConstant from 'constants/actions/user-edit-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

describe('Users to edit reducer test', () => {
    it('Returns the user to edit for action userEditActionsConstant.USER_EDIT', () => {
        const user = {
            id: 1,
            first: 'Henry'
        };

        const actual = userToEditReducer(null, {
            type: userEditActionsConstant.USER_EDIT,
            user
        });

        expect(actual === user).toEqual(true, "the state has not changed, therefor it is the same instance");
    });

    describe('User to edit reducer will react to other actions', () => { 

    });

});
