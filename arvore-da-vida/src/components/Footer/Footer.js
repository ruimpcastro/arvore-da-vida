import React from "react";
import { theme } from "../../MaterialColorTheme/MaterialColorTheme";
import Logo from "../../assets/Logo.jpg";

import { Typography, Box, IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      style={{
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        textAlign: "center",
      }}
      p={3}
    >
      <img
        src={Logo}
        alt="Logo"
        style={{ borderRadius: "128px", width: "128px", marginBottom: "10px" }}
      />
      <Typography
        variant="body1"
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a
          href="https://www.facebook.com/CENTROHOLISTICOARVOREDAVIDA/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <FacebookIcon
              fontSize="large"
              style={{
                marginRight: "5px",
                color: theme.palette.primary.contrastText,
              }}
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
                marginLeft: "5px",
                color: theme.palette.primary.contrastText,
              }}
            />
          </IconButton>
        </a>
      </Typography>
      <Box
        mt={1}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body1"
          style={{
            display: "flex",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Copyright{" "}
          <CopyrightIcon
            fontSize="small"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          />{" "}
          2021, MO
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
