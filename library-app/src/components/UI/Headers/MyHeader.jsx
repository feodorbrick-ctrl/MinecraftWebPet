import React from 'react';
import cl from './MyHeader.module.css'

const MyHeader = (nameHeader) => {
    return (
        <div className={cl.header__div}>
            <h2 className={cl.header__p}>
                Library
            </h2>
        </div>
    );
};

export default MyHeader;