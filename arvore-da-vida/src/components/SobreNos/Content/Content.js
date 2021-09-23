import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

const Content = (props) => {
  const layoutStyle = props.layoutStyle;
  let layout = (
    <Box sx={{ marginBottom: "50px" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <img
            src={props.image}
            alt={props.alt}
            width="50%"
            style={{
              borderRadius: "2%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            }}
          />
          <Box
            ml={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              margin: "0 50px",
            }}
          >
            <Typography variant="h3">{props.title}</Typography>
            <Typography variant="body1">{props.body}</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
  if (layoutStyle === true) {
    layout = (
      <Box sx={{ marginBottom: "50px" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <img
              src={props.image}
              alt={props.alt}
              width="50%"
              style={{
                borderRadius: "2%",
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
              }}
            />
            <Box
              mr={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                margin: "0 50px",
              }}
            >
              <Typography variant="h3">{props.title}</Typography>
              <Typography variant="body1">{props.body}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    );
    return layout;
  }
  return layout;
};

export default Content;
