import React from 'react';
import cl from './MySelect.module.css'

const Select = ({options, nameSelect, idSelect, ...props}) => {
    return (
            <select {...props} className={cl.select} name={nameSelect} id={idSelect}>
                <option value={nameSelect} disabled>{nameSelect}</option>
                {
                    options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)
                }
            </select>
    );
};

export default Select;