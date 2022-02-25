import React, { Component } from "react";

import servico1 from "../../assets/sobrenos/leonardoPacheco.jpg";
import servico2 from "../../assets/sobrenos/marcioDomingues.jpg";
import servico3 from "../../assets/sobrenos/patriciaSimas.jpg";
import servico4 from "../../assets/sobrenos/shixongSun.jpg";

import { Container } from "@mui/material";
import Content from "../../components/SobreNos/Content/Content";
import Box from "@mui/material/Box";
import Spinner from "../../components/UI/Spinner/Spinner";
import Layout from "../../hoc/Layout/Layout";

class SobreNos extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      sobrenos: [
        {
          image: servico1,
          alt: "Dr. Leonardo Pacheco",
          title: "Dr. Leonardo Pacheco - NATUROPATA / HOMEOPATA",
          cedula: "Cédula RNP 2117 20 73. (A.P.E.N.B.) No2.315",
          body: "Leonardo Pacheco, nascido na nobre Vila de Água de Pau e oriundo de uma família de pescadores humilde, decidiu aos seus 17 anos emigrar para o Canadá. Ao longo da sua adolescência, andou perdido e sem saber a profissão que queria exercer para o resto da sua vida. Só tinha uma certeza: querer ajudar o próximo. Quando terminou o secundário, decidiu que não iria ficar por ali. Candidatou-se à faculdade Stonebridge Associated Colleges CA e seguiu uma medicina alternativa: naturopatia e homeopatia.Depois de se formar, sentiu que precisava satisfazer as necessidades dos seus fiéis pacientes, conectando-se espiritualmente com eles, e decidiu que iria percorrer os vários territórios de uma ponta à outra: Canadá, Estados Unidos da América, Bermudas, Portugal continental e os Açores. Durante estas viagens, decidiu fazer parte até aos dias de hoje da World Organization of Natural Medicine, uma organização internacional humanitária não governamental, política e religiosamente neutra. Além desta, faz parte de mais duas: Board of Natural Medicine Doctors and Practitioners e da Asociación Profesional Española de Naturopatia y Bioterapia.Não satisfeito, decidiu perceber um pouco mais sobre Fitness e Nutrição, e entrou num programa sobre este tema na International Correspondence Schools (ICS CANADA). Em 2018, decidiu que iria frequentar mais um curso de quatro anos. Frequentou um curso superior com o maior aproveitamento no El Instituto Superior de Naturopatia, em Espanha. Em 2020, aceitou de braços abertos em ser o Diretor Cliníco do Centro Holístico Árvore da Vida. É o responsável pela criação dos 16 suplementos da marca própria “Árvore da Vida”.",
        },
        {
          image: servico2,
          alt: "Dr. Márcio Domingues",
          title: "Dr. Márcio Domingues – OSTEOPATA",
          cedula: "Cédula Profissional Osteopatia No C-0031111",
          body: "Márcio Luís Pinto Domingues, natural de Águeda, é doutorado em Ciências do Desporto e Osteopata com especialização em Osteopatia aplicada ao Desporto e Osteopatia Neurológica. O seu percurso inicial foi diversificado na área do desporto com interesses nos distúrbios musculares. Atualmente, exerce osteopatia em exclusividade em várias clínicas e docência na Licenciatura em Osteopatia na Escola Superior de Saúde Norte em Oliveira de Azeméis (ESSN - Oliveira de azemeis). Além disso, é coordenador de Osteopatia na ESSN Oliveira de Azeméis. Em 2020, aceitou em fazer parte da nossa equipa enquanto osteopata.",
        },
        {
          image: servico3,
          alt: "Dra. Patrícia Simas",
          title: "Dra. Patrícia Simas – Nutricionista",
          cedula: "CP:2962N",
          body: "Patrícia Simas, licenciada em Ciências da Nutrição e Alimentação pela Universidade do Porto desde 2015 e trabalha a tempo inteiro na área da Restauração Coletiva. Em part-time faz parte da equipa do Centro Holístico Árvore da Vida e presta os seus serviços na área da Nutrição. Também tem uma certificação de Especialização em Nutrição Desportiva pelo que presta serviços também neste contexto.",
        },
        {
          image: servico4,
          alt: "Dr. Shixong Sun",
          title: "Dr. Shixong Sun – Medicina Chinesa / Acupuntura",
          cedula: "0501025",
          body: "(ainda não temos qualquer tipo de informação)",
        },
      ],
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    const oddNumber = (index) => {
      if ((index + 1) % 2 === 0) {
        return true;
      } else {
        return false;
      }
    };
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
          <Container>
            <h3>Sobre Nós</h3>
            <p>O Centro Holístico Árvore da Vida, Sociedade Unipessoal Lda nasceu na necessidade de promover a saúde e o bem-estar de forma alternativa. O nosso espaço é gerido pelo apreciado Dr. Leonardo Pacheco que aceitou de braços abertos o desafio de ser o Diretor Cliníco. Desde março de 2020 que apostamos na evolução e na comercialização de um conjunto amplo de suplementos (nacionais e importados) naturais, dietéticos, homeopáticos e ervas medicinais.</p>
            <p>Oferecemos um atendimento especializado e personalizado para garantir aos nossos clientes e pacientes um serviço de qualidade, excelência e com a máxima confiança.</p>
            <p>Dispomos consultas de naturopatia, homeopatia, osteopatia, nutrição, life coaching e acupuntura em gabinetes devidamente preparados e equipados para receber com profissionalismo e conforto em quem confia em nós.</p>
            <p>A verdadeira felicidade está no equilíbrio entre o corpo, mente e espírito.</p>

          </Container>
          <Container>
            {this.state.sobrenos.map((item, index) => {
              return (
                <Content
                  key={index}
                  layoutStyle={oddNumber(index)}
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  cedula={item.cedula}
                  body={item.body}
                  delay={index}
                />
              );
            })}
          </Container>
        </Box>
      </Layout>
    );
  }
}
export default SobreNos;
