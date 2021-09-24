import React from "react";

import { Box, Button } from "@material-ui/core";
import { Typography, TextField, FormGroup } from "@mui/material";

const ContactosForm = () => {
  return (
    <Box
      p={5}
      mt={3}
      style={{
        display: "flex",
        flexDirection: "column",
        boxShadow:
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h6">Ou envie-nos uma mensagem</Typography>
      <TextField
        required
        label="Nome"
        variant="standard"
        size="small"
        margin="normal"
      />
      <TextField
        required
        label="E-mail"
        type="email"
        variant="standard"
        size="small"
        margin="normal"
      />
      <TextField
        required
        label="Mensagem"
        type="text"
        variant="standard"
        multiline
        rows={3}
        size="small"
        margin="normal"
      />
      <Button
        style={{ marginTop: "20px" }}
        color="primary"
        variant="contained"
        size="large"
        disabled
      >
        Submit
      </Button>
    </Box>
  );
};

export default ContactosForm;
