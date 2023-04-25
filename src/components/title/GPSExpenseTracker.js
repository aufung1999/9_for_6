import React from "react";
import "./GPSExpenseTracker.css";

export default function GPSExpenseTracker() {
  return (
    <div className="div">
      <p aria-label="">
        <span data-text="G">G</span>
        <span data-text="-">-</span>
        {/* <span data-text="P">P</span>
        <span data-text="S">S</span> */}
      </p>
      <p>
        <span>&nbsp;</span>
      </p>
      <p>
        <span data-text="e">e</span>
        <span data-text="x">x</span>
        <span data-text="P">P</span>
        <span data-text="e">e</span>
        <span data-text="n">n</span>
        <span data-text="S">S</span>
        <span data-text="e">e</span>
      </p>
      <p>
        <span>&nbsp;&nbsp;</span>
      </p>
      <p>
        <span data-text="T">T</span>
        <span data-text="r">r</span>
        <span data-text="a">a</span>
        <span data-text="c">c</span>
        <span data-text="k">k</span>
        <span data-text="e">e</span>
        <span data-text="r">r</span>
      </p>
    </div>
  );
}
