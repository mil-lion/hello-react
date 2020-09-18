import React from "react";
import PropTypes from "prop-types";

// Компонент ИсторияИгры (GameHistory)
function GameHistory(props) {
    return (
        <ol>
            {props.history.map((step, index) => {
                const desc = index
                    ? 'Перейти к ходу #' + index
                    : 'К началу игры';
                return (
                    <li key={index}>
                        <button onClick={() => props.jumpTo(index)}>{desc}</button>
                    </li>
                );
            })}
        </ol>
    );
}

// Добавляем проверку типов для props
GameHistory.propTypes = {
    history: PropTypes.array.isRequired,
    jumpTo: PropTypes.func.isRequired
};

export default GameHistory;
