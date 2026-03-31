import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import cl from '../styles/SearchBooks.module.css';
import BookField from "../components/UI/bookField/bookField";
import { booksArray } from "../router/bookArray";
import Text from "../components/UI/Text/Text";
import MarginOfHeader from "../components/UI/MarginOfHeader/MarginOfHeader";
import Select from "../components/UI/MySelect/Select";
import Context from "../index";

const SearchBooks = () => {
    const {switchedGenre, setSwitchedGenre} = useContext(Context);
    const [searchedBook, setSearchedBook] = useState('');
    const [books, setBooks] = useState(booksArray); // Просто копируем массив

    useEffect(() => {
       if (searchedBook.trim() === '') {
            setBooks(booksArray)
       } else {
           setBooks(booksArray.filter((book) => book.name.toLocaleLowerCase().includes(searchedBook.toLowerCase()) || book.author.toLocaleLowerCase().includes(searchedBook.toLowerCase())));
       }
    }, [searchedBook]);

    useEffect(() => {
        if (switchedGenre !== 'all') {
            setBooks(booksArray.filter((book) => book.genre === switchedGenre));
        } else {
            setBooks(booksArray)
        }
    },[switchedGenre]);

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
                value = {switchedGenre}
                nameSelect='Gernes'
                idSelect='GernesSelect'
                options={[
                    {value: 'all', name: 'All'},
                    ...new Map(booksArray.map(book => [book.genre, {value: book.genre, name: book.genre}])).values()
                ]}
                onChange={(e) => setSwitchedGenre(e.target.value)}
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