import {combineReducers} from "redux";
import trackReducer from "./trackReducer";
import playlistReducer from "./playlistReducer";
import filterTracks from "./filterTracks";

export default combineReducers({
    tracks: trackReducer,
    playlists: playlistReducer,
    filterTracks: filterTracks
});