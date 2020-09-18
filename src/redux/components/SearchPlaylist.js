import React, {Component} from 'react';
import {connect} from "react-redux";
import {FIND_TRACK} from "../actions/types";
import PropTypes from "prop-types";

// Component SearchPlaylist
class SearchPlaylist extends Component {
    // Handlers
    findTrack() {
        const searchName = this.searchInput.value;
        console.log('SearchPlaylist.findTrack()', searchName);
        // Dispatch FIND_TRACK
        this.props.onFindTrack(searchName);
    }
    // Render Component
    render() {
        console.log("SearchPlaylist.tracks", this.props.tracks);
        return (
            <div>
                <h1>Search Playlist</h1>
                <input
                    type="text"
                    ref={(input) => this.searchInput = input}
                    placeholder="Search..."
                />
                <button onClick={this.findTrack.bind(this)}>Find track</button>
                <ul>
                    {this.props.tracks.map((track, index) =>
                        <li key={index}>{track}</li>
                    )}
                </ul>
            </div>
        );
    }
}

// PropTypes for Component SearchPlaylist
SearchPlaylist.propTypes = {
    tracks: PropTypes.array.isRequired,
    onFindTrack: PropTypes.func.isRequired
};

// Connect Component to Redux
export default connect(
    //mapStateToProps
    state => ({
        tracks: state.tracks.filter(track => track.includes(state.filterTracks)) // use filter
    }),
    // mapDispatchToProps
    dispatch => ({
        onFindTrack: (name) => {
            dispatch({type: FIND_TRACK, payload: name});
        }
    })
)(SearchPlaylist);
