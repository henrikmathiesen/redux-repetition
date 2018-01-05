import React from 'react';
import PropTypes from 'prop-types';

import './Form-validation-message.css';

const FormValidationMessage = ({ shouldAlert, message }) => (
    <p className={'Form-validation-message' + (shouldAlert ? ' Form-validation-message--error' : '')}>
        * {message}
    </p>
);

FormValidationMessage.propTypes = {
    shouldAlert: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired
};

export default FormValidationMessage;
