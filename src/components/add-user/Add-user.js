import React, { Component } from 'react';

import './Add-user.css';
import FormControlText from '../form-controls/Form-control-text';

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
                    <button className="Add-user_submit-button">Submit</button>
                </div>
            </div>
        );
    }

}

export default AddUser;
