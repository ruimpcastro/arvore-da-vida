import React, { Component, setState } from "react";
import styles from "./Contactos.module.css";
import Layout from "../../hoc/Layout/Layout";

import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";

class Contactos extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    return this.state.isLoading ? (
      <h1>LOADING</h1>
    ) : (
      <Layout>
        <Box mt={5}>
          <Container className={styles.container}>
            <Box className={styles.containerBox} mb={5}>
              <Box className={styles.justifyText}>
                <Box className={styles.textBox}>
                  <Typography variant="h2" className={styles.title}>
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
