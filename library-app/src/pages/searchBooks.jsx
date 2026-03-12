import React, {useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import cl from '../styles/SearchBooks.module.css'
import BookField from "../components/UI/bookField/bookField";

const SearchBooks = () => {
    const [searchedBooks, setSearchedBooks] = useState('');
    const [books, setBooks] = useState([]);

    return (
        <div>
            <MyInput
                placeholder = 'Search books...'
                value={searchedBooks}
                onChange={(event) => setSearchedBooks(event.target.value)}
            />
            <hr className = 'hrTag'/>
            <div className={cl.listOfBooks}>
                <BookField nameBook = 'd' discription = ''/>
            </div>
        </div>
    );
};

export default SearchBooks;