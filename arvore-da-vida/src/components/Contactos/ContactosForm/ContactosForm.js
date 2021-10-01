import React, { useRef } from "react";
import emailjs from "emailjs-com";

import styles from "./ContactosForm.module.css";

import { Box, Button } from "@material-ui/core";
import { Typography, TextField } from "@mui/material";

import SendSharpIcon from "@mui/icons-material/SendSharp";

const ContactosForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "under_Test",
        "template_scp362j",
        form.current,
        "user_MSqtjZ4xkODz8VlOn6nSi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Box p={5} className={styles.container}>
      <Typography variant="h6">Ou envie-nos uma mensagem</Typography>
      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <TextField
          required
          // error={ }
          // helperText={"Empty field"}
          label="Nome"
          variant="standard"
          size="small"
          margin="normal"
          name="from_name"
        />
        <TextField
          required
          label="E-mail"
          type="email"
          variant="standard"
          size="small"
          margin="normal"
          name="from_email"
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
          name="message"
        />
        <Button
          className={styles.button}
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          startIcon={<SendSharpIcon />}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactosForm;
