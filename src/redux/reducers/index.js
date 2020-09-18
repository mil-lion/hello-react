import {combineReducers} from "redux";
import trackReducer from "./trackReducer";
import playlistReducer from "./playlistReducer";
import filterTracks from "./filterTracks";
import departmentReducer from "./departmentReducer";

export default combineReducers({
    tracks: trackReducer,
    playlists: playlistReducer,
    filterTracks: filterTracks,
    depts: departmentReducer
});