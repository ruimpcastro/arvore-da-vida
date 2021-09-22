import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const SlideshowItem = (props) => {
  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={props.image} alt={props.name} style={{ maxHeight: "500px" }} />
      <Typography variant="body1">{props.description}</Typography>
    </Paper>
  );
};

export default SlideshowItem;
