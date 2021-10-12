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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
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
