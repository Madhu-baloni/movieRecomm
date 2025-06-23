import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import MoviesCards from "./MoviesCards";
function ResultPage() {
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
}

export default ResultPage;
