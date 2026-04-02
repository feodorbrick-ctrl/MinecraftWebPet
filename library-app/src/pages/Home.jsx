import React, {useContext} from 'react';
import MyButton from "../components/UI/MyButton/MyButton";
import Context from "../index";
import cl from '../styles/Home.module.css'
import BooksGenresSwitchField from "../components/UI/BooksGenresSwitchField/booksGenresSwitchField";
import {booksArray} from "../router/bookArray";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { userData } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className={cl.home}>
            Welcome {userData.userName} to our library!
            <br/>
            <BooksGenresSwitchField genres={[...new Map(booksArray.map(book => [book.genre, {name: book.genre}])).values()]}/>
            <MyButton btnName='My Books' callback={() => navigate('/home/myBooks')} className={cl.btnMyBooks}/>
        </div>
    );
};

export default Home;