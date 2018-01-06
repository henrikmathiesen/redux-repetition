import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User-details.css';

class UserDetails extends Component {

    renderUserThumbnail() {
        if (!this.props.selectedUser.thumbnail) {
            return null;
        }

        return (<img src={this.props.selectedUser.thumbnail} alt="" />);
    }

    renderUserDetails() {
        if (!this.props.selectedUser) { 
            return (
                <div className="User-details__inner">
                    <h2 className="User-details__header">Select a user ...</h2>
                </div>
            );
        } else {
            return (
                <div className="User-details__inner">
                    <h2 className="User-details__header">User Details</h2>
                    {this.renderUserThumbnail()}
                    <h3>{this.props.selectedUser.first} {this.props.selectedUser.last}</h3>
                    <h3>Age: {this.props.selectedUser.age}</h3>
                    <p>Description: {this.props.selectedUser.description}</p>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="User-details">
                {this.renderUserDetails()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectedUser: state.selectedUser
    }
}

export default connect(mapStateToProps)(UserDetails);
