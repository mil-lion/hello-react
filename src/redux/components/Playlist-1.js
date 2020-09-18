import React, {Component} from 'react';
import {connect} from "react-redux";

// Component Playlist
class Playlist extends Component {
    // Render Component
    render() {
        console.log("Playlist.testStore", this.props.testStore);
        return (
            <div>
                <h1>Playlist</h1>
                <input
                    type="text"
                    placeholder="New Track Name..."
                />
                <button>Add track</button>
                <ul>
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
