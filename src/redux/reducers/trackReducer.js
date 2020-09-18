import {ADD_TRACK, DELETE_TRACK, FETCH_TRACKS_SUCCESS} from "../actions/types";

// Initial State
const initialState = [
    "Smells like spirit",
    "Enter Sandman"
];

// Reducer for Tracks
export default function (state = initialState, action) {
    console.log("trackReducer()", action);
    switch (action.type) {
        case ADD_TRACK:
            return [...state, action.payload];

        case DELETE_TRACK:
            return state;

        case FETCH_TRACKS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
};