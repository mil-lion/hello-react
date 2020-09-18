import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import PlaylistFunc from "./redux/components/PlaylistFunc";

ReactDOM.render(
    <Provider store={store}>
        <PlaylistFunc />
    </Provider>
    , document.getElementById('root')
);
