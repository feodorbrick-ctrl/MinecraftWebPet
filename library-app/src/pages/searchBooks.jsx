import React, {useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";

const SearchBooks = () => {
    const [searchedBooks, setSearchedBooks] = useState('');

    return (
        <div>
            <MyInput
                placeholder = 'Search books...'
                value={searchedBooks}
                onChange={(event) => setSearchedBooks(event.target.value)}
            />
            <hr className = 'hrTag'/>
        </div>
    );
};

export default SearchBooks;