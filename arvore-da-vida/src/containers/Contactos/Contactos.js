import React, { Component } from "react";
import styles from "./Contactos.module.css";

import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactosIntro from "../../components/Contactos/ContactosIntro/ContactosIntro";
import ContactosForm from "../../components/Contactos/ContactosForm/ContactosForm";
import ContactosInfo from "../../components/Contactos/ContactosInfo/ContactosInfo";
import ContactosMap from "../../components/Contactos/ContactosMap/ContactosMap";
import Layout from "../../hoc/Layout/Layout";

import backgroundContact from "../../assets/shop-front.jpeg";

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
      <Spinner />
    ) : (
      <Layout>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            alignContent: "center",
            backgroundImage: `url(${backgroundContact})`,
            backgroundSize: "cover",
            backgroundNoRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <Typography className={styles.company} mt={2} mb={2} variant="h3">
            Centro Holístico Árvore da Vida, Sociedade Unipessoal Lda.
          </Typography>

          <Box
            mb={3}
            style={{
              display: "flex",
              width: "90vw",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              borderColor: "darkgrey",
              borderStyle: "double",
            }}
          >
            <Box className={styles.containerBox}>
              <Box className={styles.justifyText}>
                <ContactosIntro textBox={styles.textBox} title={styles.title} />
              </Box>
              <Container>
                <Box>
                  <ContactosMap delay={4} />
                </Box>
              </Container>
              <Box className={styles.contactBox}>
                <ContactosInfo delay={2} />
                <ContactosForm delay={3} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    );
  }
}

export default Contactos;
