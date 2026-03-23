import React, {useEffect} from 'react';
import Text from "../Text/Text";
import MyButton from "../MyButton/MyButton";
import cl from './commentField.module.css'

const CommentField = ({commentName, reading, ref}) => {
    const [likes, setLikes] = React.useState(0);
     useEffect(() => {
         ref = likes
     },[likes])
    return (
        <div className={cl.commentField}>
            <Text text={commentName} />
            <div className={cl.commentInfo}>
                <div className={cl.likesField}>likes <br/>{likes}</div>
                <div className={cl.ratingField}>rating <br/>{reading}</div>
                <MyButton btnName='like' callback={() => setLikes(likes + 1)}/>
            </div>
        </div>
    );
};

export default CommentField;