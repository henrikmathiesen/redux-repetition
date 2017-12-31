import React, { Component } from 'react';
import './Form-control-button.css';

class FormControlButton extends Component {

    renderCssClass() {
        switch (this.props.background) {
            case 'success': {
                return ' Form-control-button--success';
            }
            default: {
                return null;
            }
        }
    }

    render() {
        return (
            <button className={"Form-control-button" + this.renderCssClass()}>Submit</button>
        );
    }
}

export default FormControlButton;
