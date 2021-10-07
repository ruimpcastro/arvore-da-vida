import React from "react";
import { useSpring, animated } from "react-spring";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ContactosIntro = (props) => {
  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: props.delay * 100,
  });

  const AnimatedBox = animated(Box);
  return (
    <AnimatedBox style={animate} className={props.textBox}>
      <Typography variant="h2" className={props.title}>
        Não tenha dúvidas. Entre em contacto connosco
      </Typography>
    </AnimatedBox>
  );
};

export default ContactosIntro;
