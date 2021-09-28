import React from "react";
import { theme } from "../../MaterialColorTheme/MaterialColorTheme";
import Logo from "../../assets/Logo.jpg";

import { Typography, Box } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

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
        <FacebookIcon fontSize="large" style={{ marginRight: "5px" }} /> |{" "}
        <InstagramIcon fontSize="large" style={{ marginLeft: "5px" }} />
      </Typography>
      <Box mt={1}>
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
