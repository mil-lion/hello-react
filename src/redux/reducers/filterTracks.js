import {FIND_TRACK} from "../actions/types";

const initialState = ''; // empty filter

// Reducer for Filter Tracks
export default function (state = initialState, action) {
    console.log("filterReduces()", "action", action);
    switch (action.type) {
        case FIND_TRACK:
            return action.payload;
        default:
            return state;
    }
}
