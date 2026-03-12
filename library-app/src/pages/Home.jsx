import React, {useContext} from 'react';
import MyButton from "../components/UI/MyButton/MyButton";
import Context from "../index";
import cl from '../styles/Home.module.css'

const Home = () => {
    const { userData } = useContext(Context);

    return (
        <div className={cl.home}>
            Welcome '{userData.userName}' to our library!
            <br/>

        </div>
    );
};

export default Home;