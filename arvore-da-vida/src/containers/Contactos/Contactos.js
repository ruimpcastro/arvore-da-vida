import React, { Component, setState } from "react";
import styles from "./Contactos.module.css";
import Layout from "../../hoc/Layout/Layout";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import ContactosIntro from "../../components/Contactos/ContactosIntro/ContactosIntro";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";
import Spinner from "../../components/UI/Spinner/Spinner";

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
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          backgroundColor: "#2d2b29",
        }}
      >
        <Spinner />
      </div>
    ) : (
      <Layout>
        <Box mt={5}>
          <Container className={styles.container}>
            <Box className={styles.containerBox} mb={5}>
              <Box className={styles.justifyText}>
                <ContactosIntro textBox={styles.textBox} title={styles.title} />
              </Box>
              <Box className={styles.contactBox}>
                <ContactosInfo delay={2} />
                <ContactosForm delay={3} />
              </Box>
            </Box>
          </Container>
          <Container>
            <Box mb={5}>
              <ContactosMap delay={4} />
            </Box>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default Contactos;
