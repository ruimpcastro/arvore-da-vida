import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import ContactosForm from "./ContactosForm/ContactosForm";
import ContactosInfo from "./ContactosInfo/ContactosInfo";
import ContactosMap from "./ContactosMap/ContactosMap";

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
            mb={5}
          >
            <Box sx={{ width: "50%" }}>
              <Typography variant="h2">
                Não tenha dúvidas. Entre em contacto connosco
              </Typography>
            </Box>
            <div style={{ borderLeft: "1px solid" }}></div>
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <ContactosInfo />
              <ContactosForm />
            </Box>
          </Box>
        </Container>
        <Container>
          <ContactosMap />
        </Container>
      </Box>
    </div>
  );
};

export default Contactos;
