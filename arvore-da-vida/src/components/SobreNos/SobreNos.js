import React, { useState } from "react";
import Navbar from "../Navigation/Navbar/Navbar";

import { Container } from "@mui/material";

const SobreNos = () => {
  const [layout, setLayout] = useState(1);
  const content = [
    {
      image: "#",
      alt: "image",
      title: "Lorem Ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam nulla porttitor massa id neque aliquam vestibulum. Amet tellus cras adipiscing enim eu turpis egestas. Tortor at auctor urna nunc id cursus metus aliquam.",
    },
  ];
  return (
    <div>
      <Navbar />
      <h1>Sobre nós</h1>
      <Container></Container>
    </div>
  );
};

export default SobreNos;
