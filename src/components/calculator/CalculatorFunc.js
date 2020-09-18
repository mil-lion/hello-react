import React, {useState} from 'react';
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import {toCelsius, toFahrenheit, tryConvert} from "./tempFunctions";

// Функциональный компонент Calculator
function CalculatorFunc(props) {
     // Initial State
     const [state, setState] = useState({
         scale: "",
         temperature: ""
     });
     // Handlers
     function handleChange(scale, temperature) {
        setState({
            scale: scale,
            temperature: temperature
        });
    }
    // Component Render
    const {scale, temperature} = state;
    const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
    const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onChange={handleChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onChange={handleChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
    );
}

export default CalculatorFunc;