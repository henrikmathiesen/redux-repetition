import React, { Component } from 'react';

import './Form-control-button.css';
import colorsConstant from '../../../constants/colors-constant';

class FormControlButton extends Component {

    renderCssClass() {
        switch (this.props.background) {
            case colorsConstant.SUCCESS: {
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
