import {useContext} from "react";
import Context from "./index";
import './App.css';
import FieldCellsNew from "./component/UI/fieldCells/filedCellsNew";

function App() {
    const {canUserPlay} = useContext(Context);
  return (
    <div className="App">
        <FieldCellsNew/>
        {!canUserPlay &&
            <h1>Died</h1>
        }
    </div>
  );
}

export default App;
