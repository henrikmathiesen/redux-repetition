import React, { Component } from 'react';

class AddUser extends Component {

    render() {
        return(
            <div>
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
        );
    }

}

export default AddUser;
