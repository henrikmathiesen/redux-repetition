import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Form-control-button.css';
import colorsConstant from 'constants/colors-constant';
import sizesConstant from 'constants/sizes-constant';

class FormControlButton extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    renderBackgroundCssClass() {
        switch (this.props.background) {
            case colorsConstant.DANGER: {
                return ' Form-control-button--danger';
            }
            case colorsConstant.SUCCESS: {
                return ' Form-control-button--success';
            }
            case colorsConstant.WARNING: {
                return ' Form-control-button--warning'
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

    handleClick() {
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
                onClick={this.handleClick}>{this.props.label}</button>
        );
    }
}

FormControlButton.propTypes = {
    label: PropTypes.string.isRequired,
    background: PropTypes.string,
    onClick: PropTypes.func,
    shouldSubmit: PropTypes.bool,
    size: PropTypes.string
};

export default FormControlButton;
