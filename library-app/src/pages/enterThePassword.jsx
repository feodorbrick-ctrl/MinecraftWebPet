import React, {useContext, useEffect} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import Context from "../index";
import {useNavigate} from "react-router-dom";
import MyButton from "../components/UI/MyButton/MyButton";

const EnterThePassword = () => {
    const {userData} = useContext(Context);
    const navigate = useNavigate();
    const [enteredPassword, setEnteredPassword] = React.useState('');
    useEffect(() => {
        if (enteredPassword === userData.password) {
            navigate('/home/settings')
        }
    }, [enteredPassword]);
    return (
        <div>
            <MyButton btnName='Back' callback={() => navigate('/home')}/>
            <br/>
            <br/>
            <MyInput placeholder='Enter your password' value={enteredPassword} onChange={async (e) => await setEnteredPassword(e.target.value)} />
        </div>
    );
};

export default EnterThePassword;