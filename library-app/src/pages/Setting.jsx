import React, {useContext, useEffect} from 'react';
import Context from "../index";
import Text from "../components/UI/Text/Text";
import MyInput from "../components/UI/MyInput/MyInput";
import MyButton from "../components/UI/MyButton/MyButton";
import {useNavigate} from "react-router-dom";

const Setting = () => {
    const {userData, setUserData,} = useContext(Context);
    const navigate = useNavigate();
    const [modifiedDateUser, setModifiedDateUser] = React.useState({...userData});
    return (
        <div>
            <MyButton btnName='Back' callback={() => navigate('/home')} />
            <Text text='write your new name' fontWeight='500' />
            <MyInput placeholder='modified userName' value={modifiedDateUser.userName} onChange={async (e) => await setModifiedDateUser({
                ...userData,
                userName: e.target.value
            })} />
            <Text text='write your new password' fontWeight='500' />
            <MyInput placeholder='modified password' value={modifiedDateUser.password} onChange={async (e) => await setModifiedDateUser({
                ...userData,
                password: e.target.value
            })} />
            <br/>
            <MyButton btnName='Save settings' callback={async () => {
                await setUserData(modifiedDateUser);
                console.log(modifiedDateUser);
                navigate('/home')
            }}/>
        </div>
    );
};

export default Setting;