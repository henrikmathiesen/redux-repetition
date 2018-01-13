import usersReducer from './users-reducer';
import usersActionsConstant from 'constants/actions/users-actions-contant';
import seedUsers from 'utils/seed-users';

describe('Users reducer test', () => {

    describe('Seed users', () => {
        it('Seeds users initialy so we have data to work with, a copy is returned', () => { 
            const initalUsers = seedUsers();

            const actual = usersReducer(undefined, {
                type: 'SOME_OTHER_ACTION',
                payload: null
            });

            expect(initalUsers).toEqual(actual, 'It is a copy');
            expect(initalUsers).not.toBe(actual, 'It is NOT the same reference');
            
            expect(JSON.stringify(initalUsers) == JSON.stringify(actual)).toEqual(true, 'Again, a copy');
            expect(initalUsers != actual).toEqual(true, 'Again, not the same reference');

            // Note: == and === comparison, both will check if it is the same object reference
            // .toEqual in Jasmine/Jest will check if 2 objects have the same properties and values
            // .toBe in Jasmine/Jest will check if 2 variabels point to the same reference
        });
    });

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
