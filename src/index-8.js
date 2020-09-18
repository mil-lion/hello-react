import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from "./components/Greeting";

ReactDOM.render(
    <Greeting isLoggedIn={true} />,
    document.getElementById('root')
);
