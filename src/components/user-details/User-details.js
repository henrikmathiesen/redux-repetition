import React, { Component } from 'react';
import { connect } from 'react-redux';

import './User-details.css';

class UserDetails extends Component {

    renderUserThumbnail() {
        if (!this.props.userSelected.thumbnail) {
            return null;
        }

        return (<img src={this.props.userSelected.thumbnail} alt="" />);
    }

    renderUserDetails() {
        if (!this.props.userSelected) { 
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
                    <h3>{this.props.userSelected.first} {this.props.userSelected.last}</h3>
                    <h3>Age: {this.props.userSelected.age}</h3>
                    <p>Description: {this.props.userSelected.description}</p>
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
        userSelected: state.userSelected
    }
}

export default connect(mapStateToProps)(UserDetails);
