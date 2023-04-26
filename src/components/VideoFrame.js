import React, { useState } from "react";
import "./VideoFrame.css";

import GroupOrientation from "./Selection/GroupOrientation";
import Videos from "./Videos/Videos";
import { Collapse, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";

import tape from "../pictures/tape.png";

import Introduction from "./Introduction/Introduction";
import Function from "./Function/Function";

export default function VideoFrame() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:600px)"); // TO see if the media is MAX 600 px in .js file, NOT .css

  const dispatch = useDispatch();

  return (
    <div className="videoFrame">
      <div className="whitePlane whitePlane_border">VideoFrame</div>
      <div className="Introduction_Area">
        <Introduction />
      </div>
      <div className="Function_Area">
        <Function />
      </div>
      <div className="selections ">
        <div className="button-alignment">
          <button
            className="button-29"
            onClick={() =>
              dispatch({ type: "Select a Video", payload: "Location" })
            }
          >
            <div>Nearby Shops</div>
          </button>
          <button
            className="button-29 button-red-color"
            onClick={() =>
              dispatch({ type: "Select a Video", payload: "Record" })
            }
          >
            <div>Locations</div>
          </button>
          <button
            className="button-29 button-yellow-color"
            onClick={() =>
              dispatch({ type: "Select a Video", payload: "Bill" })
            }
          >
            <div>Bills</div>
          </button>
          <button
            className="button-29 button-green-color"
            onClick={() =>
              dispatch({ type: "Select a Video", payload: "Statistic" })
            }
          >
            <div>Statistic</div>
          </button>
        </div>
        <Collapse
          className=" "
          orientation={matches ? "vertical" : "horizontal"} //DYNAMIC Conditional style
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {console.log("matches: " + matches)}
          <GroupOrientation />
        </Collapse>
      </div>
      <div className="videoContainer ">
        <img className="videoContainer_tape " src={tape} alt="Logo" />
        <Videos />
      </div>

      <div className="whitePlane_border">DownLoad</div>
    </div>
  );
}
