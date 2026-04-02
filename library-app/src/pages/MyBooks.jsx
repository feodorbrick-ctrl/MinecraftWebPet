import React, {useContext, useEffect, useState} from 'react';
import Context from "../index";
import cl from "../styles/SearchBooks.module.css";
import MyInput from "../components/UI/MyInput/MyInput";
import Text from "../components/UI/Text/Text";
import Select from "../components/UI/MySelect/Select";
import MarginOfHeader from "../components/UI/MarginOfHeader/MarginOfHeader";
import BookField from "../components/UI/bookField/bookField";

const MyBooks = () => {
    const {switchedGenre, setSwitchedGenre, myBooks} = useContext(Context);
    const [searchedBook, setSearchedBook] = useState('');
    const [books, setBooks] = useState(myBooks); // Просто копируем массив

    useEffect(() => {
        if (searchedBook.trim() === '') {
            setBooks(myBooks)
        } else {
            setBooks(myBooks.filter((book) => book.name.toLocaleLowerCase().includes(searchedBook.toLowerCase()) || book.author.toLocaleLowerCase().includes(searchedBook.toLowerCase())));
        }
    }, [searchedBook]);

    useEffect(() => {
        if (switchedGenre !== 'all') {
            setBooks(myBooks.filter((book) => book.genre === switchedGenre));
        } else {
            setBooks(myBooks)
        }
    },[switchedGenre]);

    return (
        <div className={cl.backgroundListOfBooks}>
            <MyInput
                placeholder='Search my books...'
                value={searchedBook}
                onChange={(event) => {
                    setSearchedBook(event.target.value);
                }}
            />
            <hr className='hrTag' />
            <Text text={'all my books: ' + books.length} fontWeight="bold" />
            <Select
                key='Genres'
                value = {switchedGenre}
                nameSelect='Gernes'
                idSelect='GernesSelect'
                options={[
                    {value: 'all', name: 'All'},
                    ...new Map(myBooks.map(book => [book.genre, {value: book.genre, name: book.genre}])).values()
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
                            isBookMy={true}
                            key={book.name}
                        />
                    ))
                ) : (
                    <Text text='My book`s not found' />
                )}
            </div>
        </div>
    );
};

export default MyBooks;