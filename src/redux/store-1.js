import {createStore} from "redux";

function reducer(state = [] /* Initial State*/, action) {
    console.log("reducer()", "action", action);
    return state;
}

const store = createStore(reducer);

export default store;