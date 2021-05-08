import React, { useState } from "react";
import { TextField, Button, Grid, Input, Paper } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { motion } from "framer-motion";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
  },
};

const Form = ({ item, onInputChange, handleSubmit }) => {
  return (
    <Paper style={styles.Paper}>
      {/* <Grid item > */}
      <Input
        variant="filled"
        color="primary"
        value={item}
        style={{ width: "80%", marginRight: "10px" }}
        onChange={(e) => onInputChange(e.target.value)}
      />
      {/* </Grid>
          <Grid item> */}

      <Button
        variant="contained"
        color="primary"
        style={{ width: "10%" }}
        onClick={() => handleSubmit()}
        // animate
      >
        <AddIcon />
      </Button>

      {/* </Grid> */}
    </Paper>
  );
};

export default Form;
