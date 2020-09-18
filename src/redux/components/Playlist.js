import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {onAddTrack, onGetTracks} from "../actions/trackAction";

class Playlist extends Component {

    addTrack() {
        const trackName = this.trackInput.value;
        console.log("addTrack", trackName);
        this.props.onAddTrack(trackName);
        this.trackInput.value = '';
    }

    render() {
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
                    {this.props.testStore.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

Playlist.propTypes = {
    testStore: PropTypes.array.isRequired,
    onAddTrack: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    testStore: state.tracks
});

export default connect(
    mapStateToProps,
    {onAddTrack, onGetTracks}
)(Playlist);
