import React from "react";
import styles from "./Content.module.css";

import { useSpring, animated } from "react-spring";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Content = (props) => {
  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: props.delay * 100,
  });

  const AnimatedBox = animated(Box);
  const layoutStyle = props.layoutStyle;
  let layout = (
    <Box className={styles.boxContainer}>
      <Container>
        <AnimatedBox className={styles.containerBox} style={animate}>
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
        </AnimatedBox>
      </Container>
    </Box>
  );
  if (layoutStyle === true) {
    layout = (
      <Box className={styles.boxContainer}>
        <Container>
          <AnimatedBox className={styles.containerBoxReversed} style={animate}>
            <img
              src={props.image}
              alt={props.alt}
              width="50%"
              className={styles.image}
            />
            <Box className={styles.textBox}>
              <Typography variant="h3">{props.title}</Typography>
              <Typography variant="body1">{props.body}</Typography>
            </Box>
          </AnimatedBox>
        </Container>
      </Box>
    );
    return layout;
  }
  return layout;
};

export default Content;
