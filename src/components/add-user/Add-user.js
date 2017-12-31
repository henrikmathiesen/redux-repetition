import React, { Component } from 'react';
import './Add-user.css';

class AddUser extends Component {

    render() {
        return(
            <div className="Add-user">
                <div className="Add-user__inner">
                    <div>
                        <label htmlFor="first">First Name</label>
                        <input id="first" type="text" />
                    </div>
                    <div>
                        <label htmlFor="last">Last Name</label>
                        <input id="last" type="text" />
                    </div>
                    <div>
                        <label htmlFor="age">Age</label>
                        <input id="age" type="text" />
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input id="description" type="text" />
                    </div>
                    <div>
                        <label htmlFor="thumbnail">Thumbnail url</label>
                        <input id="thumbnail" type="text" />
                    </div>
                </div>
            </div>
        );
    }

}

export default AddUser;
