import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";

import "./GroupOrientation.css";

export default function GroupOrientation() {
  const dispatch = useDispatch();

  const buttons = [
    <Button
      className="button_Size"
      onClick={() =>
        dispatch({ type: "Select a Video", payload: "Full-Video" })
      }
      key="one"
    >
      <div className="button_fontStyle">Full Video</div>
    </Button>,
    <Button
      className="button_Size"
      onClick={() => dispatch({ type: "Select a Video", payload: "Location" })}
      key="two"
    >
      <div className="button_fontStyle">1. Location</div>
    </Button>,
    <Button
      className="button_Size"
      onClick={() => dispatch({ type: "Select a Video", payload: "Record" })}
      key="three"
    >
      <div className="button_fontStyle">2. Record</div>
    </Button>,
    <Button
      className="button_Size"
      onClick={() => dispatch({ type: "Select a Video", payload: "Bill" })}
      key="four"
    >
      <div className="button_fontStyle">3. Bill</div>
    </Button>,
    <Button
      className="button_Size"
      onClick={() => dispatch({ type: "Select a Video", payload: "Statistic" })}
      key="five"
    >
      <div className="button_fontStyle">4. Statistic</div>
    </Button>,
  ];
  return (
    <Box
      sx={{
        display: "flex",
        "& > *": {
          m: 1,
        },
        // position:"absolute"
      }}
    >
      <ButtonGroup
        style={{
          border: "0.5rem solid",
        }}
        className="buttonsGroup"
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
