import React, { useEffect, useState } from "react";
import "./Videos.css";

import tim_e from "../../videos/tim_e.mp4";
import NR_R from "../../videos/NR_R_e.mp4";
import bill from "../../videos/bills_e.mp4";
import statistics_e from "../../videos/statistics_e.mp4";
import { useSelector } from "react-redux";

// import tape from "../../pictures/tape.png";

export default function Videos() {
  const whichVideo = useSelector((state) => state.whichVideo);

  const [displayVideo, setDisplayVideo] = useState(tim_e);

  useEffect(() => {
    if (whichVideo === "Location") {
      setDisplayVideo(tim_e);
    }
    if (whichVideo === "Record") {
      setDisplayVideo(NR_R);
    }
    if (whichVideo === "Bill") {
      setDisplayVideo(bill);
    }
    if (whichVideo === "Statistic") {
      setDisplayVideo(statistics_e);
    }
  }, [whichVideo]);

  return (
    <div className="demo Videos_border">

      <div className="crop-container aspect-ratio-16x9">
        <video
          id="the-video"
          // ref={videoRef}
          src={displayVideo}
          type="video/mp4"
          controls
          // width={1280}
          // height={720}
        ></video>
      </div>
    </div>
  );
}
