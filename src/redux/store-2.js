import {createStore} from "redux";
import {ADD_TRACK} from "./actions/types";

function reducer(state = [] /* Initial State*/, action) {
    console.log("reducer()", "action", action);
    switch (action.type) {
        case ADD_TRACK:
            return [...state, action.payload];
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;