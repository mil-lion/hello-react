import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {onAddTrack, onGetTracks} from "../actions/trackAction";

// Component Playlist
class Playlist extends Component {
    // Handlers
    addTrack() {
        const trackName = this.trackInput.value;
        console.log('Playlist.addTrack()', trackName);
        // Dispatch ADD_TRACK
        this.props.onAddTrack(trackName);
        this.trackInput.value = ''; // clear input text
    }
    // Render Component
    render() {
        console.log("Playlist.tracks", this.props.tracks);
        return (
            <div>
                <h1>Playlist</h1>
                <input
                    type="text"
                    ref={(input) => this.trackInput = input}
                    placeholder="New Track Name..."
                />
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <button onClick={this.props.onGetTracks}>Get tracks</button>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

// PropTypes for Component Playlist
Playlist.propTypes = {
    tracks: PropTypes.array.isRequired,
    onAddTrack: PropTypes.func.isRequired
};

// Connect Component to Redux
export default connect(
    //mapStateToProps
    state => ({
        tracks: state.tracks // part of store
    }),
    // mapDispatchToProps
    {onAddTrack, onGetTracks}
)(Playlist);
