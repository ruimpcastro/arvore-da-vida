import React, { Component } from "react";
import Servico from "../../components/Servicos/Servico/Servico";
import Spinner from "../../components/UI/Spinner/Spinner";

import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Layout from "../../hoc/Layout/Layout";

import servico1 from "../../assets/sobrenos/leonardoPacheco.jpg";
import servico2 from "../../assets/sobrenos/marcioDomingues.jpg";
import servico3 from "../../assets/sobrenos/patriciaSimas.jpg";
import servico4 from "../../assets/sobrenos/shixongSun.jpg";

class Servicos extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      servicos: [
        {
          id: 0,
          image: servico1,
          title: "Naturopatia",
          contacto: "912345678",
          description:
            "O Dr. Leonardo Pacheco encontra-se na Ilha de São Miguel e continua a dar consultas no nosso Centro.",
        },
        {
          id: 1,
          image: servico2,
          title: "Naturopatia",
          contacto: "912345678",
          description: "O Dr. Leonardo Pacheco",
        },
        {
          id: 2,
          image: servico3,
          title: "Naturopatia",
          contacto: "912345678",
          description:
            "O Dr. Leonardo Pacheco encontra-se na Ilha de São Miguel.",
        },
        {
          id: 4,
          image: servico4,
          title: "Naturopatia",
          contacto: "912345678",
          description:
            "O Dr. Leonardo Pacheco encontra-se na Ilha de São Miguel e continua a dar consultas no nosso Centro.",
        },
        {
          id: 5,
          image: servico1,
          title: "Naturopatia",
          contacto: "912345678",
          description: "O Dr. Leonardo Pacheco",
        },
      ],
    };
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
        <Box>
          <Container>
            <Box mt={5} mb={5}>
              <Grid container spacing={2} style={{ display: "flex" }}>
                {this.state.servicos.map((servico) => (
                  <Grid item xs={12} sm={6} key={servico.id} zeroMinWidth>
                    <Servico
                      image={servico.image}
                      title={servico.title}
                      contacto={servico.contacto}
                      delay={servico.id}
                    >
                      {servico.description}
                    </Servico>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Layout>
    );
  }
}

export default Servicos;
