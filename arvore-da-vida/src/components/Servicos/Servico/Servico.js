import React from "react";
import styles from "./Servico.module.css";

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
  return (
    <Card className={styles.servicoCard}>
      <CardMedia
        component="img"
        sx={{ minWidth: 200 }}
        image={props.image}
        alt={props.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {props.title}
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
              <CallSharpIcon className={styles.icons} /> Marque a sua consulta
            </Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default Servico;
