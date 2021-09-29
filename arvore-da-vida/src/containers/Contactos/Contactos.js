import React, { Component } from "react";
import styles from "./Contactos.module.css";
import Layout from "../../hoc/Layout/Layout";

import { Box, Container, Typography } from "@material-ui/core";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";

class Contactos extends Component {
  render() {
    return (
      <Layout>
        <Box mt={5}>
          <Container>
            <Box className={styles.containerBox} mb={5}>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Box className={styles.textBox}>
                  <Typography variant="h2">
                    Não tenha dúvidas. Entre em contacto connosco
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.contactBox}>
                <ContactosInfo />
                <ContactosForm />
              </Box>
            </Box>
          </Container>
          <Container>
            <Box mb={5}>
              <ContactosMap />
            </Box>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default Contactos;
