import React from "react";
import styles from "./ContactosForm.module.css";

import { Box, Button } from "@material-ui/core";
import { Typography, TextField } from "@mui/material";

const ContactosForm = () => {
  return (
    <Box p={5} className={styles.container}>
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
        className={styles.button}
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
