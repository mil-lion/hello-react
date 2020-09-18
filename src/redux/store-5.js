import {createStore} from "redux";
import {ADD_PLAYLIST, ADD_TRACK, DELETE_PLAYLIST, DELETE_TRACK} from "./actions/types";

// Initial State
const initialState = {
    tracks: [
        'Smells like spirit',
        'Enter Sandman'
    ],
    playlists: [
        'My home playlist',
        'My work playlist'
    ]
};

function reducer(state = initialState, action) {
    console.log("reducer()", "action", action);
    switch (action.type) {
        case ADD_TRACK:
            return {
                ...state,
                tracks: [...state.tracks, action.payload]
            };
        case DELETE_TRACK:
            return state;
        case ADD_PLAYLIST:
            return {
                ...state,
                playlists: [...state.playlists, action.payload]
            };
        case DELETE_PLAYLIST:
            return state;
        default:
            return state;
    }
}

// Width Redux DevTools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;