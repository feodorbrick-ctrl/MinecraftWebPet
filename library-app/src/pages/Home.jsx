import React, {useContext} from 'react';
import MyButton from "../components/UI/MyButton/MyButton";
import Context from "../index";
import cl from '../styles/Home.module.css'
import BooksGenresSwitchField from "../components/UI/BooksGenresSwitchField/booksGenresSwitchField";
import {booksArray} from "../router/bookArray";

const Home = () => {
    const { userData } = useContext(Context);

    return (
        <div className={cl.home}>
            Welcome {userData.userName} to our library!
            <br/>
            <BooksGenresSwitchField genres={[...new Map(booksArray.map(book => [book.genre, {name: book.genre}])).values()]}/>
        </div>
    );
};

export default Home;