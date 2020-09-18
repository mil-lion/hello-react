import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameFunc from "./components/game/GameFunc";

ReactDOM.render(
    <div>
        <GameFunc />
        <hr/>
        <GameFunc />
    </div>,
    document.getElementById('root')
);
