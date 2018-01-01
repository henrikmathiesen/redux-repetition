import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './Add-user.css';
import colorsConstant from 'constants/colors-constant';
import { newUser } from 'actions/users-actions';
import { FormControlButton, FormControlText } from 'components/form-controls';

class AddUser extends Component {

    constructor(){
        super();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.user = {
            id: null,
            first: null,
            last: null,
            age: null,
            description: null,
            thumbnail: null
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.newUser(this.user);
    }

    handleChange(event) {
        const user = Object.assign({}, this.user);
        user[event.target.id] = event.target.value;
        this.user = user;
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
                            onChange={this.handleChange} />
                        <FormControlText
                            id="last"
                            label="Last Name" 
                            onChange={this.handleChange} />
                        <FormControlText
                            id="age"
                            label="Age" 
                            onChange={this.handleChange} />
                        <FormControlText
                            id="description"
                            label="Description" 
                            onChange={this.handleChange} />
                        <FormControlText
                            id="thumbnail"
                            label="Thumbnail url" 
                            onChange={this.handleChange} />
                        <div className="Add-user__button-container">
                            <FormControlButton shouldSubmit={true} background={colorsConstant.SUCCESS} />
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
