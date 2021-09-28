import React, { Component } from "react";
import Navbar from "../../components/Navigation/Navbar/Navbar";

import servico1 from "../../assets/services/servico1.jpg";
import servico2 from "../../assets/services/servico2.jpg";

import { Container } from "@mui/material";
import Content from "../../components/SobreNos/Content/Content";
import { Box } from "@material-ui/core";

class SobreNos extends Component {
  constructor() {
    super();
    this.state = [
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
    ];
  }
  render() {
    const oddNumber = (index) => {
      if ((index + 1) % 2 === 0) {
        return true;
      } else {
        return false;
      }
    };
    return (
      <div>
        <Navbar />
        <Box mt={5}>
          <Container>
            {this.state.map((item, index) => {
              return (
                <Content
                  key={index}
                  layoutStyle={oddNumber(index)}
                  image={item.image}
                  alt={item.alt}
                  title={item.title}
                  body={item.body}
                />
              );
            })}
          </Container>
        </Box>
      </div>
    );
  }
}
export default SobreNos;
