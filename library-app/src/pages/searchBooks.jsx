import React, {useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import cl from '../styles/SearchBooks.module.css'
import BookField from "../components/UI/bookField/bookField";
import { booksArray } from "../router/bookArray";

const SearchBooks = () => {
    const [searchedBooks, setSearchedBooks] = useState('');
    return (
        <div className={cl.backgroundListOfBooks}>
            <MyInput
                placeholder = 'Search books...'
                value={searchedBooks}
                onChange={(event) => setSearchedBooks(event.target.value)}
            />
            <hr className = 'hrTag'/>
            <div>
                {booksArray.map(book =>
                    <BookField nameBook={book.name} descriptionBook={book.description}/>
                )

                }
            </div>
        </div>
    );
};

export default SearchBooks;