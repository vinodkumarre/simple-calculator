/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

function Buttons(props) {
  return (
    <button
      type="button"
      className={props.className}
      value={props.value}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
export default Buttons;
