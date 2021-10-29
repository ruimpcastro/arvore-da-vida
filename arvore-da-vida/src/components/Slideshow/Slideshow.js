import React from "react";
import styles from "./Slideshow.module.css";
import { useSpring, animated } from "react-spring";
import Carousel from "react-material-ui-carousel";
import SlideshowItem from "./SlideshowItem/SlideshowItem";

import { Box } from "@mui/material";

// IMAGE IMPORTS
import produto1 from "../../assets/products/produto1.jpg";
import produto2 from "../../assets/products/produto2.jpg";
import produto3 from "../../assets/products/produto3.jpg";
import produto4 from "../../assets/products/example.jpeg";

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
    {
      name: "produto4",
      image: produto4,
      description: "Lorem Ipsum Dolor",
    },
  ];

  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: 200,
  });

  const AnimatedBox = animated(Box);

  return (
    <AnimatedBox style={animate} className={styles.container}>
      <Carousel animation="slide" indicators="false">
        {gallery.map((image, i) => (
          <SlideshowItem
            image={image.image}
            name={image.name}
            description={image.description}
            key={i}
          />
        ))}
      </Carousel>
    </AnimatedBox>
  );
};

export default Slideshow;
