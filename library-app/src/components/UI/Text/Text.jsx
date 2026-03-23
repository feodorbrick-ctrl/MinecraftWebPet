import React from 'react';
import cl from './Text.module.css'

const Text = ({text = 'text is none', props, fontWeight = 700}) => {
    return (
        <h2 {...props} style={{fontWeight: fontWeight}} className={cl.Text}>{text}</h2>
    );
};

export default Text;