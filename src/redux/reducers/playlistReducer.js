import {ADD_PLAYLIST, DELETE_PLAYLIST} from "../actions/types";

// Initial State
const initialState = [
    "My home playlist",
    "My work playlist"
];

// Reducer for Playlists
export default function (state = initialState, action) {
    console.log("playlistReducer()", action);
    switch (action.type) {
        case ADD_PLAYLIST:
            return [...state, action.payload];

        case DELETE_PLAYLIST:
            return state;

        default:
            return state;
    }
};