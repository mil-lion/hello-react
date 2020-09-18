import React, {Component} from 'react';
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import {toCelsius, toFahrenheit, tryConvert} from "./tempFunctions";

// Классовый компонент Calculator
class Calculator extends Component {
    constructor(props) {
        super(props);
        // Initial State
        this.state = {
            scale: "",
            temperature: ""
        };
        // Bind method to this object
        this.handleChange = this.handleChange.bind(this);
    }
     handleChange(scale, temperature) {
        this.setState({
            scale: scale,
            temperature: temperature
        });
    }
    render() {
        const {scale, temperature} = this.state;
        const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
        const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);
        return (
            <div>
                <h1>Calculator</h1>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default Calculator;