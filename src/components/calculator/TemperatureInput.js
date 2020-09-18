import PropTypes from "prop-types";
import React from "react";

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
};

// Component TemperatureInput
function TemperatureInput(props) {
    function handleChange(event) {
        props.onChange(props.scale, event.target.value);
    }
    return (
        <fieldset>
            <legend>Введите температуру в градусах {scaleNames[props.scale]}:</legend>
            <input
                value={props.temperature}
                // onChange={(event) => {props.onChange(props.scale, event.target.value);}}
                onChange={handleChange}
            />
        </fieldset>
    );
}

TemperatureInput.propTypes = {
    scale: PropTypes.string.isRequired,
    temperature: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TemperatureInput;
