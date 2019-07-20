/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_SMURF,
  FETCHING_SMURF_SUCCESS,
  FETCHING_SMURF_FAILED,
  ADD_SMURF,
  ADD_SMURF_SUCCESS
} from "../actions";

//  Your initial/default state for this project could *Although does not have to* look a lot like this
// my instial state
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  //    addingSmurf: false
  //    updatingSmurf: false
  //    deletingSmurf: false
  error: null
};

// start of my reducer
export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURF: {
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    }
    case FETCHING_SMURF_SUCCESS: {
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    }

    case FETCHING_SMURF_FAILED: {
      return {
        fetchingSmurfs: false,
        error: action.payload
      };
    }
    case ADD_SMURF: {
      //   console.log("smurf added");
      return {
        ...state,
        fetchingSmurfs: true,
        error: false
      };
    }
    case ADD_SMURF_SUCCESS: {
      console.log("smurf success");
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload
      };
    }
    default:
      return state;
  }
};
/*
      You'll only need one smurf reducer for this project.
      Feel free to export it as a default and import as rootReducer. 
      This will guard your namespacing issues.
      There is no need for 'combineReducers' in this project.
      Components can then read your store as, `state` and not `state.fooReducer`.
    */
export default smurfReducer;
