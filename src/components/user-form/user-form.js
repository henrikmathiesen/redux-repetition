import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './user-form.css';
import colorsConstant from 'constants/colors-constant';
import validate from 'utils/validate';
import { newUser, updateUser } from 'actions/users-actions';
import { editUser } from 'actions/edit-user-actions';
import { FormControlButton, FormControlText, FormValidationMessage } from 'components/form-controls';

class UserForm extends Component {

    constructor() {
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.label = {
            default: 'Add user',
            editUser: 'Edit user'
        };

        this.emptyUser = {
            id: 0,
            first: '',
            last: '',
            age: '',
            description: '',
            thumbnail: ''
        }

        this.requiredRules = {
            id: false,
            first: true,
            last: true,
            age: true,
            description: true,
            thumbnail: false
        };

        this.state = {
            user: this.emptyUser,
            showValidationError: false,
            label: this.label.default,
            canCancel: false
        };
    }

    componentWillReceiveProps(nextProps) {
        const label = nextProps.userToEdit ? this.label.editUser : this.label.default;
        const user = nextProps.userToEdit || this.emptyUser;
        const canCancel = !!nextProps.userToEdit;
        
        this.setState({ user, label, canCancel });
    }

    handleSubmit(event) {
        event.preventDefault();

        const formIsValid = validate(this.state.user, this.requiredRules);

        this.setState({ showValidationError: !formIsValid });

        if(!formIsValid) {
            return;
        }

        if(this.state.label === this.label.editUser) {
            this.props.updateUser(this.state.user);
        } else {
            this.props.newUser(this.state.user);
        }

        this.setState({ user: this.emptyUser, label: this.label.default, canCancel: false });
    }

    handleChange(event) {
        const user = Object.assign({}, this.state.user);
        user[event.target.id] = event.target.value;
        this.setState({ user });
    }

    renderCancelButton() {
        if (this.state.canCancel) {
            return (
                <FormControlButton
                    label="Cancel"
                    background={colorsConstant.WARNING} 
                    onClick={() => {this.props.editUser(null)}} />
            );
        }

        return null;
    }

    render() {
        return (
            <div className="User-form">
                <div className="User-form__inner">
                    <h2 className="User-form__header">{this.state.label}</h2>

                    <FormValidationMessage
                        shouldAlert={this.state.showValidationError}
                        message="All fields except thumbnail are required" />

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
                        <div className="User-form__button-container">
                            {this.renderCancelButton()}
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

function mapStateToProps(state) {
    return {
        userToEdit: state.userToEdit
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ newUser, editUser, updateUser }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserForm);
