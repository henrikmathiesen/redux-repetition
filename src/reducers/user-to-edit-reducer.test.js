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
        it('Removes a deleted user from user to edit if deleted user is under edit', () => {
            const userToEdit = {
                id: 2,
                first: 'Adam'
            };

            const actual = userToEditReducer(userToEdit, {
                type: usersActionsConstant.USER_DELETE,
                id: 2
            });

            expect(actual === null).toEqual(true);
        });

        it('Does NOT remove a deleted user from user to edit if deleted user is NOT under edit', () => {
            const userToEdit = {
                id: 3,
                first: 'Bertil'
            };

            const actual = userToEditReducer(userToEdit, {
                type: usersActionsConstant.USER_DELETE,
                id: 4
            });

            expect(actual !== null).toEqual(true);
            expect(actual === userToEdit).toEqual(true, 'The user under edit is simply returned');
        });
    });
});
