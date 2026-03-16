import React, {useContext} from 'react';
import cl from '../styles/BookInformation.module.css'
import Text from "../components/UI/Text/Text";
import Context from "../index";
import MyButton from "../components/UI/MyButton/MyButton";
import { useNavigate} from "react-router-dom";

const BookInformation = () => {
    const {bookInfo} = useContext(Context);
    const navigate = useNavigate();
    console.log(bookInfo)
    return (
        <div className={cl.bookMenuStyles}>
            <MyButton btnName='Back' callback={() => navigate('/books')}/>
            <Text text = {bookInfo.bookName} />
            <Text text={bookInfo.bookDescription} fontWeight={300}/>
            <Text text = {bookInfo.bookAnalysis} fontWeight={500}/>
        </div>
    );
};

export default BookInformation;