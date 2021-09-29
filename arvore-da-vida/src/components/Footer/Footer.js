import React from "react";
import styles from "./Footer.module.css";
import { theme } from "../../MaterialColorTheme/MaterialColorTheme";
import Logo from "../../assets/Logo.jpg";

import { Typography, Box, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
      }}
      className={styles.box}
      p={3}
    >
      <img src={Logo} alt="Logo" className={styles.image} />
      <Typography variant="body1" className={styles.text}>
        <a
          href="https://www.facebook.com/CENTROHOLISTICOARVOREDAVIDA/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <FacebookIcon
              fontSize="large"
              style={{
                color: theme.palette.primary.contrastText,
              }}
              className={styles.icons}
            />
          </IconButton>
        </a>{" "}
        |{" "}
        <a
          href="https://www.instagram.com/centroarvoredavida/?fbclid=IwAR0N90Rwvwit9XYb63z7PpwAVoxiCn8U1bZdywd92CpqY03TstXx_y6GzSg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <InstagramIcon
              fontSize="large"
              style={{
                color: theme.palette.primary.contrastText,
              }}
              className={styles.icons}
            />
          </IconButton>
        </a>
      </Typography>
      <Box mt={1} className={styles.copyrightBox}>
        <Typography variant="body1" className={styles.copyrightText}>
          Copyright{" "}
          <CopyrightIcon fontSize="small" className={styles.copyright} /> 2021,
          MO
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
