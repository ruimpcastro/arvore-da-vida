import React from "react";
import styles from "./Servico.module.css";
import { useSpring, animated } from "react-spring";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CallSharpIcon from "@mui/icons-material/CallSharp";

const Servico = (props) => {
  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: props.delay * 100,
  });

  const AnimatedCard = animated(Card);

  return (
    <AnimatedCard style={animate} className={styles.servicoCard}>
      <CardMedia
        component="img"
        sx={{ minWidth: 200 }}
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="button" gutterBottom>
          {props.cedula}
        </Typography>
        <Typography variant="body2">{props.children}</Typography>
      </CardContent>

      <CardActions>
        <a
          href={`tel:+351${props.contacto}`}
          style={{ textDecoration: "none" }}
        >
          <Button variant="text" size="small">
            <Typography className={styles.text}>
              <CallSharpIcon className={styles.icons} /> Marque a sua consulta (+351{props.contacto})
            </Typography>
          </Button>
        </a>
        <p className={styles.text}></p>
      </CardActions>
    </AnimatedCard>
  );
};

export default Servico;
