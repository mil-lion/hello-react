import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// ReactDOM.render(
//     <h1 className='header-class'>Hello ReactJS</h1>, // JSX - JavaScript Extension
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement(
//         'div',
//         { className: 'header-class' },
//         React.createElement('h1', {}, 'Hello ReactJS')
//     ),
//     document.getElementById('root')
// );

const element1 = <h1>Привет, Мир!</h1>; // JSX
const element2 = React.createElement('h1', {}, 'Привет, Мир!');

const name = "Игорь Моренко";
const element3 = <h1>Привет, {name}!</h1>; // JSX


function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Igor',
    lastName: 'Morenko'
};

const element4 = <h1>Hello, {formatName(user)}!</h1>;

function getGreeting(user) {
    if (user) {
        return <h1>Здравствуй, {formatName(user)}!</h1>; // JSX
    } else {
        return <h1>Здравствуй, незнакомец.</h1>; // JSX
    }
}

const element5 = (
    <div>
        {getGreeting(user)}
        <h2>Рады вас видеть.</h2>
    </div>
);

// Render Elements
ReactDOM.render(
    element5,
    document.getElementById('root')
);
