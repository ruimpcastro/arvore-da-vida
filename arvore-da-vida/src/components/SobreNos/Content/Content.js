import React from "react";
import styles from "./Content.module.css";

import { Box, Container, Typography } from "@material-ui/core";

const Content = (props) => {
  const layoutStyle = props.layoutStyle;
  let layout = (
    <Box className={styles.boxContainer}>
      <Container>
        <Box className={styles.containerBox}>
          <img
            src={props.image}
            alt={props.alt}
            width="50%"
            className={styles.image}
          />
          <Box ml={5} className={styles.textBox}>
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="body1">{props.body}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
  if (layoutStyle === true) {
    layout = (
      <Box className={styles.boxContainer}>
        <Container>
          <Box className={styles.containerBoxReversed}>
            <img
              src={props.image}
              alt={props.alt}
              width="50%"
              className={styles.image}
            />
            <Box mr={5} className={styles.textBox}>
              <Typography variant="h3">{props.title}</Typography>
              <Typography variant="body1">{props.body}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
    return layout;
  }
  return layout;
};

export default Content;
