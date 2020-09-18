import React, {Component} from 'react';
import {connect} from "react-redux";

// Component Playlist
class Playlist extends Component {
    // Handlers
    addTrack() {
        const trackName = this.trackInput.value;
        console.log('Playlist.addTrack()', trackName);
        this.trackInput.value = ''; // clear input text
    }
    // Render Component
    render() {
        console.log("Playlist.testStore", this.props.testStore);
        return (
            <div>
                <h1>Playlist</h1>
                <input
                    type="text"
                    ref={(input) => this.trackInput = input}
                    placeholder="New Track Name..."
                />
                <button onClick={this.addTrack.bind(this)}>Add track</button>
                <ul>
                    {this.props.testStore.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

// Connect Component to Redux
export default connect(
    //mapStateToProps
    state => ({
        testStore: state
    }),
    // mapDispatchToProps
    dispatch => ({})
)(Playlist);
