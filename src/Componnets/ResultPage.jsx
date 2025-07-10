import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import MoviesCards from "./MoviesCards";
const ResultPage = () => {
  return (
    <>
      <Container mt={2}>
        <Box sx={{ m: 2 }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
          >
            Results
          </Typography>

          <Divider sx={{ background: "#FB9E3A" }} />
        </Box>
        <MoviesCards />
      </Container>
    </>
  );
};

export default ResultPage;
