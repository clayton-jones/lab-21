import React from "react";

export default function Button(props) {
  return (
    <div className={`${props.arithmatic} button`} onClick={props.onClick}>
      {props.arithmatic}
    </div>
  );
}
