import React from "react";
import styles from "./ContactosInfo.module.css";
import { useSpring, animated } from "react-spring";

import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import DialpadSharpIcon from "@mui/icons-material/DialpadSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const ContactosInfo = (props) => {
  const info = {
    empresa: false,
    telefone: "296285239",
    telemovel: false,
    mail: "infoarvoredavida@gmail.com",
  };

  const animate = useSpring({
    from: { opacity: 0, scale: 0.9, y: 100 },
    to: { opacity: 1, scale: 1, y: 0 },
    delay: props.delay * 100,
  });

  const AnimatedBox = animated(Box);

  return (
    <Box>
      <AnimatedBox style={animate} mb={3} className={styles.container}>
        {info.empresa && (
          <Typography variant="h5" gutterBottom style={{ fontWeight: "500" }}>
            {info.empresa}
          </Typography>
        )}

        <Box p={5} className={styles.contactBox}>
          <Typography variant="h6" style={{ color: "white" }}>
            Entre em contacto connosco
          </Typography>
          <Box className={styles.contacts}>
            {info.telefone && (
              <a
                href={`tel:+351${info.telefone}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text">
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      margin: "10px 5px 10px 5px",
                      color: "white",
                    }}
                  >
                    <CallSharpIcon
                      style={{ marginRight: "5px" }}
                      fontSize="medium"
                    />
                    {info.telefone}
                  </Typography>
                </Button>
              </a>
            )}

            {info.telemovel && (
              <a
                href={`tel:+351${info.telemovel}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text">
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      margin: "10px 5px 10px 5px",
                      color: "white",
                    }}
                  >
                    <DialpadSharpIcon style={{ marginRight: "5px" }} />
                    {info.telemovel}
                  </Typography>
                </Button>
              </a>
            )}
            {info.mail && (
              <a
                href={`mailto:${info.mail}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="text" style={{ textTransform: "none" }}>
                  <Typography
                    variant="body1"
                    style={{
                      display: "flex",
                      margin: "10px 5px 10px 5px",
                      color: "white",
                    }}
                  >
                    <EmailSharpIcon style={{ marginRight: "5px" }} />{" "}
                    {info.mail}
                  </Typography>
                </Button>
              </a>
            )}
          </Box>
        </Box>
      </AnimatedBox>
    </Box>
  );
};

export default ContactosInfo;
