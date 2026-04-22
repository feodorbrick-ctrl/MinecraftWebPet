import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Context = createContext(null);

const ContextProvider = ({ children }) => {
    const [canUserPlay, setCanUserPlay] = React.useState(true);
    const contextValue = {
        canUserPlay,
        setCanUserPlay,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ContextProvider>
                <App />
            </ContextProvider>
        </React.StrictMode>
    </BrowserRouter>
);

export default Context;