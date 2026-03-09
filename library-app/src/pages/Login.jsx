import React from 'react';
import MyInput from "../components/UI/MyInput/MyInput";

const Login = () => {
    const [usersName, setUsersName] = React.useState([]);
    const [usersPassword, setUsersPassword] = React.useState([]);
    return (
        <div>
            <MyInput plaseholder='userName' />
            <MyInput plaseholder='pasworld' />
            <MyInput plaseholder='reapad pasworld' />

        </div>
    );
};

export default Login;