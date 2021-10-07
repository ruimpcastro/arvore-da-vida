import React, { Component } from "react";
import Layout from "../../hoc/Layout/Layout";
import Servico from "../../components/Servicos/Servico/Servico";

import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";

import servico1 from "../../assets/services/servico1.jpg";
import servico2 from "../../assets/services/servico2.jpg";
import Spinner from "../../components/UI/Spinner/Spinner";

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
          image: servico1,
          title: "Naturopatia",
          contacto: "912345678",
          description:
            "O Dr. Leonardo Pacheco encontra-se na Ilha de São Miguel.",
        },
        {
          id: 4,
          image: servico2,
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
        <Container>
          <Box mt={5} mb={5}>
            <Grid container spacing={2} style={{ display: "flex" }}>
              {this.state.servicos.map((servico) => (
                <Grid item xs={12} sm={6} key={servico.id} zeroMinWidth>
                  <Servico
                    image={servico.image}
                    title={servico.title}
                    contacto={servico.contacto}
                  >
                    {servico.description}
                  </Servico>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Layout>
    );
  }
}

export default Servicos;
