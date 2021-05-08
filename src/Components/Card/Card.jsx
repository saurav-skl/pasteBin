import React from "react";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
import { motion } from "framer-motion";

const styles = {
  Paper: {
    padding: 20,
    margin: "auto",
    textAlign: "center",
    width: 500,
    margin: "5px",
  },
};

const Card = ({ listtodos }) => {
  return (
    <div>
      <Grid container>
        {listtodos.map((data) => {
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <Link to={`/api/${data.id}`}>
                <Paper style={styles.Paper}>
                  <ul key={data.id}>
                    <li>{data.content}</li>
                  </ul>
                </Paper>
              </Link>
            </motion.div>
          );
        })}
      </Grid>
    </div>
  );
};

export default Card;
