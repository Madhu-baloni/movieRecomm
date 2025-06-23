import { Box } from "@mui/material";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Box
        onClick={handleClick}
        sx={{
          width: "2rem",
          height: "2rem",
          background: "#FB9E3A",
          textAlign: "center",
        }}
      >
        <ArrowUpwardIcon sx={{ color: "white", mt: "0.3rem" }} />
      </Box>
    </>
  );
}

export default ScrollButton;
