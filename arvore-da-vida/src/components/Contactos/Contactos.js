import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import ContactosForm from "./ContactosForm/ContactosForm";
import ContactosInfo from "./ContactosInfo/ContactosInfo";
import ContactosMap from "./ContactosMap/ContactosMap";

import CallSharpIcon from "@mui/icons-material/CallSharp";
import DialpadSharpIcon from "@mui/icons-material/DialpadSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

import { theme } from "../../MaterialColorTheme/MaterialColorTheme";

const Contactos = () => {
  return (
    <div>
      <Navbar />
      <Box mt={5}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              alignContent: "center",
            }}
          >
            <Box sx={{ width: "50%" }}>
              <Typography variant="h2">
                Não tenha dúvidas. Entre em contacto connosco
              </Typography>
            </Box>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <ContactosInfo />
              <ContactosForm />
            </Box>
          </Box>
        </Container>
        <ContactosMap />
      </Box>
    </div>
  );
};

export default Contactos;
