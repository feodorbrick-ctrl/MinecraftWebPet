import React from 'react';
import cl from './BookField.module.css'

const BookField = ({nameBook}) => {
    return (
        <div className={cl.bookField}>
            {nameBook}
        </div>
    );
};

export default BookField;