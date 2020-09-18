import {combineReducers} from "redux";
import trackReducer from "./trackReducer";
import playlistReducer from "./playlistReducer";

export default combineReducers({
    tracks: trackReducer,
    playlists: playlistReducer
});