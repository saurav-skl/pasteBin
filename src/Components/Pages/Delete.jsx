import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export const Delete = ({ id }) => {
  const history = useHistory();

  const deleteTodo = () => {
    fetch(`/api/${id}`, {
      method: "POST",
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push("/");
      });
  };
  return (
    <div>
      <Button onClick={deleteTodo}>Delete</Button>
    </div>
  );
};
