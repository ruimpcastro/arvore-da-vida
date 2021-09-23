import React from "react";

import { Box, Button } from "@material-ui/core";
import { TextField, FormGroup } from "@mui/material";

const ContactosForm = () => {
  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <TextField
        required
        label="Nome"
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        required
        label="E-mail"
        type="email"
        variant="outlined"
        size="small"
        margin="normal"
      />
      <TextField
        required
        label="Mensagem"
        type="text"
        variant="outlined"
        multiline
        rows={3}
        size="small"
        margin="normal"
      />
      <Button color="primary" variant="contained" disabled>
        Submit
      </Button>
    </Box>
  );
};

export default ContactosForm;
