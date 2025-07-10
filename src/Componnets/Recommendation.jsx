import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import MoviesCards from "./MoviesCards";

const Recommendation = () => {
  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", color: "#FB9E3A" }}
        >
          Recommendation / Simillar
        </Typography>

        <Divider sx={{ background: "#FB9E3A" }} />

        <MoviesCards />
      </Box>
    </>
  );
};

export default Recommendation;
