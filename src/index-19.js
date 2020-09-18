import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplitApp from "./components/SplitApp";
import ErrorBoundary from "./components/decorators/ErrorBoundary";

ReactDOM.render(
    <ErrorBoundary>
        <SplitApp />
    </ErrorBoundary>,
    document.getElementById('root')
);
