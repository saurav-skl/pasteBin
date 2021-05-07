import { Divider } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Delete } from "./Delete";

const Show = () => {
  const { id } = useParams();
  const [todo, settodo] = useState([]);

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => settodo(data));
  }, [id]);

  return (
    <>
      {todo.length > 0 &&
        todo.map((data) => <div key={data.id}>{data.content}</div>)}
      <Delete id={id} />
      <Divider />
      <Link to="/">Back to todo</Link>
    </>
  );
};

export default Show;
