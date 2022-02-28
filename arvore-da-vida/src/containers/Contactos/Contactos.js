import React, { Component } from "react";
import styles from "./Contactos.module.css";

import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactosIntro from "../../components/Contactos/ContactosIntro/ContactosIntro";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";
import Layout from "../../hoc/Layout/Layout";

import fachada2 from "../../assets/sobrenos/fachada/fachada2.jpg";

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
            <Box
              className={styles.containerBox}
              mb={5}
              style={{
                backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.9)), url(" + fachada2 + ")",
                borderRadius: "4px",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
            >
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
