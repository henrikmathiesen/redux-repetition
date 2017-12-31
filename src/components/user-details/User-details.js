import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User-details.css';

class UserDetails extends Component {
    render() {
        if(!this.props.user) {
            return (
                <div className="User-details">
                    <h2>Select a user ...</h2>
                </div>
            );
        }

        return (
            <div className="User-details">
                <h2>User Details</h2>
                <img src={this.props.user.thumbnail} alt="" />
                <h3>{this.props.user.first} {this.props.user.last}</h3>
                <h3>Age: {this.props.user.age}</h3>
                <p>Description: {this.props.user.description}</p>
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
