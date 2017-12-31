import React, { Component } from 'react';

import './Add-user.css';
import colorsConstant from 'constants/colors-constant';
import { FormControlButton, FormControlText } from 'components/form-controls';

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
                    <div className="Add-user__button-container">
                        <FormControlButton background={colorsConstant.SUCCESS} />
                    </div>
                </div>
            </div>
        );
    }

}

export default AddUser;
