import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './App';

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
    const [isUserLoggedIn, setUserLoggedIn] = React.useState(false);
    const [allUsersName, setAllUsersName] = React.useState([]);
    const [usersPassword, setUsersPassword] = React.useState([]);

    const contextValue = {
        isUserLoggedIn,
        setUserLoggedIn,
        allUsersName,
        setAllUsersName,
        usersPassword,
        setUsersPassword,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ContextProvider>
    </React.StrictMode>
);

export default Context;