import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WelcomeClass, {WelcomeFunc} from "./components/Welcome";

ReactDOM.render(
    <div>
        <WelcomeFunc name='Игорь Моренко' />
        <WelcomeClass name='Igor Morenko' />
    </div>,
    document.getElementById('root')
);
