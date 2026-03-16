import React, {useContext} from 'react';
import cl from './BookField.module.css'
import MyButton from "../MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import Context from "../../../index";

const BookField = ({nameBook, descriptionBook}) => {
    const navigate = useNavigate()
    const {bookInfo, setBookInfo} = useContext(Context)
    return (
        <div className={cl.bookField}>
            <div className={cl.bookTittle} key={nameBook}>
                {nameBook}
            </div>
            <br/>
            <span color={'lightBlue'}>{descriptionBook}</span>
            <MyButton key={'go to ' + nameBook + 'book button'} btnName='read' callback={() => {
                setBookInfo({...bookInfo, bookName: nameBook, bookDescription: descriptionBook})
                navigate('/books/' + nameBook)
            }}/>
        </div>
    );
};

export default BookField;