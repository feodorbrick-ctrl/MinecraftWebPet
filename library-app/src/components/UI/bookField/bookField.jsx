import React, { useContext, useState, useEffect } from 'react';
import cl from './BookField.module.css';
import MyButton from "../MyButton/MyButton";
import { useNavigate } from "react-router-dom";
import Context from "../../../index";

const BookField = ({ nameBook, descriptionBook, authorBook, genreBook, isBookMy = false, ratingBook }) => {
    const navigate = useNavigate();
    const { bookInfo, setBookInfo, setMyBooks, myBooks } = useContext(Context);

    const [isLiked, setIsLiked] = useState(isBookMy);

    useEffect(() => {
        const isBookInMyBooks = myBooks.some(book => book.name === nameBook);
        setIsLiked(isBookInMyBooks);
    }, [myBooks, nameBook]);

    const handleLike = () => {
        if (!isLiked) {
            setMyBooks([...myBooks, {
                name: nameBook,
                author: authorBook,
                description: descriptionBook,
                genre: genreBook,
                rating: ratingBook
            }]);
        } else {
            setMyBooks(myBooks.filter(book => book.name !== nameBook));
        }
    };

    return (
        <div className={cl.bookField}>
            <div className={cl.bookTittle} key={nameBook}>
                {nameBook}
            </div>
            <br/>
            <div className={cl.description}>{descriptionBook}</div>
            <MyButton
                key={'go to ' + nameBook + 'book button'}
                btnName='More detailed...'
                callback={() => {
                    setBookInfo({
                        ...bookInfo,
                        bookName: nameBook,
                        bookDescription: descriptionBook,
                        bookRating: ratingBook,
                        authorBook: authorBook,
                        bookGenre: genreBook
                    });
                    navigate('/books/' + nameBook);
                }}
            />
            <MyButton
                btnName={isLiked ? 'unLike' : 'like'}
                callback={handleLike}
            />
        </div>
    );
};

export default BookField;