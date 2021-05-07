import React, { useState } from "react";
import { TextField, Button, Grid, Input } from "@material-ui/core";

const Form = ({ item, onInputChange, handleSubmit }) => {
  return (
    <Grid item xs={12} justify="center" direction="row">
      <Grid item>
        <Input
          variant="filled"
          color="primary"
          value={item}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
