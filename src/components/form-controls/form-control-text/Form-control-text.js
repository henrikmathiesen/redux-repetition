import React from 'react';
import PropTypes from 'prop-types';

import './Form-control-text.css';

const FormControlText = ({ id, label, value, onChange }) => (
    <div className="Form-control-text">
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            type="text"
            className="Form-control-text__input"
            value={value}
            onChange={onChange} />
    </div>
);

FormControlText.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default FormControlText;
