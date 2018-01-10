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

        expect(actual === user).toEqual(true, "the state has not changed, therefor it is the same instance");
    });

    describe('User selecter reducer will react to other actions', () => {
        it('Removes a deleted user from user selected, if the deleted user is selected', () => {

        });

        it('Does NOT Remove a user from user selected, if the deleted user is NOT selected', () => {

        });

        it('Updates the user selected if updated user is selected', () => {

        });

        it('Does NOT update the user selected if updated user is NOT selected', () => {

        });
    });
});
