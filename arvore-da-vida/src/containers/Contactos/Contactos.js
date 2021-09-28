import React, { Component } from "react";
import styles from "./Contactos.module.css";

import { Box, Container, Typography } from "@material-ui/core";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";

class Contactos extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Box mt={5}>
          <Container>
            <Box className={styles.containerBox} mb={5}>
              <Box className={styles.textBox}>
                <Typography variant="h2">
                  Não tenha dúvidas. Entre em contacto connosco
                </Typography>
              </Box>
              <Box className={styles.contactBox}>
                <ContactosInfo />
                <ContactosForm />
              </Box>
            </Box>
          </Container>
          <Container>
            <ContactosMap />
          </Container>
        </Box>
      </div>
    );
  }
}

export default Contactos;
