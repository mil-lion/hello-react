import {ADD_PLAYLIST} from "./types";

// Action Functions (Async)

export const onAddPlaylist = (playlistName) => /*async*/ dispatch => {
    console.log("Action:", "onAddPlaylist:", playlistName);
    // Послать сообщение ADD_PLAYLIST
    dispatch({
        type: ADD_PLAYLIST,
        payload: playlistName
    });
};