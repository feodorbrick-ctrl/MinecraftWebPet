import React from 'react';
import cl from './Mybutton.module.css'

const MyButton = ({btnName, callback, props}) => {
    return (
        <button className={cl.MyButton} onClick={callback}>{btnName}</button>
    );
};

export default MyButton;