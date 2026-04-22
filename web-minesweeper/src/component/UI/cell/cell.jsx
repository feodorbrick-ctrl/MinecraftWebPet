import React, {useContext} from 'react';
import cellImage from '../../../Images/closeCellToGameMinesweeper.png'
import cl from './cell.module.css'
import Context from '../../../index'
import numberOne from '../../../Images/numberOne.png'
import numberTwo from '../../../Images/numberTwo.png'
import numberThree from '../../../Images/numberThree.png'
import numberFour from '../../../Images/numberFour.png'
import numberFive from '../../../Images/numberFive.png'
import numberSix from '../../../Images/numberSix.png'
import numberSeven from '../../../Images/numberSeven.png'
import numberEight from '../../../Images/numberEight.png'
import Bomb from '../../../Images/bomb.png'

const Cell = ({top, left, cellChildren}) => {
    const {canUserPlay, setCanUserPlay} = useContext(Context);
    switch (cellChildren) {
        case 1: cellChildren = numberOne;
            break
        case 2: cellChildren = numberTwo;
            break
        case 3: cellChildren = numberThree;
            break
        case 4: cellChildren = numberFour;
            break
        case 5: cellChildren = numberFive;
            break
        case 6: cellChildren = numberSix;
            break
        case 7: cellChildren = numberSeven;
            break
        case 8: cellChildren = numberEight
            break
        case 'bomb': cellChildren = Bomb
            break
    }

    return (
        <div>
            <div className={cl.numberField} style={{position: 'absolute', top: top, left: left}}>
                {cellChildren &&
                    <img src={cellChildren} alt={cellChildren} className={cl.img}/>
                }
            </div>
            <img
                style={{top: top, left: left,position: 'absolute'}}
                onClick={(e) => {
                    if (canUserPlay) {
                        e.currentTarget.style.display = 'none';
                        if (cellChildren === Bomb) {
                            setCanUserPlay(false)
                            console.log(false)
                        }
                    }
                }}
                className={cl.cell}
                src={cellImage}
                alt="cell"
            />
        </div>
);
};

export default Cell;