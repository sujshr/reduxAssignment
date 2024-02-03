import React from "react";
import { decreaseLikes, increaseLikes } from "../redux/Actions";
import { connect } from "react-redux";
function Counter(props) {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increaseLikes}>Like</button>
      <button onClick={props.decreaseLikes}>Unlike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseLikes: () => dispatch(increaseLikes()),
    decreaseLikes: () => dispatch(decreaseLikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
