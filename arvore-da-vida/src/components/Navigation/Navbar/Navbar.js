import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useSpring, animated } from "react-spring";

import NavigationItem from "../NavigationItem/NavigationItem";
import Logo from "../../../assets/Logo.jpg";
import { BrowserView, MobileView } from "react-device-detect";

// MATERIAL IMPORTS
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  Typography,
} from "@mui/material";

import InfoSharpIcon from "@mui/icons-material/InfoSharp";
import MedicalServicesSharpIcon from "@mui/icons-material/MedicalServicesSharp";
import ImportContactsSharpIcon from "@mui/icons-material/ImportContactsSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";

import { theme } from "../../../MaterialColorTheme/MaterialColorTheme";

// REACT-ROUTER-DOM IMPORTS
import { Link } from "react-router-dom";
import SideDrawer from "../SideDrawer/SideDrawer";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigation = [
    {
      id: "1",
      to: "/sobrenos",
      exact: true,
      icon: <InfoSharpIcon className={styles.icons} />,
      label: "Sobre nós",
    },
    {
      id: "2",
      to: "/servicos",
      exact: true,
      icon: <MedicalServicesSharpIcon className={styles.icons} />,
      label: " Serviços",
    },
    {
      id: "3",
      to: "/contactos",
      exact: true,
      icon: <ImportContactsSharpIcon className={styles.icons} />,
      label: " Contactos",
    },
  ];

  const animate = useSpring({
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
    delay: 100,
  });

  const AnimatedBox = animated(Box);

  return (
    <Box className={styles.box}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.main,
          flexDirection: "row",
        }}
      >
        <Toolbar className={styles.toolbar}>
          <Box>
            <Link to="/">
              <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>
          </Box>
          <Box>
            <BrowserView>
              <ul className={styles.unorderedList}>
                {navigation.map((nav) => (
                  <Typography key={nav.id} variant="button">
                    <NavigationItem to={nav.to} exact={nav.exact}>
                      <Button
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
                ))}
              </ul>
            </BrowserView>
            <MobileView>
              <Box>
                <IconButton onClick={toggleDrawer}>
                  <MenuSharpIcon
                    style={{ color: theme.palette.secondary.main }}
                  />
                </IconButton>

                <SideDrawer
                  open={open}
                  handleClose={handleClose}
                  onToggleDrawer={toggleDrawer}
                />
              </Box>
            </MobileView>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
