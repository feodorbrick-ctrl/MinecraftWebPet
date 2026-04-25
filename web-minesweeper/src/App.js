import {useContext} from "react";
import Context from "./index";
import './App.css';
import FieldCells from "./component/UI/fieldCells/fieldCells";

function App() {
    const {canUserPlay} = useContext(Context);
  return (
    <div className="App">
        <FieldCells/>
        {!canUserPlay &&
            <h1>Died</h1>
        }
    </div>
  );
}

export default App;
