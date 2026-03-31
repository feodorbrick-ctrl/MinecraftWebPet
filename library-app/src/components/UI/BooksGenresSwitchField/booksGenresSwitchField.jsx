import React, {useContext} from 'react';
import MyButton from "../MyButton/MyButton";
import Context from "../../../index";
import {useNavigate} from "react-router-dom";
import cl from './booksGenresSwitchField.module.css'

const BooksGenresSwitchField = ({genres}) => {
    const {setSwitchedGenre} = useContext(Context);
    const navigate = useNavigate();
    return (
        <div className={cl.booksGenresSwitchField}>
            {genres.map(item => (
                    <MyButton
                        btnName={item.name}
                        callback={() => {
                            setSwitchedGenre(item.name)
                            navigate('/books')
                        }}
                        key={item.name}
                    />
                )
            )}
        </div>
    );
};

export default BooksGenresSwitchField;