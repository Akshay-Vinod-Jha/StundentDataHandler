import React from "react";

function SimpleButton(props) {
  return (
    <button
      className={" " + props.className}
      onClick={props.isEvent ? props.onClick : () => {}}
    >
      {props.children}
    </button>
  );
}

export default SimpleButton;
