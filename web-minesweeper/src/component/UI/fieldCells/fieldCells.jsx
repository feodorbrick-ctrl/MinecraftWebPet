import React, {useState} from 'react';
import Cell from "../cell/cell";
import cl from './fieldCells.module.css'

const FieldCells = () => {
        const [bombs, setBombs] = useState([])
        const [numbers, setNumbers] = useState({
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
            7: [],
            8: [],
        })
        const [cellKeys] = useState(Array(100).fill(undefined).map((_, i) => i + 1));
        let indexX = -1
        let indexY = 0

        while (bombs.length < 10) {
            let bombKey = Math.floor(Math.random() * 99);
            if (!bombs.includes(bombKey) && bombKey !== 0) {
                bombs.push(bombKey)
            }
        }

        if (numbers["1"].length !== 80) {
            for (let i = 0; i < bombs.length; i++) {
                numbers["1"].push(bombs[i] + 11);
                numbers["1"].push(bombs[i] + 10);
                numbers["1"].push(bombs[i] + 9);
                numbers["1"].push(bombs[i] + 1);
                numbers["1"].push(bombs[i] - 1);
                numbers["1"].push(bombs[i] - 9);
                numbers["1"].push(bombs[i] - 10);
                numbers["1"].push(bombs[i] - 11);
            }
        }

        console.log(numbers["1"])
        return (
            <div className={cl.playField}>
                <div style={{position: 'absolute', left: '10px'}}>
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
                            if (numbers["1"].includes(i) && numbers["1"][i] < 101 && numbers["1"][i] > -1) {
                                console.log(numbers["1"][i], ':', numbers["1"].indexOf(i))
                                return (
                                    <Cell top={indexX * 50} left={indexY * 50} cellChildren={1} i={i} key={i}/>
                                )
                            } else {
                                return (
                                    <Cell top={indexX * 50} left={indexY * 50} key={i}/>
                                )
                            }
                        }
                    })}
                </div>
            </div>
        );
    }
;

export default FieldCells;