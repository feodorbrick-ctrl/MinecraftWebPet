import React from 'react';
import './Numbers.css'

const Numbers = ({Number = 0}) => {
    return (
        <h1 className='NumberH'>{Number}</h1>
    );
};

export default Numbers;