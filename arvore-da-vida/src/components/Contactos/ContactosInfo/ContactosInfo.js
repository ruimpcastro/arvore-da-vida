import React from "react";
import { Box, Typography } from "@material-ui/core";
import CallSharpIcon from "@mui/icons-material/CallSharp";
import DialpadSharpIcon from "@mui/icons-material/DialpadSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";

const ContactosInfo = () => (
  <Box>
    
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h5">
        Centro Holístico Árvore da Vida, Sociedade Unipessoal Lda.
      </Typography>
      <Typography variant="body1">Morada domícilio fiscal</Typography>
      <Typography variant="body1">Ponta Delgada, 9500-400</Typography>
      <Typography variant="body1">Ponta Delgada</Typography>
      <Typography variant="body1" style={{ display: "flex", margin: "10px 0" }}>
        <CallSharpIcon style={{ marginRight: "5px" }} /> 296 123 456
      </Typography>
      <Typography variant="body1" style={{ display: "flex", margin: "10px 0" }}>
        <DialpadSharpIcon style={{ marginRight: "5px" }} /> 916 123 456
      </Typography>
      <Typography variant="body1" style={{ display: "flex", margin: "10px 0" }}>
        <EmailSharpIcon style={{ marginRight: "5px" }} /> email@email.com
      </Typography>
    </Box>
  </Box>
);

export default ContactosInfo;
