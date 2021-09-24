import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import Servico from "./Servico/Servico";

import { Container, Grid } from "@material-ui/core";

import servico1 from "../../assets/services/servico1.jpg";

const Servicos = (strVal) => {
  const servicos = [
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
      image: servico1,
      title: "Naturopatia",
      contacto: "912345678",
      description: "O Dr. Leonardo Pacheco",
    },
    {
      id: 2,
      image: servico1,
      title: "Naturopatia",
      contacto: "912345678",
      description: "O Dr. Leonardo Pacheco encontra-se na Ilha de São Miguel.",
    },
    {
      id: 4,
      image: servico1,
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
  ];
  return (
    <div>
      <Navbar />
      <Container>
        <h1>Servicos</h1>
        <Grid container spacing={2} rowSpacing={3} style={{ display: "flex" }}>
          {servicos.map((servico) => (
            <Grid item xs={4} key={servico.id} zeroMinWidth>
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
      </Container>
    </div>
  );
};

export default Servicos;
