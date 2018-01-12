import userSelectedReducer from './user-selected-reducer';
import userSelectActionsConstant from 'constants/actions/user-select-actions-constant';
import usersActionsConstant from 'constants/actions/users-actions-contant';

describe('User selected reducer test', () => {
    it('Returns the selected user for action userSelectActionsConstant.USER_SELECT', () => {
        const user = {
            id: 1,
            first: 'Henry'
        };

        const actual = userSelectedReducer(null, {
            type: userSelectActionsConstant.USER_SELECT,
            user
        });

        expect(actual === user).toEqual(true, 'The state has NOT changed, therefor it is the same instance');
    });

    describe('User selecter reducer will react to other actions', () => {
        it('Removes a deleted user from user selected, if the deleted user is selected', () => {
            const selectedUser = {
                id: 2,
                first: 'Adam'
            };

            const actual = userSelectedReducer(selectedUser, {
                type: usersActionsConstant.USER_DELETE,
                id: 2
            });

            expect(actual === null).toEqual(true);
        });

        it('Does NOT Remove a user from user selected, if the deleted user is NOT selected', () => {
            const selectedUser = {
                id: 3,
                first: 'Bertil'
            };

            const actual = userSelectedReducer(selectedUser, {
                type: usersActionsConstant.USER_DELETE,
                id: 2
            });

            expect(actual !== null).toEqual(true);
        });

        it('Updates the user selected if updated user is selected', () => {
            const selectedUser = {
                id: 4,
                first: 'Ceasar'
            };

            const actual = userSelectedReducer(selectedUser, {
                type: usersActionsConstant.USER_UPDATE,
                user: {
                    id: 4,
                    first: 'Ceasar II'
                }
            });

            expect(selectedUser !== actual).toEqual(true, 'The state has changed, therefor NOT the same instance');
            expect(actual.first === 'Ceasar II').toEqual(true, 'The update has changed the selected user');
        });

        it('Does NOT update the user selected if updated user is NOT selected', () => {
            const selectedUser = {
                id: 5,
                first: 'David'
            };

            const actual = userSelectedReducer(selectedUser, {
                type: usersActionsConstant.USER_UPDATE,
                user: {
                    id: 6,
                    first: 'Erik II'
                }
            });

            expect(selectedUser === actual).toEqual(true, 'The state has NOT changed, therefor the same instance');
            expect(actual.first !== 'Erik II').toEqual(true, 'The update has NOT changed the selected user');
            expect(actual.first === 'David').toEqual(true, 'Again, the selected user has NOT changed');
        });
    });
});
