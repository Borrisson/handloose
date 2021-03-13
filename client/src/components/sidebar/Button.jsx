import React from "react";

export default function Button(props) {
  return <a {...props}>{props.label}</a>;
}
Button.defaultProps = {
  onClick: undefined,
};
