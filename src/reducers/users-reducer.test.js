import usersReducer from './users-reducer';
import usersActionsConstant from 'constants/actions/users-actions-contant';

describe('Users reducer test', () => {

    describe('usersActionsConstant.USER_CREATE', () => {
        it('Adds a new user to users', () => {
            const currentUsers = [
                {
                    id: 1,
                    first: 'Adam'
                },
                {
                    id: 2,
                    first: 'Bertil'
                },
            ];

            const actual = usersReducer(currentUsers, {
                type: usersActionsConstant.USER_CREATE,
                user: {
                    first: 'Ceasar'
                }
            });

            expect(currentUsers !== actual).toEqual(true, 'State has changed, so not the same instance');
            expect(actual.length === (currentUsers.length + 1)).toEqual(true, 'New user added');
        });

        it('Gives the user an id 1 greater than the latest user', () => {
            const currentUsers = [
                {
                    id: 1,
                    first: 'Adam'
                },
                {
                    id: 2,
                    first: 'Bertil'
                },
            ];

            const actual = usersReducer(currentUsers, {
                type: usersActionsConstant.USER_CREATE,
                user: {
                    first: 'Ceasar'
                }
            });

            expect(actual.pop().id).toEqual(3);
        });

        it('Gives the user an id of 1 if no users exists', () => {
            const currentUsers = [];

            const actual = usersReducer(currentUsers, {
                type: usersActionsConstant.USER_CREATE,
                user: {
                    first: 'Ceasar'
                }
            });

            expect(actual.pop().id).toEqual(1);
        });
    });

    describe('usersActionsConstant.USER_DELETE', () => {
        it('Removes a deleted user from users', () => {
            const currentUsers = [
                {
                    id: 1,
                    first: 'Adam'
                },
                {
                    id: 2,
                    first: 'Bertil'
                },
            ];

            const actual = usersReducer(currentUsers, {
                type: usersActionsConstant.USER_DELETE,
                id: 2
            });

            expect(currentUsers !== actual).toEqual(true, 'State has changed, so not the same instance');
            expect(actual.length === (currentUsers.length - 1)).toEqual(true, 'One user removed');
            expect(actual.pop().first === 'Adam').toEqual(true);
        });
    });

    describe('usersActionsConstant.USER_UPDATE', () => {
        it('Updates a user in users', () => {
            const currentUsers = [
                {
                    id: 1,
                    first: 'Adam'
                },
                {
                    id: 2,
                    first: 'Bertil'
                },
            ];

            const actual = usersReducer(currentUsers, {
                type: usersActionsConstant.USER_UPDATE,
                user: {
                    id: 1,
                    first: 'Adam II'
                }
            });

            expect(currentUsers !== actual).toEqual(true, 'State has changed, so not the same instance');
            expect(currentUsers.length === actual.length).toEqual(true, 'Same amount of users');
            expect(currentUsers.shift().first === 'Adam').toEqual(true, 'Original array is NOT changed');
            expect(actual.shift().first === 'Adam II').toEqual(true, 'New updated state is returned');
        });
    });
});
