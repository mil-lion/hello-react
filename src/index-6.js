import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from "./components/Clock";

ReactDOM.render(
    <div>
        <Clock />
        <Clock />
        <Clock />
    </div>,
    document.getElementById('root')
);
