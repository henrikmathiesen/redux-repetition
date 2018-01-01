import React from 'react';
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

export default FormControlText;
