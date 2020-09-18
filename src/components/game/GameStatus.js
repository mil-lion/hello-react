import React from "react";
import PropTypes from "prop-types";
import calculateWinner from "./winner";

// Компонент СтатусИгры (GameStatus)
function GameStatus(props) {
    const winner = calculateWinner(props.squares);
    let status;
    if (winner) {
        status = 'Выиграл: ' + winner;
    } else {
        status = 'Следующий ход: ' + (props.xIsNext ? 'X' : 'O');
    }
    return (<div>{status}</div>)
}

// Добавляем проверку типов для props
GameStatus.propTypes = {
    squares: PropTypes.array.isRequired,
    xIsNext: PropTypes.bool.isRequired
};

export default GameStatus;
