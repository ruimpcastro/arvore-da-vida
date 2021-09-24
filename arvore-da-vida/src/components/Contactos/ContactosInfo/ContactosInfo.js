import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import DialpadSharpIcon from "@mui/icons-material/DialpadSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const ContactosInfo = () => {
  const info = {
    empresa: "Centro Holístico Árvore da Vida, Sociedade Unipessoal Lda.",
    telefone: "296285239",
    telemovel: false,
    mail: "infoarvoredavida@gmail.com",
  };
  return (
    <Box>
      <Box
        mb={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {info.empresa && (
          <Typography
            variant="h5"
            gutterBottom="true"
            style={{ fontWeight: "500" }}
          >
            {info.empresa}
          </Typography>
        )}

        <Box
          p={5}
          sx={{
            boxShadow:
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
            borderRadius: "10px",
            textAlign: "start",
            marginTop: "20px",
          }}
        >
          <Typography variant="h6">Entre em contacto connosco</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {info.telefone && (
              <a
                href={`tel:+351${info.telefone}`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="Link">
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 5px 10px 5px" }}
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
                <Button variant="Link">
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 0" }}
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
                <Button variant="Link" style={{ textTransform: "none" }}>
                  <Typography
                    variant="body1"
                    style={{ display: "flex", margin: "10px 0" }}
                  >
                    <EmailSharpIcon style={{ marginRight: "5px" }} />{" "}
                    {info.mail}
                  </Typography>
                </Button>
              </a>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactosInfo;
