import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
    const [isUserLoggedIn, setUserLoggedIn] = React.useState(true);
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    });

    let savedUsersPassword = []
    let savedUsersNames = []

    const contextValue = {
        isUserLoggedIn,
        setUserLoggedIn,
        savedUsersPassword,
        savedUsersNames,
        userData,
        setUserData,
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
                <App />
        </ContextProvider>
    </React.StrictMode>
);

export default Context;