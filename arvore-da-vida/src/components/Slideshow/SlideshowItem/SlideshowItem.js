import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import styles from "./SlideshowItem.module.css";
import { BrowserView, MobileView } from "react-device-detect";

const SlideshowItem = (props) => {
  return (
    <div>
      <BrowserView>
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
            style={{
              position: "static",
              top: "0",
              left: "0",
              minWidth: "100%",
            }}
          />
          <Typography variant="body1">{props.description}</Typography>
        </Paper>
      </BrowserView>
      <MobileView>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <img
            src={props.image}
            alt={props.name}
            style={{
              position: "static",
              top: "0",
              left: "0",
              maxWidth: "100%",
            }}
          />
          <Typography variant="body1">{props.description}</Typography>
        </Paper>
      </MobileView>
    </div>
  );
};

export default SlideshowItem;
