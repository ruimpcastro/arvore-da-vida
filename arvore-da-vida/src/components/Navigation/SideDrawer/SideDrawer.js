import React, { useState } from "react";

import Logo from "../../../assets/Logo.jpg";

import NavigationItem from "../NavigationItem/NavigationItem";
import { Box, Typography, Button, Divider, Drawer } from "@mui/material";

import { theme } from "../../../MaterialColorTheme/MaterialColorTheme";

import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MedicalServicesSharpIcon from "@mui/icons-material/MedicalServicesSharp";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";

// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";

export const SideDrawer = (props) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    props.handleClose();
  };

  const navigation = [
    {
      id: "1",
      to: "/sobrenos",
      exact: true,
      icon: <InfoSharpIcon />,
      label: "Sobre nós",
    },
    {
      id: "2",
      to: "/servicos",
      exact: true,
      icon: <MedicalServicesSharpIcon />,
      label: " Serviços",
    },
    {
      id: "3",
      to: "/contactos",
      exact: true,
      icon: <ImportContactsSharpIcon />,
      label: " Contactos",
    },
  ];

  return (
    <Drawer anchor="left" open={props.open} onClose={handleClose}>
      <div
        style={{ backgroundColor: theme.palette.primary.main, height: "100vh" }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box mt={3} mb={2}>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{ width: "100px", borderRadius: "50px" }}
              />
            </Link>
          </Box>
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            {navigation.map((nav) => {
              return (
                <Box key={nav.id} mb={1}>
                  <Typography variant="button">
                    <NavigationItem to={nav.to} exact={nav.exact}>
                      <Button
                        onClick={handleClose}
                        variant="link"
                        style={{
                          color: theme.palette.secondary.main,
                          padding: "6px 16px",
                        }}
                      >
                        {nav.icon} {nav.label}
                      </Button>
                    </NavigationItem>
                  </Typography>
                </Box>
              );
            })}
          </ul>
        </Box>
      </div>
    </Drawer>
  );
};

export default SideDrawer;
