import React from "react";
import Carousel from "react-material-ui-carousel";
import SlideshowItem from "./SlideshowItem/SlideshowItem";

// MATERIAL IMPORTS
import Container from "@mui/material/Container";

// IMAGE IMPORTS
import produto1 from "../../../assets/products/produto1.jpg";
import produto2 from "../../../assets/products/produto2.jpg";
import produto3 from "../../../assets/products/produto3.jpg";

const Slideshow = () => {
  const gallery = [
    {
      name: "produto1",
      image: produto1,
      description: "Lorem",
    },
    {
      name: "produto2",
      image: produto2,
      description: "Lorem Ipsum",
    },
    {
      name: "produto3",
      image: produto3,
      description: "Lorem Ipsum Dolor",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Carousel interval="3000" autoPlay={false}>
        {gallery.map((image, i) => (
          <SlideshowItem
            image={image.image}
            name={image.name}
            description={image.description}
            key={i}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
