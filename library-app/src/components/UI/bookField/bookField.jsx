import React from 'react';
import cl from './BookField.module.css'

const BookField = ({nameBook, descriptionBook}) => {

    return (
        <div className={cl.bookField}>
            <div className={cl.bookTittle} key={nameBook}>
                {nameBook}
            </div>
            <br/>
            <span color={'lightBlue'}>{descriptionBook}</span>
        </div>
    );
};

export default BookField;