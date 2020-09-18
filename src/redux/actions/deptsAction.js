import {GET_DEPARTMENTS, GET_ERRORS} from "./types";

const headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa('scott:tiger')); // atob() - btoa()
headers.append('Content-type', 'application/json');

// Action Functions (Async)
export const getDepartments = () => async dispatch => {
    // Call API
    fetch("/scott/api/depts", {headers: headers})
        .then(res => res.json())
        .then(res => {
            // Dispatch Action
            dispatch({
                type: GET_DEPARTMENTS,
                payload: res
            });
        })
        .catch(err => console.error("getDepartments", err));
};

export const createDepartment = (dept, history) => async dispatch => {
    // Call API
    fetch("/scott/api/depts", {headers: headers, method: "POST", body: JSON.stringify(dept)})
        .then(res => {
            if (res.ok) {
                res.json()
                    .then(res => {
                            console.log("Create Dept Ok", res);
                            history.push("/depts"); // redirect to page
                            dispatch({
                                type: GET_ERRORS,
                                payload: {}
                            });
                        })
                    .catch(err => console.error("createDepartment", err));
            } else {
                console.error("createDepartment");
                res.json()
                    .then(res => {
                        dispatch({
                            type: GET_ERRORS,
                            payload: res
                        });
                    })
                    .catch(err => console.error("createDepartment", err));
            }
        });
};