import {createStore} from "redux";
import {ADD_TRACK} from "./actions/types";

// Initial State
const initialState = [
    'Smells like spirit',
    'Enter Sandman'
];

function reducer(state = initialState, action) {
    console.log("reducer()", "action", action);
    switch (action.type) {
        case ADD_TRACK:
            return [...state, action.payload];
        default:
            return state;
    }
}

// Width Redux DevTools
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;