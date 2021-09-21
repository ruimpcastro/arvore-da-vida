import React from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../../../assets/Logo.jpg";

// MATERIAL IMPORTS
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MedicalServicesSharpIcon from "@mui/icons-material/MedicalServicesSharp";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import Button from "@mui/material/Button";
import { theme } from "../../../MaterialColorTheme/MaterialColorTheme";

// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    {
      id: "1",
      to: "/sobrenos",
      exact: true,
      icon: <InfoSharpIcon sx={{ marginRight: "5px" }} />,
      label: "Sobre nós",
    },
    {
      id: "2",
      to: "/servicos",
      exact: true,
      icon: <MedicalServicesSharpIcon sx={{ marginRight: "5px" }} />,
      label: " Serviços",
    },
    {
      id: "3",
      to: "/contactos",
      exact: true,
      icon: <ImportContactsSharpIcon sx={{ marginRight: "5px" }} />,
      label: " Contactos",
    },
  ];
  return (
    <Box sx={{ flexDirection: "row", width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
          flexDirection: "row",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            justifyContent: "space-between",
            flexDirection: "row",
            padding: "0 !important",
            margin: "0.5% 2% !important",
          }}
        >
          <Box>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{
                  height: "64px",
                  borderRadius: "64px",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)",
                }}
              />
            </Link>
            <Typography variant="body1">
              Sociedade Unipessoal Lda
            </Typography>
          </Box>
          <Box>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                margin: "0",
                padding: "0",
              }}
            >
              {navigation.map((nav) => {
                return (
                  <Typography key={nav.id} variant="button">
                    <NavigationItem to={nav.to} exact={nav.exact}>
                      <Button variant="link">
                        {nav.icon} {nav.label}
                      </Button>
                    </NavigationItem>
                  </Typography>
                );
              })}
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
