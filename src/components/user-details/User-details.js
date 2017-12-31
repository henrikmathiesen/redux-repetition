import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User-details.css';

class UserDetails extends Component {

    renderUserImage() {
        if(!this.props.user.thumbnail) {
            return null;
        }

        return (<img src={this.props.user.thumbnail} alt="" />);
    }

    render() {
        if (!this.props.user) {
            return (
                <div className="User-details">
                    <div className="User-details__inner">
                        <h2 className="User-details__header">Select a user ...</h2>
                    </div>
                </div>
            );
        }

        return (
            <div className="User-details">
                <div className="User-details__inner">
                    <h2 className="User-details__header">User Details</h2>
                    {this.renderUserImage()}
                    <h3>{this.props.user.first} {this.props.user.last}</h3>
                    <h3>Age: {this.props.user.age}</h3>
                    <p>Description: {this.props.user.description}</p>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.selectedUser
    }
}

export default connect(mapStateToProps)(UserDetails);
