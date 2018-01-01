import React, { Component } from 'react';

import './Add-user.css';
import colorsConstant from 'constants/colors-constant';
import { FormControlButton, FormControlText } from 'components/form-controls';

class AddUser extends Component {

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit', event);
    }

    handleChange(event) {
        const id = event.target.id;
        const value = event.target.value;
        console.log('handleChange', { id, value });
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

export default AddUser;
