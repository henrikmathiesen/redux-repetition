import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Users-list.css';
import colorsConstant from 'constants/colors-constant';
import sizesConstant from 'constants/sizes-constant';
import { selectUser } from 'actions/select-user-actions';
import { deleteUser } from 'actions/users-actions';
import { FormControlButton } from 'components/form-controls';

class UsersList extends Component {

    renderUserItems() {
        return this.props.users.map(user =>
            (
                <li className="Users-list__list-item"
                    data-id={user.id}
                    key={user.id}>
                    <span className="Users-list__list-item-text" onClick={() => this.props.selectUser(user)}>{user.first} {user.last}</span>
                    <FormControlButton
                        shouldSubmit={false}
                        label="Remove"
                        background={colorsConstant.DANGER}
                        size={sizesConstant.SMALL}
                        onClick={() => this.props.deleteUser(user.id)} />
                </li>
            )
        )
    }

    render() {
        return (
            <div className="Users-list">
                <div className="Users-list__inner">
                    <h2 className="Users-list__header">Users List</h2>
                    <ul className="Users-list__list">
                        {this.renderUserItems()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ selectUser, deleteUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);
