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

    });

    describe('usersActionsConstant.USER_UPDATE', () => {

    });
});
