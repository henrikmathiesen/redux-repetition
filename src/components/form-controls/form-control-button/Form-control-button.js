import React, { Component } from 'react';

import './Form-control-button.css';
import colorsConstant from 'constants/colors-constant';
import sizesConstant from 'constants/sizes-constant';

class FormControlButton extends Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    renderBackgroundCssClass() {
        switch (this.props.background) {
            case colorsConstant.SUCCESS: {
                return ' Form-control-button--success';
            }
            case colorsConstant.DANGER: {
                return ' Form-control-button--danger';
            }
            default: {
                return ' Form-control-button--success';
            }
        }
    }

    renderSizeCssClass() {
        switch (this.props.size) {
            case sizesConstant.SMALL: {
                return ' Form-control-button--small';
            }
            case sizesConstant.MEDIUM: {
                return ' Form-control-button--medium';
            }
            default: {
                return ' Form-control-button--medium';
            }
        }
    }

    onClick() {
        if (!this.props.onClick) {
            return;
        }

        this.props.onClick();
    }

    render() {
        return (
            <button
                type={this.props.shouldSubmit ? "submit" : "button"}
                className={"Form-control-button" + this.renderBackgroundCssClass() + this.renderSizeCssClass()}
                onClick={this.onClick}>{this.props.label}</button>
        );
    }
}

export default FormControlButton;
