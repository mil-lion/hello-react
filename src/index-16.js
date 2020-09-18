import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from "./components/calculator/Calculator";
import CalculatorFunc from "./components/calculator/CalculatorFunc";

ReactDOM.render(
    <div>
        <Calculator />
        <CalculatorFunc />
    </div>,
    document.getElementById('root')
);
