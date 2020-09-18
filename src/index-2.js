import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function tick() {
    const element = (
        <div>
            <h1>Привет, Мир!</h1>
            <h2>Сейчас {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root')); // так не делают!!!
}

setInterval(tick, 1000);
