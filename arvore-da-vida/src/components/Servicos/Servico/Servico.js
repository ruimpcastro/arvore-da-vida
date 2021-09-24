import React from "react";

import { Card } from "@mui/material";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import CallSharpIcon from "@mui/icons-material/CallSharp";

const Servico = (props) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        sx={{ minWidth: 200, maxWidth: "30%" }}
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
            <Typography style={{ display: "flex" }}>
              <CallSharpIcon style={{ marginRight: "5px" }} /> Marque a sua
              consulta
            </Typography>
          </Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default Servico;
