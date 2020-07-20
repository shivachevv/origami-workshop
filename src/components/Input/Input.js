import React from 'react';

const Input = ({ id, label, type, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} onChange={onChange}></input>
        </div>
    );
};

export default Input;