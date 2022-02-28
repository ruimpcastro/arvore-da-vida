import React, { Component } from "react";
import Servico from "../../components/Servicos/Servico/Servico";
import Spinner from "../../components/UI/Spinner/Spinner";

import { Container, Grid, Typography } from "@mui/material";
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
          name: "Dr. Leonardo Pacheco",
          cedula: "Cédula RNP 2117 20 73. (A.P.E.N.B.) No2.315",
          title: "Naturopatista / Homeopatista",
          contacto: "912345678",
          description:
            "Leonardo Pacheco, nascido na nobre Vila de Água de Pau e oriundo de uma família de pescadores humilde, decidiu aos seus 17 anos emigrar para o Canadá. Ao longo da sua adolescência, andou perdido e sem saber a profissão que queria exercer para o resto da sua vida. Só tinha uma certeza: querer ajudar o próximo. Quando terminou o secundário, decidiu que não iria ficar por ali. Candidatou-se à faculdade Stonebridge Associated Colleges CA e seguiu uma medicina alternativa: naturopatia e homeopatia. Depois de se formar, sentiu que precisava satisfazer as necessidades dos seus fiéis pacientes, conectando-se espiritualmente com eles, e decidiu que iria percorrer os vários territórios de uma ponta à outra: Canadá, Estados Unidos da América, Bermudas, Portugal continental e os Açores. Durante estas viagens, decidiu fazer parte até aos dias de hoje da World Organization of Natural Medicine, uma organização internacional humanitária não governamental, política e religiosamente neutra. Além desta, faz parte de mais duas: Board of Natural Medicine Doctors and Practitioners e da Asociación Profesional Española de Naturopatia y Bioterapia. Não satisfeito, decidiu perceber um pouco mais sobre Fitness e Nutrição, e entrou num programa sobre este tema na International Correspondence Schools (ICS CANADA).",
        },
        {
          id: 1,
          image: servico2,
          name: "Dr. Marcio Domingues",
          cedula: "Cédula Profissional Osteopatia No C-0031111",
          title: "Osteopatista",
          contacto: "912345678",
          description:
            "Márcio Luís Pinto Domingues, natural de Águeda, é doutorado em Ciências do Desporto e Osteopata com especialização em Osteopatia aplicada ao Desporto e Osteopatia Neurológica. O seu percurso inicial foi diversificado na área do desporto com interesses nos distúrbios musculares. Atualmente, exerce osteopatia em exclusividade em várias clínicas e docência na Licenciatura em Osteopatia na Escola Superior de Saúde Norte em Oliveira de Azeméis (ESSN - Oliveira de azemeis). Além disso, é coordenador de Osteopatia na ESSN Oliveira de Azeméis. Em 2020, aceitou em fazer parte da nossa equipa enquanto osteopata.",
        },
        {
          id: 2,
          image: servico3,
          name: "Dra. Patricia Simas",
          cedula: "CP:2962N",
          title: "Nutricionista",
          contacto: "912345678",
          description:
            "Patrícia Simas, licenciada em Ciências da Nutrição e Alimentação pela Universidade do Porto desde 2015 e trabalha a tempo inteiro na área da Restauração Coletiva. Em part-time faz parte da equipa do Centro Holístico Árvore da Vida e presta os seus serviços na área da Nutrição. Também tem uma certificação de Especialização em Nutrição Desportiva pelo que presta serviços também neste contexto.",
        },
        {
          id: 4,
          image: servico4,
          name: "Dr. Shixong Sun",
          cedula: "0501025",
          title: "Acupunturista",
          contacto: "912345678",
          description:
            "(ainda não temos qualquer tipo de informação)",
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
            <Typography variant="h3">Os nossos serviços</Typography>
              <Grid container spacing={2} style={{ display: "flex" }}>
                {this.state.servicos.map((servico) => (
                  <Grid item xs={12} key={servico.id} zeroMinWidth>
                    <Servico
                      image={servico.image}
                      name={servico.name}
                      cedula={servico.cedula}
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
