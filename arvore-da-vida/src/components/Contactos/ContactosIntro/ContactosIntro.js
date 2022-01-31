import React from "react";
import { useSpring, animated } from "react-spring";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../../../containers/Contactos/Contactos.module.css";

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
        Encontre-nos
      </Typography>
      <div className={styles.LinhaStyle}>
        <div className={styles.Linha}></div>
      </div>
      <Typography variant="body1" style={{ marginTop: "10px", color: "white" }}>
        Entre em contacto connosco para saber mais informação sobre os nossos
        serviços e produtos. <br />
        Esclareça as suas dúvidas e promova a sua saúde.
      </Typography>
    </AnimatedBox>
  );
};

export default ContactosIntro;
