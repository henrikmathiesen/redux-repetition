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
});
