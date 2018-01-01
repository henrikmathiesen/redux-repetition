import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Users-list.css';
import { selectUser } from 'actions/users-actions';

class UsersList extends Component {

    renderUserItems() {
        return this.props.users.map(user =>
            (
                <li className="Users-list__list-item"
                    data-id={user.id}
                    key={user.id}
                    onClick={() => this.props.selectUser(user)}>
                    {user.first} {user.last}
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
    return bindActionCreators({ selectUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);
