import React from "react";
import styles from "./ContactosInfo.module.css";
import { Box, Button, Typography } from "@material-ui/core";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import DialpadSharpIcon from "@mui/icons-material/DialpadSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const ContactosInfo = () => {
  const info = {
    empresa: "Centro Holístico Árvore da Vida, Sociedade Unipessoal Lda.",
    telefone: "296285239",
    telemovel: false,
    mail: "infoarvoredavida@gmail.com",
  };
  return (
    <Box>
      <Box mb={3} className={styles.container}>
        {info.empresa && (
          <Typography variant="h5" gutterBottom style={{ fontWeight: "500" }}>
            {info.empresa}
          </Typography>
        )}

        <Box p={5} className={styles.contactBox}>
          <Typography variant="h6">Entre em contacto connosco</Typography>
          <Box className={styles.contacts}>
            {info.telefone && (
              <a
                href={`tel:+351${info.telefone}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text">
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 5px 10px 5px" }}
                  >
                    <CallSharpIcon
                      style={{ marginRight: "5px" }}
                      fontSize="medium"
                    />
                    {info.telefone}
                  </Typography>
                </Button>
              </a>
            )}

            {info.telemovel && (
              <a
                href={`tel:+351${info.telemovel}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text">
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 5px 10px 5px" }}
                  >
                    <DialpadSharpIcon style={{ marginRight: "5px" }} />
                    {info.telemovel}
                  </Typography>
                </Button>
              </a>
            )}
            {info.mail && (
              <a
                href={`mailto:${info.mail}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text" style={{ textTransform: "none" }}>
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 5px 10px 5px" }}
                  >
                    <EmailSharpIcon style={{ marginRight: "5px" }} />{" "}
                    {info.mail}
                  </Typography>
                </Button>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactosInfo;
