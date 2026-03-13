import MyHeader from "../components/UI/Headers/MyHeader";
import {Link, Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/router";
import '../styles/AppRouter.css'
import React, {useContext, useState} from "react";
import Context from "../index";
import MyButton from "./UI/MyButton/MyButton";
import MyModal from "./UI/modal/MyModal";

function AppRouter() {
    const {isUserLoggedIn, setUserLoggedIn} = useContext(Context)
    const [isVisibleLogOutModal, setVisibleLogOutModal] = useState(false);

    if (!isUserLoggedIn) {
        return (
            <div className="App">
                <div className="container">
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route path={route.path} element={route.element} key={route.path} />
                        )}
                        <Route path="*" element={<Navigate to='/' replace/>}/>
                    </Routes>
                </div>
                <div className = 'header'>
                    <div className='fieldLinks'>
                        <MyHeader/>
                        {publicRoutes.map(route =>
                            <div className='LinksButton' key={route.path}>
                                <Link className='Links' to={route.path} key={route.path}>
                                    {route.name}
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className = 'rightPartBorder'/>
            </div>
        );
    } else {
        return (
            <div className="App">
                <div className="container">
                    <Routes>
                        {privateRoutes.map(route =>
                            <Route path={route.path} element={route.element} key={route.path} />
                        )}
                        <Route path="*" element={<Navigate to='/' replace/>}/>
                    </Routes>
                </div>
                <div className = 'header'>
                    <div className='fieldLinks'>
                        <MyHeader/>
                        {privateRoutes.map(route =>
                            <div className='LinksButton' key={route.path}>
                                <Link className='Links' to={route.path} key={route.path}>
                                    {route.name}
                                </Link>
                            </div>
                        )}
                        <MyButton btnName='Log Out' callback={() => setVisibleLogOutModal(true)} />
                        <MyModal
                            setVisible = {setVisibleLogOutModal}
                            visible = {isVisibleLogOutModal}
                            children = {[
                                <p key='Are you sure to log out'>Are you sure to log out</p>,
                                <MyButton key={'Yes I`m sure'} btnName={'Yes I`m sure'} callback={ () => setUserLoggedIn(false)} />
                            ]}
                        />
                    </div>
                </div>
                <div className = 'rightPartBorder'/>
            </div>
        )
    }
}

export default AppRouter;
