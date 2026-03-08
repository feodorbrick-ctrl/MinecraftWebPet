import MyHeader from "./components/UI/Headers/MyHeader";
import { Navigate, Route, Routes } from "react-router-dom";
import {publicRoutes} from "./router/router";
import './styles/App.css'

function App() {
  return (
    <div className="App">
        <div className="container">
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path} />
                )}
            </Routes>
        </div>
        <div className = 'header'>
            <MyHeader/>
        </div>
        <div className = 'rightPartBorder'/>
    </div>
  );
}

export default App;
