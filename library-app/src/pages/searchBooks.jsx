import React, { useEffect, useState } from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import cl from '../styles/SearchBooks.module.css';
import BookField from "../components/UI/bookField/bookField";
import { booksArray } from "../router/bookArray";
import Text from "../components/UI/Text/Text";
import MarginOfHeader from "../components/UI/MarginOfHeader/MarginOfHeader";
import Select from "../components/UI/MySelect/Select";

const SearchBooks = () => {
    const [searchedBook, setSearchedBook] = useState('');
    const [books, setBooks] = useState(booksArray); // Просто копируем массив
    useEffect(() => {
       if (searchedBook.trim() === '') {
            setBooks(booksArray)
       } else {
           setBooks(booksArray.filter((book) => book.name.toLocaleLowerCase().includes(searchedBook.toLowerCase()) || book.author.toLocaleLowerCase().includes(searchedBook.toLowerCase())));
       }
    }, [searchedBook]);

    function onChangeGenre (e) {
        if (e !== 'all') {
            setBooks(booksArray.filter((book) => book.genre === e));
        } else {
            setBooks(booksArray)
        }
    }

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
            <Text text={'all books: ' + books.length} fontWeight="bold" />
            <Select
                key='Genres'
                nameSelect='Gernes'
                idSelect='GernesSelect'
                options={[
                    {value: 'all', name: 'All'},
                    ...new Map(booksArray.map(book => [book.genre, {value: book.genre, name: book.genre}])).values()
                ]}
                onChange={(e) => onChangeGenre(e.target.value)}
            />
            <MarginOfHeader/>
            <div>
                {books.length > 0 ? (
                    books.map(book => (
                        <BookField
                            nameBook={book.name}
                            descriptionBook={book.description}
                            ratingBook={book.rating}
                            authorBook={book.author}
                            genreBook={book.genre}
                            key={book.name}
                        />
                    ))
                ) : (
                    <Text text='Book`s not found' />
                )}
            </div>
        </div>
    );
};

export default SearchBooks;