import React from 'react';
import './Form-control-text.css';

const FormControlText = ({ id, label, onChange }) => (
    <div className="Form-control-text">
        <label htmlFor={id}>{label}</label>
        <input id={id} type="text" className="Form-control-text__input" onChange={onChange} />
    </div>
);

export default FormControlText;
