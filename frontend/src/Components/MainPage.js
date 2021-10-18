import React from "react";
import { useHistory } from "react-router";

export default function MainPage(props) {
  const { name } = props;
  const history = useHistory();

  if (name === "") history.push("/");

  return <div>Logged in as {name}</div>;
}
