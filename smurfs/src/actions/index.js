import axios from "axios";

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILED = "FETCHING_SMURF_FAILED";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILED = "ADD_SMURF_FAILED";
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export function fetchSmurf() {
  return dispatch => {
    dispatch({ type: FETCHING_SMURF });
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        dispatch({ type: FETCHING_SMURF_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCHING_SMURF_FAILED, payload: error.response });
      });
  };
}

export function addNew(newText) {
  return dispatch => {
    dispatch({ type: ADD_SMURF });
    axios
      .post("http://localhost:3333/smurfs", newText)
      .then(response => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ADD_SMURF_FAILED, payload: error.response });
      });
  };
}
