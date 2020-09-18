import {GET_DEPARTMENTS, GET_ERRORS} from "../actions/types";
// Initial State
const initialState = {
    departments: [],
    errors: {}
};

// Reducer Department
export default function (state = initialState, action) {
    // console.log("reducer:", action);
    switch (action.type) {
        case GET_DEPARTMENTS:
            return {
                ...state,
                departments: action.payload
            };

        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload
            };

        default:
            return state;
    }
};