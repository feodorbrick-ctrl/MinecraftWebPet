import React, {useContext} from 'react';
import cl from './BookField.module.css'
import MyButton from "../MyButton/MyButton";
import {useNavigate} from "react-router-dom";
import Context from "../../../index";

const BookField = ({nameBook, descriptionBook, authorBook, genreBook, ratingBook}) => {
    const navigate = useNavigate()
    const {bookInfo, setBookInfo} = useContext(Context)
    return (
        <div className={cl.bookField}>
            <div className={cl.bookTittle} key={nameBook}>
                {nameBook}
            </div>
            <br/>
            <div className={cl.description}>{descriptionBook}</div>
            <MyButton key={'go to ' + nameBook + 'book button'} btnName='More detailed...' callback={() => {
                setBookInfo({...bookInfo, bookName: nameBook, bookDescription: descriptionBook, bookRating: ratingBook, authorBook: authorBook, bookGenre: genreBook});
                navigate('/books/' + nameBook)
            }}/>
        </div>
    );
};

export default BookField;