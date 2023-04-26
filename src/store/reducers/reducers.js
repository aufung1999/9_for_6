import React from "react";
import { combineReducers } from "redux";

//######################################################################################################

const whichVideoReducer = (state = "Location", action) => {
  switch (action.type) {
    case "Select a Video":
      return action.payload;
    default:
      return state;
  }
};


//######################################################################################################

const reducers = combineReducers({
  whichVideo: whichVideoReducer,
});

export default reducers;
