import React from "react";
import styles from "./ContactosMap.module.css";
import { useSpring, animated } from "react-spring";

const ContactosMap = (props) => {
  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: props.delay * 100,
  });

  return (
    <animated.iframe
      style={animate}
      title="Location"
      width="100%"
      height="600px"
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=R.%20de%20S%C3%A3o%20Jo%C3%A3o%2046,%20Ponta%20Delgada&t=&z=15&ie=UTF8&iwloc=&output=embed"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      className={styles.mapa}
    />
  );
};

export default ContactosMap;
