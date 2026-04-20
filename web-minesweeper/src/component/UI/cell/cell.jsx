import React from 'react';
import cellImage from '../../../Images/closeCellToGameMinesweeper.png'
import cl from './cell.module.css'

const Cell = ({top, left}) => {
    return (
        <img
            style={{top: top, left: left,position: 'absolute'}}
            onClick={(e) => {
                e.currentTarget.style.display = 'none';
            }}
             className={cl.cell}
             src={cellImage}
             alt="cell"
        />
);
};

export default Cell;