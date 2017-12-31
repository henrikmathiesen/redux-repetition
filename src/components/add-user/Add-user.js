import React, { Component } from 'react';

import './Add-user.css';
import FormControlText from '../form-controls/form-control-text/Form-control-text';
import FormControlButton from '../form-controls/form-control-button/Form-control-button';

class AddUser extends Component {

    render() {
        return (
            <div className="Add-user">
                <div className="Add-user__inner">
                    <h2 className="Add-user__header">Add user</h2>
                    <FormControlText
                        id="first"
                        label="First Name" />
                    <FormControlText
                        id="last"
                        label="Last Name" />
                    <FormControlText
                        id="age"
                        label="Age" />
                    <FormControlText
                        id="description"
                        label="Description" />
                    <FormControlText
                        id="thumbnail"
                        label="Thumbnail url" />
                    <FormControlButton background="success" />
                </div>
            </div>
        );
    }

}

export default AddUser;
