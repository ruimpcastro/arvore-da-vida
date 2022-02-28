import React from "react";
import styles from "./Slideshow.module.css";
import { useSpring, animated } from "react-spring";
import Carousel from "react-material-ui-carousel";
import SlideshowItem from "./SlideshowItem/SlideshowItem";
import { BrowserView, MobileView } from "react-device-detect";

import { Box } from "@mui/material";

// IMAGE IMPORTS
import slideshow1 from "../../assets/slideshow/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow/slideshow4.jpg";
import slideshow5 from "../../assets/slideshow/slideshow5.jpg";
import slideshow6 from "../../assets/slideshow/slideshow6.jpg";
import slideshow7 from "../../assets/slideshow/slideshow7.jpg";
import slideshow8 from "../../assets/slideshow/slideshow8.jpg";
import slideshow9 from "../../assets/slideshow/slideshow9.jpg";

const Slideshow = () => {
  const gallery = [
    {
      name: "slideshow1",
      image: slideshow1,
    },
    {
      name: "slideshow2",
      image: slideshow2,
    },
    {
      name: "slideshow3",
      image: slideshow3,
    },
    {
      name: "slideshow4",
      image: slideshow4,
    },
    {
      name: "slideshow5",
      image: slideshow5,
    },
    {
      name: "slideshow6",
      image: slideshow6,
    },
    {
      name: "slideshow7",
      image: slideshow7,
    },
    {
      name: "slideshow8",
      image: slideshow8,
    },
    {
      name: "slideshow9",
      image: slideshow9,
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
      <BrowserView>
        <Carousel indicators="false" stopAutoPlayOnHover={false}>
          {gallery.map((image, i) => (
            <SlideshowItem
              image={image.image}
              name={image.name}
              key={i}
            />
          ))}
        </Carousel>
      </BrowserView>
      <MobileView>
        <Carousel
          animation="slide"
          indicators="false"
          stopAutoPlayOnHover={false}
          indicators={false}
        >
          {gallery.map((image, i) => (
            <SlideshowItem
              image={image.image}
              name={image.name}
              description={image.description}
              key={i}
            />
          ))}
        </Carousel>
      </MobileView>
    </AnimatedBox>
  );
};

export default Slideshow;
