import {ADD_TRACK, FETCH_TRACKS_SUCCESS} from "./types";

// Action Functions (Async)

export const onAddTrack = (trackName) => /*async*/ dispatch => {
    console.log("Action:", "onAddTrack:", trackName);
    // Послать сообщение ADD_TRACK
    dispatch({
        type: ADD_TRACK,
        payload: trackName
    });
};

const mockApiData = [
    'Enter Sandman',
    'Welcome Home',
    'Master of Puppets',
    'Fade to Black',
    'Nothing Else Matters'
];

export const onGetTracks = () => async dispatch => {
    console.log("Action:", "onGetTracks");
    setTimeout(() => {
        console.log("I got tracks");
        // Послать сообщение FETCH_TRACKS_SUCCESS
        dispatch({type: FETCH_TRACKS_SUCCESS, payload: mockApiData});
    }, 2000);

};