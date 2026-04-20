import React, {useState} from 'react';
import Cell from "../cell/cell";

const FieldCells = () => {
    const [cellKeys, setCellKeys] = useState(Array(100).fill(undefined).map((_, i) => i + 1));
    let indexX = -1
    let indexY = 0
    console.log(cellKeys.length)
    return (
        <div>
            {cellKeys.map((i) => {

                if (indexX === 9) {
                    indexX = 0
                    indexY++
                } else {
                    indexX++
                }
                return (
                    <Cell top={indexX * 50} left={indexY * 50} key={i}/>
                )
            })}
        </div>
    );
};

export default FieldCells;