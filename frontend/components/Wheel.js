import React from "react";
import { moveClockwise, moveCounterClockwise } from "../state/action-creators";
import { connect } from "react-redux";

const Wheel = (props) => {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div
          className={props.index === 0 ? "cog active" : "cog"}
          style={{ "--i": 0 }}
        >
          {props.index === 0 ? "B" : ""}
        </div>
        <div
          className={props.index === 1 ? "cog active" : "cog"}
          style={{ "--i": 1 }}
        >
          {props.index === 1 ? "B" : ""}
        </div>
        <div
          className={props.index === 2 ? "cog active" : "cog"}
          style={{ "--i": 2 }}
        >
          {props.index === 2 ? "B" : ""}
        </div>
        <div
          className={props.index === 3 ? "cog active" : "cog"}
          style={{ "--i": 3 }}
        >
          {props.index === 3 ? "B" : ""}
        </div>
        <div
          className={props.index === 4 ? "cog active" : "cog"}
          style={{ "--i": 4 }}
        >
          {props.index === 4 ? "B" : ""}
        </div>
        <div
          className={props.index === 5 ? "cog active" : "cog"}
          style={{ "--i": 5 }}
        >
          {props.index === 5 ? "B" : ""}
        </div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button
          onClick={() => props.moveCounterClockwise()}
          id="counterClockwiseBtn"
        >
          Counter clockwise
        </button>
        <button onClick={() => props.moveClockwise()} id="clockwiseBtn">
          Clockwise
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    index: state.wheel,
  };
};

export default connect(mapStateToProps, {
  moveClockwise,
  moveCounterClockwise,
})(Wheel);
