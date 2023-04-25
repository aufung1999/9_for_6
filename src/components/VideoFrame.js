import React, { useState } from "react";
import "./VideoFrame.css";

import GroupOrientation from "./Selection/GroupOrientation";
import Videos from "./Videos/Videos";
import { Collapse, IconButton } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function VideoFrame() {
  const [open, setOpen] = useState(false);
  const matches = useMediaQuery("(max-width:600px)"); // TO see if the media is MAX 600 px in .js file, NOT .css
  return (
    <div className="videoFrame">
      {/* <div className="whitePlane whitePlane_border">VideoFrame</div> */}
      <div className="selections ">
        <div>
          <IconButton
            onClick={() => setOpen(!open)}
            aria-label="expand"
            size="small"
          >
            <div  className="expandBtn">Expand</div>
          </IconButton>
        </div>
        <Collapse
          className="expandPos "
          orientation={matches ? "vertical" : "horizontal"} //DYNAMIC Conditional style
          in={open}
          timeout="auto"
          unmountOnExit
        >
          {console.log("matches: " + matches)}
          <GroupOrientation />
        </Collapse>

        <Videos />
      </div>
      <div className="whitePlane_border">DownLoad</div>
      <div className="whitePlane_border">DownLoad</div>
    </div>
  );
}
