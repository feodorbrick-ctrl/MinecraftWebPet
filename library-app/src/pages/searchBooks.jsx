import React from 'react';
import MyInput from "../components/UI/MyInput/MyInput";

const SearchBooks = () => {
    return (
        <div>
            <MyInput placeholder = 'Search books...' />
            <hr className = 'hrTag'/>
        </div>
    );
};

export default SearchBooks;