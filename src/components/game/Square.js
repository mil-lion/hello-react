import React from "react";
import PropTypes from "prop-types";

// Функциональный компонент Клетка (Square) (stateless)
function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

// Добавляем проверку типов для props
Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired
};

export default Square;
