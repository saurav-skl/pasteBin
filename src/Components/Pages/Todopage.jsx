import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form.js";
import { Container, Grid, Paper } from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
  },
};

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
  }, [addTodo]);

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
    fetch("http://127.0.0.1:5000/")
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
      <Form
        item={item}
        onInputChange={onInputChange}
        handleSubmit={handleSubmit}
      />
      <Grid item xs={12}>
        <Card listtodos={todo} />
      </Grid>
      {/* // </Grid> */}
    </Container>
  );
};

export default Todopage;
