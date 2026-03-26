import React, {useContext} from 'react';
import cl from '../styles/BookInformation.module.css'
import Text from "../components/UI/Text/Text";
import Context from "../index";
import MyButton from "../components/UI/MyButton/MyButton";
import { useNavigate} from "react-router-dom";
import { bookComments } from "../router/bookArray";
import CommentField from "../components/UI/commentField/commentField";
import MarginOfHeader from "../components/UI/MarginOfHeader/MarginOfHeader";

const BookInformation = () => {
    let {bookInfo} = useContext(Context);
    const navigate = useNavigate();
    const [closeOpenComments, setCloseOpenComments] = React.useState('comments');

    return (
        <div className={cl.bookMenuStyles}>
            <MarginOfHeader/>
            <Text text={bookInfo.authorBook} fontWeight='400'/>
            <div className={cl.commentsField} style={{display: closeOpenComments === 'comments' ? 'none' : 'block'}}>
                {
                    bookComments.map((commentsLocale) => {
                        if (commentsLocale.name === bookInfo.bookName) {
                            return (
                                commentsLocale.comments.map((comment) => (
                                    <CommentField key={comment.text} commentName={comment.text} reading={comment.reading} />
                                ))
                            )
                        }
                    })
                }
            </div>
            <MyButton btnName={closeOpenComments} callback={() => {
                setCloseOpenComments(prev => prev === 'comments' ? 'close' : 'comments')

            }}/>
            <Text text={'rating: ' + bookInfo.bookRating} fontWeight="500"/>
            <Text text={bookInfo.bookDescription} fontWeight={300}/>
            <Text text={bookInfo.bookGenre} fontWeight='200'/>
            <Text text = {bookInfo.bookName} />
            <MyButton btnName='Back' callback={() => navigate('/books')}/>
        </div>
    );
};

export default BookInformation;