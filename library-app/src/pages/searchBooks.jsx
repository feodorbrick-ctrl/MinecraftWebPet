import React, { useEffect, useState } from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import cl from '../styles/SearchBooks.module.css';
import BookField from "../components/UI/bookField/bookField";
import { booksArray } from "../router/bookArray";

const SearchBooks = () => {
    const [searchedBook, setSearchedBook] = useState('');
    const [books, setBooks] = useState(booksArray); // Просто копируем массив

    useEffect(() => {
       if (searchedBook.trim() === '') {
            setBooks(booksArray)
       } else {
           setBooks(books.filter((book) => book.name.toLocaleLowerCase().includes(searchedBook.toLowerCase())));
       }
    }, [searchedBook]);

    return (
        <div className={cl.backgroundListOfBooks}>
            <MyInput
                placeholder='Search books...'
                value={searchedBook}
                onChange={(event) => {
                    setSearchedBook(event.target.value);
                }}
            />
            <hr className='hrTag' />
            <div>
                {books.length > 0 ? (
                    books.map(book => (
                        <BookField
                            nameBook={book.name}
                            descriptionBook={book.description}
                            key={book.name}
                        />
                    ))
                ) : (
                    <p>Книги не найдены</p>
                )}
            </div>
        </div>
    );
};

export default SearchBooks;