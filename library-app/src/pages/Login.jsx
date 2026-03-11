import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import Context from "../index";

const Login = () => {
    const {setUserLoggedIn,} = useContext(Context);
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });


    return (
        <div>
            <MyInput
                placeholder='userName'
                value={userData.userName}
                onChange={(event) => {
                    setUserData({...userData, userName: event.target.value});
                }}
            />
            <MyInput
                placeholder='password'
                value={userData.password}
                onChange={(event) => {
                    setUserData({...userData, password: event.target.value});
                }}
            />
            <br/>
            <MyButton
                btnName='Login'
                callback={ () => {
                    if (userData.userName && userData.password !== '') {
                        setUserLoggedIn(true)
                        console.log('user data', userData);
                    }
                }
            }
            />
        </div>
    );
};

export default Login;