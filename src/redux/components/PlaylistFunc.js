import React, {useCallback, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {onAddTrack, onGetTracks} from "../actions/trackAction";
import {ADD_TRACK} from "../actions/types";

function PlaylistFunc(props) {
    // Ref on Component
    const inputEl = useRef(null);

    // ======= Redux Hook ===========
    // mapStateToProps
    const tracks = useSelector(state => state.tracks);
    // mapDispatchToProps
    const dispatch = useDispatch();
    // Actions
    const actionAddTrack = useCallback(
        (name) => dispatch({type: ADD_TRACK, payload: name})
        , [dispatch]
    );

    // Handlers
    function addTrack()
    {
        const trackInput = inputEl.current;
        const trackName = trackInput.value;
        console.log("addTrack", trackName);
        // Dispatch message ADD_TRACK
        // dispatch({type: ADD_TRACK, payload: trackName});
        actionAddTrack(trackName);
        // clear input text
        trackInput.value = '';
    }
    function getTracks() {
        console.log("getTracks");
        // Call Action
        onGetTracks()(dispatch);
        // actionGetTracks();
    }

    // Render Component
    return (
        <div>
            <h1>Playlist</h1>
            <input
                type="text"
                ref={inputEl}
                placeholder="New Track Name..."
            />
            <button onClick={addTrack}>Add track</button>
            <button onClick={getTracks}>Get tracks</button>
            <ul>
                {tracks.map((track, index) =>
                    <li key={index}>{track}</li>
                )}
            </ul>
        </div>
    );
}

export default PlaylistFunc;
