import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

// Функциональный компонент Доска (Board)
function Board(props) {
    function renderSquare(i) {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div className="game-board">
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

// Добавляем проверку типов для props
Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Board;
