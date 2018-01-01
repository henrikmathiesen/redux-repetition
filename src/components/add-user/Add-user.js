import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Add-user.css';
import { newUser } from 'actions/users-actions';
import { FormControlButton, FormControlText } from 'components/form-controls';

class AddUser extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.emptyUser = {
            id: 0,
            first: '',
            last: '',
            age: '',
            description: '',
            thumbnail: ''
        }

        this.state = {
            user: this.emptyUser
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.newUser(this.state.user);
        this.setState({ user: this.emptyUser });
    }

    handleChange(event) {
        const user = Object.assign({}, this.state.user);
        user[event.target.id] = event.target.value;
        this.setState({ user });
    }

    render() {
        return (
            <div className="Add-user">
                <div className="Add-user__inner">
                    <h2 className="Add-user__header">Add user</h2>
                    <form onSubmit={this.handleSubmit}>
                        <FormControlText
                            id="first"
                            label="First Name"
                            value={this.state.user.first}
                            onChange={this.handleChange} />
                        <FormControlText
                            id="last"
                            label="Last Name"
                            value={this.state.user.last}
                            onChange={this.handleChange} />
                        <FormControlText
                            id="age"
                            label="Age"
                            value={this.state.user.age}
                            onChange={this.handleChange} />
                        <FormControlText
                            id="description"
                            label="Description"
                            value={this.state.user.description}
                            onChange={this.handleChange} />
                        <FormControlText
                            id="thumbnail"
                            label="Thumbnail url"
                            value={this.state.user.thumbnail}
                            onChange={this.handleChange} />
                        <div className="Add-user__button-container">
                            <FormControlButton 
                                shouldSubmit={true} 
                                label="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ newUser }, dispatch);
}

export default connect(null, matchDispatchToProps)(AddUser);
