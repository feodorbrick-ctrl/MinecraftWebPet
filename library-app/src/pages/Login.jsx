import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import Context from "../index";

const Login = () => {
    let {setUserLoggedIn, savedUsersPassword, savedUsersNames, userData, setUserData} = useContext(Context);

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
                        savedUsersPassword.push(userData.password);
                        savedUsersNames.push(userData.userName);
                        console.log(savedUsersPassword, savedUsersNames);
                    }
                }
            }
            />
        </div>
    );
};

export default Login;