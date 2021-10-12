import React, { Component } from "react";

import servico1 from "../../assets/services/servico1.jpg";
import servico2 from "../../assets/services/servico2.jpg";

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
          alt: "servico1",
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum. Amet tellus cras adipiscing enim eu turpis egestas. Tortor at auctor urna nunc id cursus metus aliquam.",
        },
        {
          image: servico2,
          alt: "servico2",
          title: "Lorem Ipsum Dolor",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.",
        },
        {
          image: servico1,
          alt: "servico1",
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum. Amet tellus cras adipiscing enim eu turpis egestas. Tortor at auctor urna nunc id cursus metus aliquam.",
        },
        {
          image: servico2,
          alt: "servico2",
          title: "Lorem Ipsum Dolor",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus.",
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
            {this.state.sobrenos.map((item, index) => {
              return (
                <Content
                  key={index}
                  layoutStyle={oddNumber(index)}
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
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
