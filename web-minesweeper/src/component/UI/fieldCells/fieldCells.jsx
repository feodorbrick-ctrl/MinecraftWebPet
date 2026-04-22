import React, {useState} from 'react';
import Cell from "../cell/cell";

const FieldCells = () => {
    const [bombs, setBombs] = useState([])
    const [cellKeys, setCellKeys] = useState(Array(100).fill(undefined).map((_, i) => i + 1));
    let indexX = -1
    let indexY = 0

    while (bombs.length < 10) {
        let bombKey = Math.floor(Math.random() * 99);
        if (!bombs.includes(bombKey) && bombKey !== 0) {
            bombs.push(bombKey)
        }
    }

    console.log(bombs)
    return (
        <div>
            {cellKeys.map((i) => {

                if (indexX === 9) {
                    indexX = 0
                    indexY++
                } else {
                    indexX++
                }
                if (bombs.includes(i)) {
                    console.log(true)
                    bombs.filter((bombKey) => bombKey)
                    return (
                        <Cell top={indexX * 50} left={indexY * 50} cellChildren='bomb' key={i}/>
                    )
                } else {
                    return (
                        <Cell top={indexX * 50} left={indexY * 50} key={i}/>
                    )
                }
            })}
        </div>
    );
};

export default FieldCells;