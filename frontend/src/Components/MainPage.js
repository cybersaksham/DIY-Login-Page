import React from "react";

export default function MainPage(props) {
  const { name } = props;

  return <div>Logged in as {name}</div>;
}
