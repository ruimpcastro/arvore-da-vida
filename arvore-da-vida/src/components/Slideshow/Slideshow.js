import React from "react";
import styles from "./Slideshow.module.css";
import { useSpring, animated } from "react-spring";
import Carousel from "react-material-ui-carousel";
import SlideshowItem from "./SlideshowItem/SlideshowItem";
import { BrowserView, MobileView } from "react-device-detect";

import { Box } from "@mui/material";

// IMAGE IMPORTS
import slideshow1 from "../../assets/slideshow/browser/slideshow1.jpg";
import slideshow2 from "../../assets/slideshow/browser/slideshow2.jpg";
import slideshow3 from "../../assets/slideshow/browser/slideshow3.jpg";
import slideshow4 from "../../assets/slideshow/browser/slideshow4.jpg";
import slideshow5 from "../../assets/slideshow/browser/slideshow5.jpg";
import slideshow6 from "../../assets/slideshow/browser/slideshow6.jpg";
import slideshow7 from "../../assets/slideshow/browser/slideshow7.jpg";
import slideshow8 from "../../assets/slideshow/browser/slideshow8.jpg";
import slideshow9 from "../../assets/slideshow/browser/slideshow9.jpg";

import mobile1 from "../../assets/slideshow/mobile/mobile1.jpg";
import mobile2 from "../../assets/slideshow/mobile/mobile2.jpg";
import mobile3 from "../../assets/slideshow/mobile/mobile3.jpg";
import mobile4 from "../../assets/slideshow/mobile/mobile4.jpg";
import mobile5 from "../../assets/slideshow/mobile/mobile5.jpg";
import mobile6 from "../../assets/slideshow/mobile/mobile6.jpg";
import mobile7 from "../../assets/slideshow/mobile/mobile7.jpg";
import mobile8 from "../../assets/slideshow/mobile/mobile8.jpg";
import mobile9 from "../../assets/slideshow/mobile/mobile9.jpg";

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

  const mobileGallery = [
    {
      name: "slideshow1",
      image: mobile1,
    },
    {
      name: "slideshow2",
      image: mobile2,
    },
    {
      name: "slideshow3",
      image: mobile3,
    },
    {
      name: "slideshow4",
      image: mobile4,
    },
    {
      name: "slideshow5",
      image: mobile5,
    },
    {
      name: "slideshow6",
      image: mobile6,
    },
    {
      name: "slideshow7",
      image: mobile7,
    },
    {
      name: "slideshow8",
      image: mobile8,
    },
    {
      name: "slideshow9",
      image: mobile9,
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
          {mobileGallery.map((image, i) => (
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
