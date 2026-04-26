import React, {useState} from 'react';
import Cell from "../cell/cell";
import cl from './fieldCells.module.css'

class Item {
    constructor(isOpened = false, isBomb = false, figure = 0, isFlag = false) {
        this.isOpened = isOpened;
        this.isBomb = isBomb;
        this.isFlag = isFlag;
        this.figure = figure;
    }

    toString() {
        if (this.isBomb) return 'bomb';
        if (this.isFlag) return 'flag';
        return this.figure.toString();
    }
}

function addBomb(arr, bombsQuantity) {
    // Make a copy of the array to avoid modifying the original if needed
    const items = arr;
    const totalItems = items.length;

    // Get indices that don't already have bombs
    const nonBombIndices = [];
    for (let i = 0; i < totalItems; i++) {
        if (!items[i].isBomb) {
            nonBombIndices.push(i);
        }
    }

    // Check if we have enough non-bomb positions
    if (nonBombIndices.length < bombsQuantity) {
        console.warn(`Not enough non-bomb positions. Only ${nonBombIndices.length} available.`);
        bombsQuantity = nonBombIndices.length;
    }

    // Randomly select indices to place bombs
    let bombsPlaced = 0;
    while (bombsPlaced < bombsQuantity && nonBombIndices.length > 0) {
        // Get random index from nonBombIndices
        const randomIndex = Math.floor(Math.random() * nonBombIndices.length);
        const bombPosition = nonBombIndices[randomIndex];

        // Place bomb
        items[bombPosition].isBomb = true;

        // Remove this index so we don't place another bomb here
        nonBombIndices.splice(randomIndex, 1);

        bombsPlaced++;
    }
    return items;
}

function createItemList(count) {
    if (count === 0) return []
    const items = [];
    for (let i = 0; i < count; i++) {
        items.push(new Item());
    }
    return items;
}

function updateFigures(items) {
    // Reset figures
    for (let i = 0; i < items.length; i++) {
        if (!items[i].isBomb) {
            items[i].figure = 0;
        }
    }

    // Calculate adjacent bombs (for 1D array with neighbors)
    for (let i = 0; i < items.length; i++) {
        if (!items[i].isBomb) {
            let adjacentBombs = 0;

            // Check bottom neighbour
            if (items.length - 2 > i > 0 && items[i + 1].isBomb && (i + 1) % 10 !== 0) adjacentBombs++;
            // Check top neighbour
            // if (i < items.length - 1 && items[i - 1] && (i % 10) !== 0) adjacentBombs++;
            //
            if (i > 0 && items[i - 1].isBomb && (i - 1) % 10 !== 0) adjacentBombs++;
            // if (i + 10 < items.length && items[i + 10].isBomb) adjacentBombs++;

            items[i].figure = adjacentBombs;
        }
    }
    return items;
}

const FieldCellsNew = () => {
        const initialItems = createItemList(100)
        const listWithBombs = addBomb(initialItems, 10)
        const listWithFigures = updateFigures(listWithBombs)

        console.log(`listWithFigures = ${listWithFigures.toString()}`)

        const [bombs] = useState([])
        const [cellKeys] = useState(Array(100).fill(undefined).map((_, i) => i + 1));
        let indexX = -1
        let indexY = 0

        while (bombs.length < 10) {
            let bombKey = Math.floor(Math.random() * 100);
            if (!bombs.includes(bombKey) && bombKey !== 0) {
                bombs.push(bombKey)
            }
        }
        return (
            <div className={cl.playField}>
                <div style={{position: 'absolute', left: '10px'}}>
                    {listWithFigures.map((item,  index) => {

                        if (indexX === 9) {
                            indexX = 0
                            indexY++
                        } else {
                            indexX++
                        }
                        if (item.isBomb) {
                            return (
                                <Cell top={indexX * 50} left={indexY * 50} cellChildren='bomb' key={index}/>
                            )
                        } else {
                            switch (item.figure) {
                                case 0: return <Cell top={indexX * 50} left={indexY * 50} key={index} />
                                case 1: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 2: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 3: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 4: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 5: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 6: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 7: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                                case 8: return <Cell top={indexX * 50} left={indexY * 50} cellChildren={item.figure} key={index}/>
                            }
                            // return (
                            //     <Cell top={indexX * 50} left={indexY * 50} key={i}/>
                            // )
                        }
                    })}
                </div>
            </div>
        );
    }
;

export default FieldCellsNew;