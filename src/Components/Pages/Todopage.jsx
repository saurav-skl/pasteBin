import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form.js";
import { Container, Grid } from "@material-ui/core";

const Todopage = () => {
  const [todo, settodo] = useState([]);
  const [addTodo, setaddTodo] = useState("");
  const [item, setitem] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => settodo(data));
      console.log(todo);
    // console.log(item);
  }, []);
  useEffect(() => {
    handleFormSubmit();
  }, [addTodo])

  const handleFormSubmit = async () => {
    console.log(addTodo);
    if (addTodo === "") return;
    await fetch("http://127.0.0.1:5000/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((mess) => console.log(mess));
    getLatestTodos();
  };

  const getLatestTodos = () => {
    fetch("http://127.0.0.1:5000/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => settodo(data));
  };

  const onInputChange = (event) => {
    setitem(event);
  };

  const handleSubmit = () => {
    setaddTodo(item);
    setitem("");
  };

  return (
    <Container>
      <Form item={item} onInputChange={onInputChange} handleSubmit={handleSubmit}/>
      <Card listtodos={todo} />
      {/* // </Grid> */}
    </Container>
  );
};

export default Todopage;
