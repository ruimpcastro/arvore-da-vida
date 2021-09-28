import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./SlideshowItem.module.css";

const SlideshowItem = (props) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: props.image,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100",
      }}
    >
      <img
        src={props.image}
        alt={props.name}
        className={styles.image}
      />
      <Typography variant="body1">{props.description}</Typography>
    </Paper>
  );
};

export default SlideshowItem;
