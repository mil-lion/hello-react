import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from "./components/Clock";
import ClockFunc from "./components/ClockFunc";

ReactDOM.render(
    <div>
        <Clock />
        <ClockFunc />
    </div>,
    document.getElementById('root')
);
